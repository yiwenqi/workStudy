package com.itheima.service;

import com.itheima.po.Room;
import com.itheima.po.School;

import java.util.List;

public interface RoomService {
    // 通过建组查房间
    List<Room> findAllRoomByBuild(int buildId);

    Room findOneRoomByName(String name);
}
