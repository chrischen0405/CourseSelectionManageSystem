package com.example.manage.service;

import com.example.manage.model.Kind;

import java.util.List;

public interface KindService {
    List<Kind> getAllType();

    int addType(String pname, String cnum, String type);

    String getCourseType(String cnum, String pname);
}
