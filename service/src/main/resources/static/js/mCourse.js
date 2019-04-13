$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllCourse",
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
        let cnum = '<div class="col-xs-1 ">' + res[i].cnum + '</div>';
        let cname = '<div class="col-xs-1 ">' + res[i].cname + '</div>';
        let ctime = '<div class="col-xs-7 ">' + res[i].ctime + '</div>';
        let credit = '<div class="col-xs-1 ">' + res[i].credit + '</div>';
        let capacity = '<div class="col-xs-1 ">' + res[i].capacity + '</div>';
        let op = '<div class="col-xs-1"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#reviseUser">修改</button><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteUser">删除</button></div>';
        row = row + cnum + cname + ctime + credit + capacity + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}