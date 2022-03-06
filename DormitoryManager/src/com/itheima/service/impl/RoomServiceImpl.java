package com.itheima.service.impl;

import com.itheima.dao.RoomDao;
import com.itheima.dao.SchoolDao;
import com.itheima.po.Room;
import com.itheima.po.School;
import com.itheima.service.RoomService;
import com.itheima.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("roomService")
public class RoomServiceImpl implements RoomService {
    @Autowired
    private SchoolDao schoolDao;
    @Autowired
    private RoomDao roomDao;

    @Override
    public List<Room> findAllRoomByBuild(int buildId) {
        return schoolDao.findAllRoomByBuild(buildId);
    }

    @Override
    public Room findOneRoomByName(String name) {
        return roomDao.findOneRoomByName(name);
    }
}
