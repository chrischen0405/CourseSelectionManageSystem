package com.example.manage.dao;

import com.example.manage.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> findAll();
    boolean deleteByCid(int cid);
    boolean existsByCnumAndCnameAndTeacher(String cnum,String cname,String teacher);

}
