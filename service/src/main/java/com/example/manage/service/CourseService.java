package com.example.manage.service;

import com.example.manage.model.Course;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface CourseService {
    List<Course> getAllCourse();

    Course getOneCourse(int cid);

    int deleteCourseById(String admin, int courseId);

    int addCourse(String admin, String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit);

    int updateCourse(String admin, int courseId, String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit);

    List<Course> search(String keywords);

    int getPeopleNum(int cid);

    void export(String path, HttpServletResponse response);

    void imports(String path, HttpServletResponse response);
}
