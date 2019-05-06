$(function () {
    initData();
    $('#search').click(function () {
        let keyword = $("#keyword").val();
        console.log(keyword);
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/searchStudent",
            data: {
                keywords: keyword
            },
            success: function (res) {
                init(res);
            }
        });
    });
    $('#addStudent').click(function () {
        let userId = $("#uid").val();
        let userName = $("#uname").val();
        let college = $("#college").val();
        let profession = $("#profession").val();
        let stuClass = $("#stuClass").val();
        if (userId === '') {
            alert('学生学号不能为空');
            return;
        }
        if (userName === '') {
            alert('学生姓名不能为空');
            return;
        }
        if (college === '') {
            alert('学生分院不能为空');
            return;
        }
        if (profession === '') {
            alert('学生专业不能为空');
            return;
        }
        if (stuClass === '') {
            alert('学生班级不能为空');
            return;
        }
        console.log(userId, userName, college, profession, stuClass);
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/addStudent",
            data: {
                admin: ADMIN,
                userId: userId,
                userName: userName,
                college: college,
                profession: profession,
                stuClass: stuClass,
            },
            success: function (res) {
                console.log(res);
                if (res === 0) {
                    alert('该学生已存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#updateStudent').click(function () {
        let userId = $("#uid2").val();
        let userName = $("#uname2").val();
        let college = $("#college2").val();
        let profession = $("#profession2").val();
        let stuClass = $("#stuClass2").val();
        if (userId === '') {
            alert('学生学号不能为空');
            return;
        }
        if (userName === '') {
            alert('学生姓名不能为空');
            return;
        }
        if (college === '') {
            alert('学生分院不能为空');
            return;
        }
        if (profession === '') {
            alert('学生专业不能为空');
            return;
        }
        if (stuClass === '') {
            alert('学生班级不能为空');
            return;
        }
        console.log(userId, userName, college, profession, stuClass);
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/updateStudent",
            data: {
                admin: ADMIN,
                userId: userId,
                userName: userName,
                college: college,
                profession: profession,
                stuClass: stuClass,
            },
            success: function (res) {
                window.location.reload();
            }
        });
    });
});

function initData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllStudent",
        success: function (res) {
            init(res);
        }
    });
}

function init(res) {
    $('#tableBody').empty();
    let str = '';
    for (let i = 0; i < res.length; i++) {
        let row = '<div class="row">';
        let uid = '<div class="col-xs-2 ">' + res[i].uid + '</div>';
        let uname = '<div class="col-xs-2 ">' + res[i].uname + '</div>';
        let college = '<div class="col-xs-2 ">' + res[i].college + '</div>';
        let profession = '<div class="col-xs-2 ">' + res[i].profession + '</div>';
        let stuClass = '<div class="col-xs-2 ">' + res[i].stuClass + '</div>';
        let op = '<div class="col-xs-2"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#updateUserModel" onclick="updateUser(' + res[i].uid + ')">修改</button><button class="btn btn-danger btn-xs" onclick="deleteUser(' + res[i].uid + ')">删除</button></div>';
        row = row + uid + uname + college + profession + stuClass + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}

function updateUser(uid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getOneUser",
        data: {
            userId: uid,
        },
        success: function (res) {
            $("#uid2").val(res.uid);
            $("#uname2").val(res.uname);
            $("#college2").val(res.college);
            $("#profession2").val(res.profession);
            $("#stuClass2").val(res.stuClass);
        }
    });
}

function deleteUser(uid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/deleteStudentById",
        data: {
            admin: ADMIN,
            userid: uid,
        },
        success: function (res) {
            if (res === 0) {
                alert('删除学生失败');
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