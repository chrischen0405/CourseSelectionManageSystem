let global_college = '';
let college_index = 0;
let global_profession = '';
let global_college2 = '';
let college_index2 = 0;
let global_profession2 = '';
$(function () {
    initData();
    addCollege(COLLEGE);
    addCollege2(COLLEGE);
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
    $('#sCollege').change(function () {
        college_index = $('#sCollege').val();
        if (college_index == '') {
            global_college = '';
            global_profession = '';
            addPro(getPro(college_index));
        } else {
            global_college = COLLEGE[college_index];
            addPro(getPro(college_index));
        }
        $('#sPro').selectpicker('refresh');
    });
    $('#sPro').change(function () {
        let index = $('#sPro').val();
        if (index == '') {
            global_profession = '';
        } else {
            global_profession = PROFESSION[college_index][index];
        }
    });
    $('#sCollege2').change(function () {
        college_index2 = $('#sCollege2').val();
        if (college_index2 == '') {
            global_college2 = '';
            global_profession2 = '';
            addPro2(getPro(college_index2));
        } else {
            global_college2 = COLLEGE[college_index2];
            addPro2(getPro(college_index2));
        }
        $('#sPro2').selectpicker('refresh');
    });
    $('#sPro2').change(function () {
        let index = $('#sPro2').val();
        if (index == '') {
            global_profession2 = '';
        } else {
            global_profession2 = PROFESSION[college_index2][index];
        }
    });
    $('#addStudent').click(function () {
        let userId = $("#uid").val();
        let userName = $("#uname").val();
        let college = global_college;
        let profession = global_profession;
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
        let college = global_college2;
        let profession = global_profession2;
        let stuClass = $("#stuClass2").val();
        console.log(college, profession);
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
    $('#close').click(function () {
        window.location.reload();
    });
    $('#close2').click(function () {
        window.location.reload();
    });
    $('#exportStu').click(function () {
        window.location.href = 'http://localhost:8080/exportUser';
    });
    $('#importStu').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/importUser",
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

function addCollege(cList) {
    let str = '<option value="">请选择分院</option>';
    for (let i = 0; i < cList.length; i++) {
        str += '<option value=' + i + '>' + cList[i] + '</option>';
    }
    $("#sCollege").html(str);
}

function addPro(pList) {
    let str = '<option value="">请选择专业</option>';
    if (college_index == '') {
        $("#sPro").html(str);
    } else {
        for (let i = 0; i < pList.length; i++) {
            str += '<option value="' + i + '">' + pList[i] + '</option>';
        }
        $("#sPro").html(str);
    }
}

function addCollege2(cList) {
    let str = '<option value="">请选择分院</option>';
    for (let i = 0; i < cList.length; i++) {
        str += '<option value=' + i + '>' + cList[i] + '</option>';
    }
    $("#sCollege2").html(str);
}

function addPro2(pList) {
    let str = '<option value="">请选择专业</option>';
    if (college_index2 == '') {
        $("#sPro2").html(str);
    } else {
        for (let i = 0; i < pList.length; i++) {
            str += '<option value="' + i + '">' + pList[i] + '</option>';
        }
        $("#sPro2").html(str);
    }
}

function getPro(index) {
    return PROFESSION[index];
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
            global_college2 = res.college;
            global_profession2 = res.profession;
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