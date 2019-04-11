package com.example.manage.service.impl;

import com.example.manage.dao.CourseRepository;
import com.example.manage.dao.KindRepository;
import com.example.manage.model.Kind;
import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KindServiceImpl implements KindService {
    @Autowired
    private KindRepository kindRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public int addType(String pname, String cnum, String type) {
        if (!courseRepository.existsByCnum(cnum)) {
            return 0;
        }
        if (kindRepository.existsByCnumAndPname(cnum, pname)) {
            return 2;
        }
        Kind kind = new Kind();
        kind.setPname(pname);
        kind.setCnum(cnum);
        kind.setType(type);
        kindRepository.save(kind);
        return 1;
    }

    @Override
    public String getCourseType(String cnum, String pname) {
        if (!kindRepository.existsByCnumAndPname(cnum, pname)){
            return "公选课";
        }
        Kind kind=kindRepository.findByCnumAndPname(cnum, pname);
        return kind.getType();
    }
}
