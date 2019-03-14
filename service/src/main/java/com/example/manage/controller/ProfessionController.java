package com.example.manage.controller;

import com.example.manage.model.Profession;
import com.example.manage.service.ProfessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfessionController {
    @Autowired
    private ProfessionService professionService;

    @RequestMapping("/findByCollege")
    public List<Profession> findByCollege(String college) {
        return professionService.findByCollege(college);
    }
}
