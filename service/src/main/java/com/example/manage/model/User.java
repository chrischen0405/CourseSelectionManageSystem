package com.example.manage.model;

import cn.afterturn.easypoi.excel.annotation.Excel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long No;
    @Excel(name = "学号", orderNum = "0")
    @Column(nullable = false, unique = true)
    private String uid;
    @Excel(name = "姓名", orderNum = "1")
    @Column(nullable = false, unique = false)
    private String uname;
    @Column(nullable = false, unique = false)
    private String pwd;
    @Excel(name = "类型", orderNum = "2")
    @Column(nullable = false, unique = false)
    private int type;
    @Excel(name = "分院", orderNum = "3")
    @Column(nullable = true, unique = false)
    private String college;
    @Excel(name = "专业", orderNum = "4")
    @Column(nullable = true, unique = false)
    private String profession;
    @Excel(name = "班级", orderNum = "5")
    @Column(nullable = true, unique = false)
    private String stuClass;
    @Column(nullable = true, unique = true)
    private String wxid;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getStuClass() {
        return stuClass;
    }

    public void setStuClass(String stuClass) {
        this.stuClass = stuClass;
    }

    public String getWxid() {
        return wxid;
    }

    public void setWxid(String wxid) {
        this.wxid = wxid;
    }

    public Long getNo() {
        return No;
    }

    public void setNo(Long no) {
        No = no;
    }
}
