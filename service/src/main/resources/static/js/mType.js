let KID = 0;
$(function () {
    initData();
    $('#search').click(function () {
        let keyword = $("#keyword").val();
        console.log(keyword);
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/searchType",
            data: {
                keywords: keyword
            },
            success: function (res) {
                init(res);
            }
        });
    });
    $('#addType').click(function () {
        let pname = $("#pname").val();
        let cnum = $("#cnum").val();
        let type = $("#type").val();
        if (pname === '') {
            alert('专业名不能为空');
            return;
        }
        if (cnum === '') {
            alert('课程号不能为空');
            return;
        }
        if (type === '') {
            alert('课程类型不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/addType",
            data: {
                pname: pname,
                cnum: cnum,
                type: type,
            },
            success: function (res) {
                console.log(res);
                if (res === 0) {
                    alert('该课程不存在');
                    return;
                } else if (res === 2) {
                    alert('该专业课程类型已存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#updateType').click(function () {
        let pname = $("#pname2").val();
        let cnum = $("#cnum2").val();
        let type = $("#type2").val();
        if (pname === '') {
            alert('专业名不能为空');
            return;
        }
        if (cnum === '') {
            alert('课程号不能为空');
            return;
        }
        if (type === '') {
            alert('课程类型不能为空');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/updateType",
            data: {
                kid: KID,
                pname: pname,
                cnum: cnum,
                type: type,
            },
            success: function (res) {
                console.log(res);
                if (res === 0) {
                    alert('该课程不存在');
                    return;
                } else {
                    window.location.reload();
                }
            }
        });
    });
    $('#exportType').click(function () {
        window.location.href = 'http://localhost:8080/exportType';
    });
    $('#importType').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/importType",
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
        url: "http://localhost:8080/getAllType",
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
        let cnum = '<div class="col-xs-3 ">' + res[i].cnum + '</div>';
        let pname = '<div class="col-xs-3 ">' + res[i].pname + '</div>';
        let type = '<div class="col-xs-3 ">' + res[i].type + '</div>';
        let op = '<div class="col-xs-3"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#updateTypeModel" onclick="update(' + res[i].kid + ')">修改</button><button class="btn btn-danger btn-xs" onclick="deleteType(' + res[i].kid + ')">删除</button></div>';
        row = row + cnum + pname + type + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}

function update(kid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getOneType",
        data: {
            kid: kid,
        },
        success: function (res) {
            KID = res.kid;
            $("#pname2").val(res.pname);
            $("#cnum2").val(res.cnum);
            $("#type2").val(res.type);
        }
    });
}

function deleteType(kid) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/deleteTypeById",
        data: {
            kid: kid,
        },
        success: function (res) {
            if (res === 0) {
                alert('删除课程类型失败');
            } else {
                initData();
            }
        }
    });
}