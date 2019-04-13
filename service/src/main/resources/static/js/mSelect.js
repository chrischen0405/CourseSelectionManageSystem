$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/allRecord",
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
        let sdate = '<div class="col-xs-4 ">' + res[i].sdate + '</div>';
        let uid = '<div class="col-xs-2 ">' + res[i].uid + '</div>';
        let cid = '<div class="col-xs-2 ">' + res[i].cid + '</div>';
        let op = '<div class="col-xs-2"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseUser">修改</button><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteUser">删除</button></div>';
        row = row + sdate + uid + cid + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}