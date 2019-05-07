package com.example.manage.controller;

import com.example.manage.model.Kind;
import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class KindController {
    @Autowired
    private KindService kindService;

    @RequestMapping("/getAllType")
    public List<Kind> getAllType() {
        return kindService.getAllType();
    }

    @RequestMapping("/getOneType")
    public Kind getOneType(int kid) {
        return kindService.getOneType(kid);
    }

    @RequestMapping("/deleteTypeById")
    public int deleteTypeById(int kid) {
        return kindService.deleteTypeById(kid);
    }

    @RequestMapping("/updateType")
    public int updateType(int kid, String pname, String cnum, String type) {
        return kindService.updateType(kid, pname, cnum, type);
    }

    @RequestMapping("/addType")
    public int addType(String pname, String cnum, String type) {
        return kindService.addType(pname, cnum, type);
    }

    @RequestMapping("/getCourseType")
    public String getCourseType(String cnum, String profession) {
        return kindService.getCourseType(cnum, profession);
    }

    @RequestMapping("/searchType")
    public List<Kind> searchType(String keywords) {
        return kindService.search(keywords);
    }

    @RequestMapping("/importType")
    public void importType(String path, HttpServletResponse response) {
        path = "C:\\Users\\chenwenjie\\Desktop\\type.xls";
        kindService.imports(path, response);
    }

    @RequestMapping("/exportType")
    public void exportType(String path, HttpServletResponse response) {
//        path = "C:\\Users\\chenwenjie\\Desktop";
        kindService.export(path, response);
    }
}
