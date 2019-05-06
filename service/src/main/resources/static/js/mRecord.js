$(function () {
    initData();
    $('#search').click(function () {
        let keyword = $("#keywords").val();
        console.log(keyword);
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/searchRecord",
            data: {
                keywords: keyword
            },
            success: function (res) {
                init(res);
            }
        });
    });
})

function initData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getAllRecord",
        success: function (res) {
            console.log(res);
            init(res);
        }
    })
}

function init(res) {
    $('#tableBody').empty();
    let str = '';
    for (let i = 0; i < res.reverse().length; i++) {
        let row = '<div class="row">';
        let date = '<div class="col-xs-4 ">' + res[i].date + '</div>';
        let uid = '<div class="col-xs-2 ">' + res[i].uid + '</div>';
        let operate = '<div class="col-xs-2 ">' + res[i].operate + '</div>';
        let oid = '<div class="col-xs-2 ">' + res[i].oid + '</div>';
        let oname = '<div class="col-xs-2 ">' + res[i].oname + '</div>';
        row = row + date + uid + operate + oid + oname + '</div>';
        str += row;
    }
    $('#tableBody').append(str);
}