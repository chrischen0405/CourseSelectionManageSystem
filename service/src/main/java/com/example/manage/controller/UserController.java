package com.example.manage.controller;

import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public int login(String userid, String password) {
        System.out.println("微信小程序调用接口！！！用户名:" + userid + "密码:" + password);
        int loginType = userService.loginType(userid, password);
        if (loginType==1){
            return 1;
        }else if (loginType==2){
            return 2;
        }else {
            return 0;
        }
    }
}
