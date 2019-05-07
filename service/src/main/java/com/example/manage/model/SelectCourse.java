package com.example.manage.model;

import cn.afterturn.easypoi.excel.annotation.Excel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class SelectCourse implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int sid;
    @Excel(name = "学生学号", orderNum = "0")
    @Column(nullable = false, unique = false)
    private String uid;
    @Excel(name = "课程编号", orderNum = "1")
    @Column(nullable = false, unique = false)
    private int cid;
    @Excel(name = "选课日期", exportFormat = "yyyy-MM-dd", orderNum = "2")
    @Column(nullable = false, unique = false)
    private Date sdate;

    public int getSid() {
        return sid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public Date getSdate() {
        return sdate;
    }

    public void setSdate(Date sdate) {
        this.sdate = sdate;
    }
}
