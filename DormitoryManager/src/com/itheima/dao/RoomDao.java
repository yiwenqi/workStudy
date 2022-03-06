package com.itheima.dao;

import com.itheima.po.Admin;
import com.itheima.po.Room;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 管理员DAO层接口
 */
public interface RoomDao {
	/**
	 * 通过 自习室的名字 查询自习室
	 * @param name
	 * @return
	 */
	Room findOneRoomByName(String name);
}
