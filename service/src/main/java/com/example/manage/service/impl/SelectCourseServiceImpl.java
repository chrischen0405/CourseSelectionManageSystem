package com.example.manage.service.impl;

import com.example.manage.dao.SelectCourseRepository;
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

    @Override
    public List<SelectCourse> findAll() {
        return selectCourseRepository.findAll();
    }

    @Override
    public int deleteById(int sid) {
        selectCourseRepository.deleteBySid(sid);
        return 1;
    }

    @Override
    public int selectCourse(String uid, int cid) {
        SelectCourse selectCourse = new SelectCourse();
        selectCourse.setUid(uid);
        selectCourse.setCid(cid);
        selectCourse.setSdate(new Date());
        if (selectCourseRepository.existsByUidAndCid(uid, cid)) {
            return 0;
        } else {
            selectCourseRepository.save(selectCourse);
            return 1;
        }
    }

    @Override
    public List<Object[]> courseList(String uid) {
        return selectCourseRepository.findByUid(uid);
    }
}
