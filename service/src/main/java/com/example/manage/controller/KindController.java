package com.example.manage.controller;

import com.example.manage.model.Kind;
import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KindController {
    @Autowired
    private KindService kindService;

    @RequestMapping("/getAllType")
    public List<Kind> getAllType() {
        return kindService.getAllType();
    }

    @RequestMapping("/addType")
    public int addType(String pname, String cnum, String type) {
        return kindService.addType(pname, cnum, type);
    }

    @RequestMapping("/getCourseType")
    public String getCourseType(String cnum, String profession) {
        return kindService.getCourseType(cnum, profession);
    }
}
