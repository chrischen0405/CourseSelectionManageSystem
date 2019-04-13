$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getOneUser",
        data: {
            "userId": 1
        },
        success: function (res) {
            console.log(res);
            init(res);
        }
    })
})

function init(res) {
    let str = '';
    let row = '<div class="row">';
    let uid = '<div class="col-xs-4 ">' + res.uid + '</div>';
    let uname = '<div class="col-xs-4 ">' + res.uname + '</div>';
    let op = '<div class="col-xs-4"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseUser">修改密码</button></div>';
    row = row + uid + uname + op + '</div>';
    str += row;
    $('#tableBody').append(str);
}