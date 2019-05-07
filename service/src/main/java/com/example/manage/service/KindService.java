package com.example.manage.service;

import com.example.manage.model.Kind;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface KindService {
    List<Kind> getAllType();

    Kind getOneType(int kid);

    int deleteTypeById(int kid);

    int updateType(int kid, String pname, String cnum, String type);

    int addType(String pname, String cnum, String type);

    String getCourseType(String cnum, String pname);

    List<Kind> search(String keywords);

    void export(String path, HttpServletResponse response);

    void imports(String path, HttpServletResponse response);
}
