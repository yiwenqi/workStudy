package com.itheima.service.impl;

import com.itheima.dao.AdminDao;
import com.itheima.dao.UserDao;
import com.itheima.po.Admin;
import com.itheima.po.User;
import com.itheima.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
    // 注入UserDao
    @Autowired
    private UserDao userDao;

    @Override
    public User findUser(User user) {
        User u = userDao.findUser(user);
        return u;
    }
}
