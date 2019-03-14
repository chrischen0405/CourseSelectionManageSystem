package com.example.manage.dao;

import com.example.manage.model.SelectCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SelectCourseRepository extends JpaRepository<SelectCourse, Integer> {
    List<SelectCourse> findAll();

    boolean deleteBySid(int sid);
}
