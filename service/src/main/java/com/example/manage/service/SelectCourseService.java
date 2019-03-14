package com.example.manage.service;

import com.example.manage.model.SelectCourse;

import java.util.List;

public interface SelectCourseService {
    List<SelectCourse> findAll();

    boolean deleteById(int sid);

    int selectCourse(String uid, int cid);
}
