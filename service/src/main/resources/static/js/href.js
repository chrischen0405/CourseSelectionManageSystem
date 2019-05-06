const ADMIN = QueryString('uid');
$(function () {
    if (ADMIN) {
        $('#mStudent').click(function () {
            location.href = './mStudent.html?uid=' + ADMIN;
        });
        $('#mCourse').click(function () {
            location.href = './mCourse.html?uid=' + ADMIN;
        });
        $('#mType').click(function () {
            location.href = './mType.html?uid=' + ADMIN;
        });
        $('#mSelect').click(function () {
            location.href = './mSelect.html?uid=' + ADMIN;
        });
        $('#mRecord').click(function () {
            location.href = './mRecord.html?uid=' + ADMIN;
        });
        $('#mCenter').click(function () {
            location.href = './mCenter.html?uid=' + ADMIN;
        });
    } else {
        location.replace('./index.html');
    }
    $('#userName').text('欢迎您！管理员' + ADMIN);
    $('#exit').click(function () {
        location.replace('./index.html');
    });
});

function QueryString(item) {
    var sValue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
}