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
    public boolean deleteById(int sid) {
        return selectCourseRepository.deleteBySid(sid);
    }

    @Override
    public int selectCourse(String uid, int cid) {
        SelectCourse selectCourse = new SelectCourse();
        selectCourse.setUid(uid);
        selectCourse.setCid(cid);
        selectCourse.setSdate(new Date());
        return 1;
    }
}
