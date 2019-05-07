package com.example.manage.service;

import com.example.manage.model.User;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface UserService {
    int loginType(String userid, String password);

    List<User> getAllStudent();

    User getOneUser(String userId);

    int deleteStudentById(String admin, String userId);

    int addStudent(String admin, String userId, String userName, String college, String profession, String stuClass);

    int updateStudent(String admin, String userId, String userName, String college, String profession, String stuClass);

    List<User> search(String keywords);

    boolean getFlag();

    boolean setFlag();

    int resetPwd(String uid,String pwd);

    void export(String path, HttpServletResponse response);

    void imports(String path, HttpServletResponse response);
}
