package com.example.manage.service.impl;

import com.example.manage.dao.CourseRepository;
import com.example.manage.dao.RecordRepository;
import com.example.manage.dao.SelectCourseRepository;
import com.example.manage.model.Course;
import com.example.manage.model.Record;
import com.example.manage.service.CourseService;
import com.example.manage.service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private SelectCourseRepository selectCourseRepository;

    @Autowired
    private RecordRepository recordRepository;

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public Course getOneCourse(int cid) {
        return courseRepository.findByCid(cid);
    }

    @Override
    public int deleteCourseById(String admin, int courseId) {
        Course course = courseRepository.findByCid(courseId);
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("删除课程");
        selectCourseRepository.deleteByCid(courseId);
        if (selectCourseRepository.existsByCid(courseId)) {
            return 0;
        } else {
            courseRepository.deleteByCid(courseId);
            if (courseRepository.existsByCid(courseId)) {
                return 0;
            }
            recordRepository.save(record);
            return 1;
        }
    }

    @Override
    public int addCourse(String admin, String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit) {
        Course course = new Course();
        course.setCnum(courseNum);
        course.setCname(courseName);
        course.setCtime(courseTime);
        course.setCapacity(capacity);
        course.setTeacher(teacher);
        course.setCredit(credit);
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(courseNum);
        record.setOname(courseName);
        record.setOperate("增加课程");
        boolean isExist = courseRepository.existsByCnumAndCnameAndTeacher(courseNum, courseName, teacher);
        if (isExist) {
            return 0;
        } else {
            courseRepository.save(course);
            recordRepository.save(record);
            return 1;
        }
    }

    @Override
    public int updateCourse(String admin, int courseId, String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit) {
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(courseNum);
        record.setOname(courseName);
        record.setOperate("更新课程");
//        boolean isExist = courseRepository.existsByCnumAndCnameAndTeacher(courseNum, courseName, teacher);
//        if (isExist) {
//            return 0;
//        } else {
        courseRepository.updateCourse(courseId, courseNum, courseName, courseTime, capacity, teacher, credit);
        recordRepository.save(record);
        return 1;
//        }
    }

    @Override
    public List<Course> search(String keywords) {
        return courseRepository.findByCnumLikeOrCnameLike("%" + keywords + "%", "%" + keywords + "%");
    }

    @Override
    public int getPeopleNum(int cid) {
        return selectCourseRepository.countByCid(cid);
    }

    @Override
    public void export(String path, HttpServletResponse response) {
        List<Course> list = courseRepository.findAll();
        ExcelService.exportExcel(list, "course", "course", Course.class, "course.xls", response);
    }

    @Override
    public void imports(String path, HttpServletResponse response) {
        List<Course> list = null;
        list = ExcelService.importExcel(path, 1, 1, Course.class);
        for (Course course : list) {
            if (courseRepository.existsByCnumAndCnameAndTeacher(course.getCnum(), course.getCname(), course.getTeacher()))
                continue;
            else
                courseRepository.save(course);
        }
    }
}
