package com.example.manage.service.impl;

import com.example.manage.dao.CourseRepository;
import com.example.manage.model.Course;
import com.example.manage.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;


    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public int deleteCourseById(int courseId) {
        courseRepository.deleteByCid(courseId);
        return 1;
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
        Course course = new Course();
        course.setCid(courseId);
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
    public List<Course> search(String keywords) {
        return courseRepository.findByCnumLikeOrCnameLike("%" + keywords + "%", "%" + keywords + "%");
    }
}
