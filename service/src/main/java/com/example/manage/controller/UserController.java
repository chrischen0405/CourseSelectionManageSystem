package com.example.manage.controller;

import com.example.manage.model.User;
import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public int login(String userid, String password) {
        System.out.println("login用户名:" + userid + "密码:" + password);
        int loginType = userService.loginType(userid, password);
        return loginType;
    }

    @RequestMapping("/getAllStudent")
    public List<User> getAllStudent() {
        System.out.println("getAllStudent成功");
        return userService.getAllStudent();
    }

    @RequestMapping("/getOneUser")
    public User getOneUser(String userId) {
        System.out.println("getOneUser:" + userId);
        return userService.getOneUser(userId);
    }

    @RequestMapping("/deleteStudentById")
    public boolean deleteStudentById(String userid) {
        System.out.println("deleteStudentById:" + userid);
        return userService.deleteStudentById(userid);
    }

    @RequestMapping("/addStudent")
    public int addStudent(String userId, String userName, String college, String profession, String stuClass) {
        System.out.println("addStudent:" + userId);
        return userService.addStudent(userId, userName, college, profession, stuClass);
    }

    @RequestMapping("/updateStudent")
    public int updateStudent(String userId, String userName, String college, String profession, String stuClass) {
        System.out.println("updateStudent:" + userId);
        return userService.updateStudent(userId, userName, college, profession, stuClass);
    }
}
