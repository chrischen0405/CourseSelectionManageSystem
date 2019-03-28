package com.example.manage.service.impl;

import com.example.manage.dao.CourseRepository;
import com.example.manage.dao.SelectCourseRepository;
import com.example.manage.model.Course;
import com.example.manage.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private SelectCourseRepository selectCourseRepository;

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public Course getOneCourse(int cid) {
        return courseRepository.findByCid(cid);
    }

    @Override
    public int deleteCourseById(int courseId) {
        selectCourseRepository.deleteByCid(courseId);
        if (selectCourseRepository.existsByCid(courseId)) {
            return 0;
        } else {
            courseRepository.deleteByCid(courseId);
            if (courseRepository.existsByCid(courseId)) {
                return 0;
            }
            return 1;
        }
    }

    @Override
    public int addCourse(String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit) {
        Course course = new Course();
        course.setCnum(courseNum);
        course.setCname(courseName);
        course.setCtime(courseTime);
        course.setCapacity(capacity);
        course.setTeacher(teacher);
        course.setCredit(credit);
        boolean isExist = courseRepository.existsByCnumAndCnameAndTeacher(courseNum, courseName, teacher);
        if (isExist) {
            return 0;
        } else {
            courseRepository.save(course);
            return 1;
        }
    }

    @Override
    public int updateCourse(int courseId, String courseNum, String courseName, String courseTime, int capacity, String teacher, float credit) {
//        boolean isExist = courseRepository.existsByCnumAndCnameAndTeacher(courseNum, courseName, teacher);
//        if (isExist) {
//            return 0;
//        } else {
        courseRepository.updateCourse(courseId, courseNum, courseName, courseTime, capacity, teacher, credit);
        return 1;
//        }
    }

    @Override
    public List<Course> search(String keywords) {
        return courseRepository.findByCnumLikeOrCnameLike("%" + keywords + "%", "%" + keywords + "%");
    }
}
