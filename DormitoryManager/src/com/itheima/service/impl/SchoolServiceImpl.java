package com.itheima.service.impl;

import com.itheima.dao.SchoolDao;
import com.itheima.po.School;
import com.itheima.po.User;
import com.itheima.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("schoolService")
public class SchoolServiceImpl implements SchoolService {
    @Autowired
    private SchoolDao schoolDao;
    @Override
    public List<School> findAllSchool() {
        return schoolDao.findAllSchool();
    }

    @Override
    public List<School> findAllBuildsBySchool(String school) {
        return schoolDao.findAllBuildsBySchool(school);
    }
}
