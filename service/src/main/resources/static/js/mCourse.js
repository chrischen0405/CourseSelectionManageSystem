let CID = 0;
$(function () {
    initData();
    $('#search').click(function () {
        let keyword = $("#keyword").val();
        console.log(keyword);
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/searchCourse",
            data: {
                keywords: keyword
            },
            success: function (res) {
                init(res);
            }
        });
    });
    $('#addCourse').click(function () {
        let cnum = $("#cnum").val();
        let cname = $("#cname").val();
        let capacity = $("#capacity").val();
        let teacher = $("#teacher").val();
        let credit = $("#credit").val();
        let ctime = $("#ctime").val();
        if (cnum === '') {
            alert('课程号不能为空');
            return;
        }
        if (cname === '') {
            alert('课程名不能为空');
            return;
        }
        if (capacity === '') {
            alert('课程容量不能为空');
            return;
        }
        if (teacher === '') {
            alert('老师不能为空');
            return;
        }
        if (credit === '') {
            alert('学分不能为空');
            return;
        }
        if (ctime === '') {
            alert('上课时间不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/addCourse",
            data: {
                admin: ADMIN,
                cnum: cnum,
                cname: cname,
                capacity: capacity,
                teacher: teacher,
                credit: credit,
                ctime: ctime,
            },
            success: function (res) {
                console.log(res);
                if (res === 0) {
                    alert('该课程已存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#updateCourse').click(function () {
        let cnum = $("#cnum2").val();
        let cname = $("#cname2").val();
        let capacity = $("#capacity2").val();
        let teacher = $("#teacher2").val();
        let credit = $("#credit2").val();
        let ctime = $("#ctime2").val();
        if (cnum === '') {
            alert('课程号不能为空');
            return;
        }
        if (cname === '') {
            alert('课程名不能为空');
            return;
        }
        if (capacity === '') {
            alert('课程容量不能为空');
            return;
        }
        if (teacher === '') {
            alert('老师不能为空');
            return;
        }
        if (credit === '') {
            alert('学分不能为空');
            return;
        }
        if (ctime === '') {
            alert('上课时间不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/updateCourse",
            data: {
                admin: ADMIN,
                cid: CID,
                cnum: cnum,
                cname: cname,
                capacity: capacity,
                teacher: teacher,
                credit: credit,
                ctime: ctime,
            },
            success: function (res) {
                window.location.reload();
            }
        });
    });
    $('#exportCourse').click(function () {
        window.location.href = 'http://localhost:8080/exportCourse';
    });
    $('#importCourse').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/importCourse",
            success: function (res) {
                console.log(res);
                window.location.reload();
            },
            fail: function (e) {
                console.log(e);
                window.location.reload();
            }
        });
    });
})

function initData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllCourse",
        success: function (res) {
            console.log(res);
            init(res);
        }
    })
}

function init(res) {
    $('#tableBody').empty();
    let str = '';
    for (let i = 0; i < res.length; i++) {
        let objTime = JSON.parse(res[i].ctime);
        let strTime = '';
        for (let j = 0; j < objTime.length; j++) {
            strTime += objTime[j].classroom + ':';
            strTime += '星期' + objTime[j].week + ',';
            strTime += '第' + objTime[j].cstart + '节课,';
            strTime += objTime[j].time + '课时 ';
        }
        let row = '<div class="row">';
        let cnum = '<div class="col-xs-1 ">' + res[i].cnum + '</div>';
        let cname = '<div class="col-xs-1 ">' + res[i].cname + '</div>';
        let teacher = '<div class="col-xs-1 ">' + res[i].teacher + '</div>';
        let ctime = '<div class="col-xs-6 ">' + strTime + '</div>';
        let credit = '<div class="col-xs-1 ">' + res[i].credit + '</div>';
        let capacity = '<div class="col-xs-1 ">' + res[i].capacity + '</div>';
        let op = '<div class="col-xs-1"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#updateCourseModel" onclick="update(' + res[i].cid + ')">修改</button><button class="btn btn-danger btn-xs" onclick="deleteCourse(' + res[i].cid + ')">删除</button></div>';
        row = row + cnum + cname + teacher + ctime + credit + capacity + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}

function update(cid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getOneCourse",
        data: {
            cid: cid,
        },
        success: function (res) {
            CID = res.cid;
            $("#cnum2").val(res.cnum);
            $("#cname2").val(res.cname);
            $("#capacity2").val(res.capacity);
            $("#teacher2").val(res.teacher);
            $("#credit2").val(res.credit);
            $("#ctime2").val(res.ctime);
        }
    });
}

function deleteCourse(cid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/deleteCourseById",
        data: {
            admin: ADMIN,
            cid: cid,
        },
        success: function (res) {
            if (res === 0) {
                alert('删除课程失败');
            } else {
                initData();
            }
        }
    });
}

function QueryString(item) {
    var sValue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
}