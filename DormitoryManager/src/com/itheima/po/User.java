package com.itheima.po;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class User {
    // 用户ID
    private  Integer uid;
    // 用户名
    private  String  username;

    @JsonIgnore
    // 密码
    private  String  password;
    // 学生名字
    private  String  name;
    // 学生电话号码
    private  String phone;

    @JsonIgnore
    private  Integer power;

    private  String  describe;

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getPower() {
        return power;
    }

    public void setPower(Integer power) {
        this.power = power;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }
}
