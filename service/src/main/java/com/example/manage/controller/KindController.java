package com.example.manage.controller;

import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KindController {
    @Autowired
    private KindService kindService;

    @RequestMapping("/addType")
    public int addType(String pname, String cnum, String type) {
        System.out.println("addType " + cnum);
        return kindService.addType(pname, cnum, type);
    }
}
