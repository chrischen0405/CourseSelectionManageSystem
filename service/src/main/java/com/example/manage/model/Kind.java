package com.example.manage.model;

import cn.afterturn.easypoi.excel.annotation.Excel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Kind implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int kid;
    @Excel(name = "专业名称", orderNum = "0")
    @Column(nullable = false, unique = false)
    private String pname;
    @Excel(name = "课程号", orderNum = "1")
    @Column(nullable = false, unique = false)
    private String cnum;
    @Excel(name = "课程类型", orderNum = "2")
    @Column(nullable = false, unique = false)
    private String type;

    public int getKid() {
        return kid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCnum() {
        return cnum;
    }

    public void setCnum(String cnum) {
        this.cnum = cnum;
    }
}
