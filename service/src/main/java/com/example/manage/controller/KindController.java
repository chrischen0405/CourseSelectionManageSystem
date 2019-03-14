package com.example.manage.controller;

import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KindController {
    @Autowired
    private KindService kindService;

    @RequestMapping("/getType")
    public String getType(int pid, int cid) {
        System.out.println("getType");
        return kindService.getType(pid, cid);
    }
}
