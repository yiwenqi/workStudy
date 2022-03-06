package com.itheima.po;

public class Room {
    //所属楼层
    private int buildid;
    // 教室名字
    private String name;
    // 教室位置数量
    private int num;
    // 已占位置编号
    private String occupiedId;
    //剩余座位
    private int last;

    public int getBuildid() {
        return buildid;
    }

    public void setBuildid(int buildid) {
        this.buildid = buildid;
    }

    public int getLast() {
        return last;
    }

    public void setLast(int last) {
        this.last = last;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getOccupiedId() {
        return occupiedId;
    }

    public void setOccupiedId(String occupiedId) {
        this.occupiedId = occupiedId;
    }
}
