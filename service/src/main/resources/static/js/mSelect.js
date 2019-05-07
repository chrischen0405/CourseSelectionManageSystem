let SID = 0;
$(function () {
    initData();
    $('#search').click(function () {
        let keyword = $("#keyword").val();
        if (keyword == '') {
            window.location.reload();
        }
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/searchSelect",
            data: {
                keywords: keyword
            },
            success: function (res) {
                init(res);
            }
        });
    });
    $('#addSelect').click(function () {
        let cid = $("#cid").val();
        let uid = $("#uid").val();
        if (cid === '') {
            alert('课程编号不能为空');
            return;
        }
        if (uid === '') {
            alert('学生学号不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/managerSelectCourse",
            data: {
                uid: uid,
                cid: cid,
            },
            success: function (res) {
                console.log(res);
                if (res === 0) {
                    alert('该学生已选该课程');
                    return;
                } else if (res === 2) {
                    alert('该学生不存在');
                    return;
                } else if (res === 3) {
                    alert('该课程不存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#updateSelect').click(function () {
        let cid = $("#cid2").val();
        let uid = $("#uid2").val();
        if (cid === '') {
            alert('课程编号不能为空');
            return;
        }
        if (uid === '') {
            alert('学生学号不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/updateSelectCourse",
            data: {
                sid: SID,
                uid: uid,
                cid: cid,
            },
            success: function (res) {
                if (res === 0) {
                    alert('该学生已选该课程');
                    return;
                } else if (res === 2) {
                    alert('该学生不存在');
                    return;
                } else if (res === 3) {
                    alert('该课程不存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#exportSelect').click(function () {
        window.location.href = 'http://localhost:8080/exportSelect';
    });
    $('#importSelect').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/importSelect",
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
        url: "http://localhost:8080/getAllSelect",
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
        let row = '<div class="row">';
        let sdate = '<div class="col-xs-2 ">' + res[i][3] + '</div>';
        let uid = '<div class="col-xs-2 ">' + res[i][2] + '</div>';
        let uname = '<div class="col-xs-2 ">' + res[i][6] + '</div>';
        let cid = '<div class="col-xs-2 ">' + res[i][1] + '</div>';
        let cname = '<div class="col-xs-2 ">' + res[i][5] + '</div>';
        let op = '<div class="col-xs-2"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#updateSelectModel" onclick="update(' + res[i][0] + ')">修改</button><button class="btn btn-danger btn-xs" onclick="deleteSelect(' + res[i][0] + ')">删除</button></div>';
        row = row + sdate + uid + uname + cid + cname + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}

function update(sid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getOneSelect",
        data: {
            sid: sid,
        },
        success: function (res) {
            CID = res.sid;
            $("#uid2").val(res.uid);
            $("#cid2").val(res.cid);
        }
    });
}

function deleteSelect(sid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/managerDeleteRecord",
        data: {
            sid: sid,
        },
        success: function (res) {
            if (res === 1) {
                initData();
            } else {
                alert('删除课程失败');
            }
        }
    });
}