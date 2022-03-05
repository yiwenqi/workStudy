package com.itheima.util;

import static com.itheima.util.MD5Util.MD5EncodeUtf8;
import static org.junit.Assert.*;

public class MD5UtilTest {

    @org.junit.Test
    public void MD5EncodeUtf81() {
        System.out.println(MD5EncodeUtf8("123456"));
    }
}