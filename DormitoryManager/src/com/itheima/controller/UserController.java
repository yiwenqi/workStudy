package com.itheima.controller;


import com.itheima.po.*;
import com.itheima.service.AdminService;
import com.itheima.service.RoomService;
import com.itheima.service.SchoolService;
import com.itheima.service.UserService;
import com.itheima.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * 用户控制器类
 */
@Controller
public class UserController {
	// 依赖注入
	@Autowired
	private AdminService adminService;
	@Autowired
	private UserService userService;
	@Autowired
	private SchoolService schoolService;
	@Autowired
	private RoomService roomService;
	/**
	 * 用户登录
	 */
	/**
	 * 将提交数据(username,password)写入Admin对象
	 */
	@RequestMapping(value = "/user/login")
	public String login(User user, Model model, HttpSession session, HttpServletRequest request) {
		// 通过账号和密码查询用户
		user.setPassword(MD5Util.MD5EncodeUtf8(user.getPassword()));
		User us = userService.findUser(user);
		List<School> schools = schoolService.findAllSchool();
		List<School> sschools = schoolService.findAllBuildsBySchool("南校区");
		List<School> nschools = schoolService.findAllBuildsBySchool("北校区");
		List<Room> rooms = roomService.findAllRoomByBuild(1);
		model.addAttribute("sschools",sschools);
		model.addAttribute("nschools",nschools);
		model.addAttribute("rooms",rooms);
		if(us!=null){
			session.setAttribute("us", us);
			return "index";
		}
		model.addAttribute("msg", "用户名或密码错误，请重新登录！");

		return "login";
	}

	@RequestMapping(value = "/to/login")
	public String toLogin() {
		return "login";
	}

	/**
	 * 退出登录
	 */
	@RequestMapping(value = "/user/loginOut")
	public String loginOut(Admin admin, Model model, HttpSession session) {
		session.invalidate();
		return "login";

	}

	/**
	 * 分页查询
	 */
	@RequestMapping(value = "/user/findAdmin")
	public String findAdmin(String a_username, String a_describe,Integer pageIndex,
							Integer a_id ,Integer pageSize, Model model) {

		PageInfo<Admin> ai = adminService.findPageInfo(a_username,a_describe,
								a_id,pageIndex,pageSize);
		model.addAttribute("ai",ai);
		return "admin_list";
	}

	/**
	 * 导出Excel
	 */
	@RequestMapping(value = "/user/exportadminlist" , method = RequestMethod.POST)
    @ResponseBody
	public List<Admin> exportAdmin(){
		List<Admin> admin = adminService.getAll();
		return admin;
	}

	/**
	 * 添加管理员信息
	 */
	@RequestMapping(value = "/user/addAdmin" ,method = RequestMethod.POST)
	@ResponseBody
	public String addAdmin( @RequestBody Admin admin) {

		admin.setA_password(MD5Util.MD5EncodeUtf8(admin.getA_password()));
		int a = adminService.addAdmin(admin);
		return "admin_list";
	}

	/**
	 * 删除管理员信息；将请求体a_id写入参数a_id
	 */
	@RequestMapping( "/user/deleteAdmin")
	@ResponseBody
	public String deleteAdmin(Integer a_id) {
		int a = adminService.deleteAdmin(a_id);
		return "admin_list";
	}

	/**
	 * 修改管理员信息
	 */
	/**
	 * 将提交数据(a_id,a_username...)写入Admin对象
	 */
	@RequestMapping( value = "/user/updateAdmin", method = RequestMethod.POST)
	public String updateAdmin(Admin admin) {

		admin.setA_password(MD5Util.MD5EncodeUtf8(admin.getA_password()));
		int a = adminService.updateAdmin(admin);
		return "redirect:/findAdmin";
	}


	/**
	 * 根据管理员Id搜索;将请求数据a_id写入参数a_id
	 */
	@RequestMapping( "/user/findAdminById")
	public String findAdminById( Integer a_id,HttpSession session) {
		Admin a= adminService.findAdminById(a_id);
		session.setAttribute("a",a);
		return "admin_edit";
	}

}
