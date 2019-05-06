package com.example.manage.service;

import com.example.manage.model.Kind;

import java.util.List;

public interface KindService {
    List<Kind> getAllType();

    Kind getOneType(int kid);

    int deleteTypeById(int kid);

    int updateType(int kid, String pname, String cnum, String type);

    int addType(String pname, String cnum, String type);

    String getCourseType(String cnum, String pname);

    List<Kind> search(String keywords);
}
