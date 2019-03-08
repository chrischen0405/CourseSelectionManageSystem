package com.example.manage.controller;

import com.example.manage.dao.CourseRepository;
import com.example.manage.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @RequestMapping("/getAllCourse")
    public List<Course> getAllCourse(){
        System.out.println("测试成功");
        return courseRepository.findAll();
    }
}
