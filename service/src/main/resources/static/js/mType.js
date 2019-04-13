$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllType",
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
        let cnum = '<div class="col-xs-3 ">' + res[i].cnum + '</div>';
        let pname = '<div class="col-xs-3 ">' + res[i].pname + '</div>';
        let type = '<div class="col-xs-3 ">' + res[i].type + '</div>';
        let op = '<div class="col-xs-3"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseUser">修改</button><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteUser">删除</button></div>';
        row = row + cnum + pname + type + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}