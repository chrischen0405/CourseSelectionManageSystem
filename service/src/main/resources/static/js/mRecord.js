$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllRecord",
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
        let date = '<div class="col-xs-3 ">' + res[i].date + '</div>';
        let uid = '<div class="col-xs-2 ">' + res[i].uid + '</div>';
        let operate = '<div class="col-xs-2 ">' + res[i].operate + '</div>';
        let oid = '<div class="col-xs-2 ">' + res[i].oid + '</div>';
        let oname = '<div class="col-xs-2 ">' + res[i].oname + '</div>';
        let op = '<div class="col-xs-1"><button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteUser">删除</button></div>';
        row = row + date + uid + operate + oid + oname + op + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}