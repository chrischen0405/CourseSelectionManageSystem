package com.example.manage.controller;

import com.example.manage.model.Course;
import com.example.manage.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping("/getAllCourse")
    public List<Course> getAllCourse() {
        return courseService.getAllCourse();
    }

    @RequestMapping("/getOneCourse")
    public Course getOneCourse(int cid) {
        return courseService.getOneCourse(cid);
    }

    @RequestMapping("/deleteCourseById")
    public int deleteCourseById(String admin, int cid) {
        return courseService.deleteCourseById(admin, cid);
    }

    @RequestMapping("/addCourse")
    public int addCourse(String admin, String cnum, String cname, String ctime, int capacity, String teacher, float credit) {
        return courseService.addCourse(admin, cnum, cname, ctime, capacity, teacher, credit);
    }

    @RequestMapping("/updateCourse")
    public int updateCourse(String admin, int cid, String cnum, String cname, String ctime, int capacity, String teacher, float credit) {
        return courseService.updateCourse(admin, cid, cnum, cname, ctime, capacity, teacher, credit);
    }

    @RequestMapping("/searchCourse")
    public List<Course> searchCourse(String keywords) {
        return courseService.search(keywords);
    }

    @RequestMapping("/getPeopleNum")
    public int getPeopleNum(int cid) {
        return courseService.getPeopleNum(cid);
    }

    @RequestMapping("/importCourse")
    public void importCourse(String path, HttpServletResponse response) {
        path = "C:\\Users\\chenwenjie\\Desktop\\course.xls";
        courseService.imports(path, response);
    }

    @RequestMapping("/exportCourse")
    public void exportCourse(String path, HttpServletResponse response) {
//        path = "C:\\Users\\chenwenjie\\Desktop";
        courseService.export(path, response);
    }
}
