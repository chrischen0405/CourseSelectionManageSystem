package com.example.manage.service;

public interface KindService {
    int addType(String pname, String cnum, String type);

    String getCourseType(String cnum, String pname);
}
