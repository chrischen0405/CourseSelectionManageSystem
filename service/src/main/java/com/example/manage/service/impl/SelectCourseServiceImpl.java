package com.example.manage.service.impl;

import com.example.manage.dao.CourseRepository;
import com.example.manage.dao.RecordRepository;
import com.example.manage.dao.SelectCourseRepository;
import com.example.manage.model.Course;
import com.example.manage.model.Record;
import com.example.manage.model.SelectCourse;
import com.example.manage.service.SelectCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SelectCourseServiceImpl implements SelectCourseService {
    @Autowired
    private SelectCourseRepository selectCourseRepository;

    @Autowired
    private RecordRepository recordRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<SelectCourse> findAll() {
        return selectCourseRepository.findAll();
    }

    @Override
    public int deleteById(String uid, int sid) {
        SelectCourse selectCourse = selectCourseRepository.findBySid(sid);
        Course course = courseRepository.findByCid(selectCourse.getCid());
        Record record = new Record();
        record.setUid(uid);
        record.setDate(new Date());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("退课");
        selectCourseRepository.deleteBySid(sid);
        recordRepository.save(record);
        return 1;
    }

    @Override
    public int selectCourse(String uid, int cid) {
        SelectCourse selectCourse = new SelectCourse();
        selectCourse.setUid(uid);
        selectCourse.setCid(cid);
        selectCourse.setSdate(new Date());
        Course course = courseRepository.findByCid(cid);
        Record record = new Record();
        record.setUid(uid);
        record.setDate(selectCourse.getSdate());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("选课");
        if (selectCourseRepository.existsByUidAndCid(uid, cid)) {
            return 0;
        } else {
            selectCourseRepository.save(selectCourse);
            recordRepository.save(record);
            return 1;
        }
    }

    @Override
    public List<Object[]> courseList(String uid) {
        return selectCourseRepository.findByUid(uid);
    }
}
