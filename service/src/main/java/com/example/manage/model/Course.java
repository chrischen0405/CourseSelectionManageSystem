package com.example.manage.model;

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
    @Column(nullable = false, unique = false)
    private String cnum;
    @Column(nullable = false, unique = false)
    private String cname;
    @Column(nullable = false, unique = false)
    private int week;
    @Column(nullable = false, unique = false)
    private int cstart;
    @Column(nullable = false, unique = false)
    private int ctime;
    @Column(nullable = false, unique = false)
    private String classroom;
    @Column(nullable = false, unique = false)
    private String teacher;

    public int getCid() {
        return cid;
    }

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

    public int getWeek() {
        return week;
    }

    public void setWeek(int week) {
        this.week = week;
    }

    public int getCstart() {
        return cstart;
    }

    public void setCstart(int cstart) {
        this.cstart = cstart;
    }

    public int getCtime() {
        return ctime;
    }

    public void setCtime(int ctime) {
        this.ctime = ctime;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}