package com.itheima.service;

import com.itheima.po.School;
import com.itheima.po.User;

import java.util.List;

public interface SchoolService {
    // 通过账号和密码查询用户
    public List<School> findAllSchool();

    List<School> findAllBuildsBySchool(String school);
}
