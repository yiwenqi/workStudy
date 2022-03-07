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
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户控制器类
 */
@Controller
public class RoomController {
	// 依赖注入
	@Autowired
	private RoomService roomService;

	/**
	 * 通过 room.name 查询 room
	 */
	@RequestMapping(value = "/find/room")
	@ResponseBody
	public Map<String, Object> findRoom(String name, Model model, HttpSession session, HttpServletRequest request) {
		// 通过账号和密码查询用户
		Room room = roomService.findOneRoomByName(name);
		String[] strings = room.getOccupiedId().split(",");
		List<String> rid = Arrays.asList(strings);

		model.addAttribute("rid",rid);
		model.addAttribute("last",room.getLast());

		Map<String,Object> selectRoom = new HashMap<String, Object>();
		selectRoom.put("rid",rid);
		selectRoom.put("last",room.getLast());

		return selectRoom;
	}
}
