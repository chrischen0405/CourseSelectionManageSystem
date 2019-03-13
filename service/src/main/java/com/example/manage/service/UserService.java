package com.example.manage.service;

import com.example.manage.model.User;

import java.util.List;

public interface UserService {
    int loginType(String userid, String password);

    List<User> getAllStudent();

    boolean deleteStudentById(String userId);

    int addStudent(String userId, String userName, String college, String profession, String stuClass);

    int updateStudent(String userId, String userName, String college, String profession, String stuClass);
}
