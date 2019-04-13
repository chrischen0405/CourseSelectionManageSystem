$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllStudent",
        success: function (res) {
            console.log(res);
            init(res);
        }
    })
})

function init(res) {
    let str = '';
    for (let i = 0; i < res.length; i++) {
        let row = '<div class="row">';
        let uid = '<div class="col-xs-2 ">' + res[i].uid + '</div>';
        let uname = '<div class="col-xs-2 ">' + res[i].uname + '</div>';
        let college = '<div class="col-xs-2 ">' + res[i].college + '</div>';
        let profession = '<div class="col-xs-2 ">' + res[i].profession + '</div>';
        let stuClass = '<div class="col-xs-2 ">' + res[i].stuClass + '</div>';
        let op = '<div class="col-xs-2"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseUser">修改</button><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteUser">删除</button></div>';
        row = row + uid + uname + college + profession + stuClass + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}