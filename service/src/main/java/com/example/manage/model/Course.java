package com.example.manage.model;

import cn.afterturn.easypoi.excel.annotation.Excel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Course implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int cid;
    @Excel(name = "课程号", orderNum = "0")
    @Column(nullable = false, unique = false)
    private String cnum;
    @Excel(name = "课程名称", orderNum = "1")
    @Column(nullable = false, unique = false)
    private String cname;
    @Excel(name = "上课时间", orderNum = "2")
    @Column(nullable = false, unique = false)
    private String ctime;
    @Excel(name = "课程容量", orderNum = "3")
    @Column(nullable = false, unique = false)
    private int capacity;
    @Excel(name = "教师", orderNum = "4")
    @Column(nullable = false, unique = false)
    private String teacher;
    @Excel(name = "学分", orderNum = "5")
    @Column(nullable = false, unique = false)
    private float credit;

    public String getCnum() {
        return cnum;
    }

    public void setCnum(String cnum) {
        this.cnum = cnum;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getCtime() {
        return ctime;
    }

    public void setCtime(String ctime) {
        this.ctime = ctime;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public float getCredit() {
        return credit;
    }

    public void setCredit(float credit) {
        this.credit = credit;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
