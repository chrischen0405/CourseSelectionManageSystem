package com.example.manage.service;

import com.example.manage.model.SelectCourse;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface SelectCourseService {
    List<SelectCourse> findAll();

    List<Object[]> getAllSelect();

    SelectCourse getOneSelect(int sid);

    int deleteById(String uid, int sid);

    int managerDeleteRecord(int sid);

    int selectCourse(String uid, int cid);

    int managerSelectCourse(String uid, int cid);

    int updateSelectCourse(int sid, String uid, int cid);

    List<Object[]> courseList(String uid);

    List<Object[]> search(String keywords);

    void export(String path, HttpServletResponse response);

    void imports(String path, HttpServletResponse response);
}
