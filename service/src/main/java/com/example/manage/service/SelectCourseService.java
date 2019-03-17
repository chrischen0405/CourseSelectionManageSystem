package com.example.manage.service;

import com.example.manage.model.SelectCourse;

import java.util.List;

public interface SelectCourseService {
    List<SelectCourse> findAll();

    int deleteById(int sid);

    int selectCourse(String uid, int cid);

    List<Object[]> courseList(String uid);
}
