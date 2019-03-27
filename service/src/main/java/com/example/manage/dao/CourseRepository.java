package com.example.manage.dao;

import com.example.manage.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> findAll();

    Course findByCid(int cid);

    @Transactional
    int deleteByCid(int cid);

    boolean existsByCid(int Cid);

    boolean existsByCnumAndCnameAndTeacher(String cnum, String cname, String teacher);

    List<Course> findByCnumLikeOrCnameLike(String cnum, String cname);
}
