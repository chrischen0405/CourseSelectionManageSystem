package com.example.manage.controller;

import com.example.manage.model.SelectCourse;
import com.example.manage.service.SelectCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SelectCourseController {
    @Autowired
    private SelectCourseService selectCourseService;

    @RequestMapping("/allRecord")
    public List<SelectCourse> allRecord() {
        return selectCourseService.findAll();
    }

    @RequestMapping("/deleteRecord")
    public int deleteRecord(String uid, int sid) {
        return selectCourseService.deleteById(uid, sid);
    }

    @RequestMapping("/selectCourse")
    public int selectCourse(String uid, int cid) {
        return selectCourseService.selectCourse(uid, cid);
    }

    @RequestMapping("/courseList")
    public List<Object[]> courseList(String uid) {
        return selectCourseService.courseList(uid);
    }
}
