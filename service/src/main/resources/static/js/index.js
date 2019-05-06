$(function () {
    $('#login').click(function () {
        let uid = $("#uid").val();
        let pwd = $("#pwd").val();
        if (uid == '') {
            alert('请输入账号');
            return;
        }
        if (pwd == '') {
            alert('请输入密码');
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/login",
            data: {
                "userid": uid,
                "password": pwd
            },
            success: function (res) {
                if (res === 1) {
                    window.location.replace('./mStudent.html?uid=' + uid);
                } else if ((res === 2) || (res === 3)) {
                    alert('账号不存在');
                } else if (res === 0) {
                    alert('密码错误');
                }
            }
        })
    });
})