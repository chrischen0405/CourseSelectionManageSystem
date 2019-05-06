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

    @RequestMapping("/getOneSelect")
    public SelectCourse getOneSelect(int sid) {
        return selectCourseService.getOneSelect(sid);
    }

    @RequestMapping("/deleteRecord")
    public int deleteRecord(String uid, int sid) {
        return selectCourseService.deleteById(uid, sid);
    }

    @RequestMapping("/managerDeleteRecord")
    public int managerDeleteRecord(int sid) {
        return selectCourseService.managerDeleteRecord(sid);
    }

    @RequestMapping("/selectCourse")
    public int selectCourse(String uid, int cid) {
        return selectCourseService.selectCourse(uid, cid);
    }

    @RequestMapping("/managerSelectCourse")
    public int managerSelectCourse(String uid, int cid) {
        return selectCourseService.managerSelectCourse(uid, cid);
    }

    @RequestMapping("/updateSelectCourse")
    public int updateSelectCourse(int sid, String uid, int cid) {
        return selectCourseService.updateSelectCourse(sid, uid, cid);
    }

    @RequestMapping("/courseList")
    public List<Object[]> courseList(String uid) {
        return selectCourseService.courseList(uid);
    }

    @RequestMapping("/searchSelect")
    public List<SelectCourse> searchSelect(String keywords) {
        return selectCourseService.search(keywords);
    }
}
