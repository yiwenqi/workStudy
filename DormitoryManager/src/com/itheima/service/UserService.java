package com.itheima.service;

import com.itheima.po.Admin;
import com.itheima.po.User;

public interface UserService {
    // 通过账号和密码查询用户
    public User findUser(User user);
}
