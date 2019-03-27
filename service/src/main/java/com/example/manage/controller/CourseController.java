package com.example.manage.controller;

import com.example.manage.model.Course;
import com.example.manage.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping("/getAllCourse")
    public List<Course> getAllCourse() {
        System.out.println("getAllCourse");
        return courseService.getAllCourse();
    }

    @RequestMapping("/getOneCourse")
    public Course getOneCourse(int cid) {
        System.out.println("getOneCourse:" + cid);
        return courseService.getOneCourse(cid);
    }

    @RequestMapping("/deleteCourseById")
    public int deleteCourseById(int cid) {
        System.out.println("deleteCourseById:" + cid);
        return courseService.deleteCourseById(cid);
    }

    @RequestMapping("/addCourse")
    public int addCourse(String cnum, String cname, String ctime, int capacity, String teacher, float credit) {
        System.out.println("addCourse");
        return courseService.addCourse(cnum, cname, ctime, capacity, teacher, credit);
    }

    @RequestMapping("/updateCourse")
    public int updateCourse(int cid, String cnum, String cname, String ctime, int capacity, String teacher, float credit) {
        System.out.println("updateCourse:" + cid);
        return courseService.updateCourse(cid, cnum, cname, ctime, capacity, teacher, credit);
    }

    @RequestMapping("/searchCourse")
    public List<Course> searchCourse(String keywords) {
        System.out.println("search:" + keywords);
        return courseService.search(keywords);
    }
}
