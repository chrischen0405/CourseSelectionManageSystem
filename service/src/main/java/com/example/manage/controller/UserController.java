package com.example.manage.controller;

import com.example.manage.model.User;
import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public int login(String userid, String password) {
        return userService.loginType(userid, password);
    }

    @RequestMapping("/getAllStudent")
    public List<User> getAllStudent() {
        return userService.getAllStudent();
    }

    @RequestMapping("/getOneUser")
    public User getOneUser(String userId) {
        return userService.getOneUser(userId);
    }

    @RequestMapping("/deleteStudentById")
    public int deleteStudentById(String admin, String userid) {
        return userService.deleteStudentById(admin, userid);
    }

    @RequestMapping("/addStudent")
    public int addStudent(String admin, String userId, String userName, String college, String profession, String stuClass) {
        return userService.addStudent(admin, userId, userName, college, profession, stuClass);
    }

    @RequestMapping("/updateStudent")
    public int updateStudent(String admin, String userId, String userName, String college, String profession, String stuClass) {
        return userService.updateStudent(admin, userId, userName, college, profession, stuClass);
    }

    @RequestMapping("/searchStudent")
    public List<User> searchStudent(String keywords) {
        return userService.search(keywords);
    }

    @RequestMapping("/getFlag")
    public boolean getFlag() {
        return userService.getFlag();
    }

    @RequestMapping("/setFlag")
    public boolean setFlag() {
        return userService.setFlag();
    }

    @RequestMapping("/resetPwd")
    public int resetPwd(String uid, String pwd) {
        return userService.resetPwd(uid, pwd);
    }

    @RequestMapping("/importUser")
    public void importUser(String path, HttpServletResponse response) {
        path = "C:\\Users\\chenwenjie\\Desktop\\user.xls";
        userService.imports(path, response);
    }

    @RequestMapping("/exportUser")
    public void exportUser(String path, HttpServletResponse response) {
//        path = "C:\\Users\\chenwenjie\\Desktop";
        userService.export(path, response);
    }
}
