const ADMIN = QueryString('uid');
const COLLEGE = ['计算机与计算科学学院', '信息与电气工程学院', '工程学院', '医学院', '外国语学院', '商学院', '传媒与人文学院', '法学院', '创意与艺术设计学院', '新西兰UW学院'];
const PROFESSION = [
    ['计算机与计算科学', '软件工程', '信息管理', '统计'],
    ['信电1', '信电2'],
    ['工程1', '工程2'],
    ['医学1', '医学2'],
    ['外语1', '外语2'],
    ['商院1', '商院2'],
    ['传媒1', '传媒2'],
    ['法学1', '法学2'],
    ['创意1', '创意2'],
    ['UW1', 'UW2']
];
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