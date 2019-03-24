$.fn.formCheck=function (opitions) {
    var configs={
        user : null,
        phone_email:null,
        password : null,
        ensure : null,
        onCallBack : function () {
            return false;
        }
    };

    $.extend(configs,opitions);
    configs.user.blur(function () {
        // checkUser();
        var phone = "^(\\+86|86)?1((3[0-9])|(4[5|7])|(5([0-3]|[5-9]))|(8[0,5-9]))\\d{8}$";//验证手机号
        var email= /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/ ; //验证email;
        var value = configs.user.val();
        if(value ==""){
            $("#userError").text("用户名不能为空！").css("display","block");
        }else if(!(value.match(phone) || value.match(email))){
            $("#userError").text("请输入正确的手机号/邮箱格式！").css("display","block")
        }
    });
    configs.password.blur(function () {
        alert("haha")
        // checkPassword();
        var pw = "^[^ ]{6,16}$"; //验证密码
        var value2 = configs.password.val();
        if(value2 == ""){
            $("#check_three").text("密码不能为空！").css("display","block");
        }else if(!value2.match(pw)){
            $("#check_three").text("请输入正确的密码格式！").css("display","block");
        }
    });
    configs.ensure.blur(function () {
        //ensurePassW();
        var passwordValue = configs.password.val();
        var passwordEnsureValue = configs.ensure.val();
        if(passwordEnsureValue == ""){
            $("#ensurePassword").text("请再次填写密码！").css("display","block");
        }else if(passwordEnsureValue != passwordValue){
            $("#ensurePassword").text("两次密码输入不一致！").css("display","block");
        }
    });
    configs.user.focus(function () {
        $("#userError").text("").css("display","none");
    });
    configs.password.focus(function () {
            $("#check_three").text("").css("display","none");
    });
    configs.ensure.focus(function () {
        $("#ensurePassword").text("").css("display","none");
    });
};

// $.fn.checkUser = function () {
//     var phone = "^(\\+86|86)?1((3[0-9])|(4[5|7])|(5([0-3]|[5-9]))|(8[0,5-9]))\\d{8}$";//验证手机号
//     var email= /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/ ; //验证email;
//     var value = options.user.text();
//     if(value ==""){
//         options.user.text("用户名不能为空！")
//     }else if(!phone.test(value)){
//         options.user.text("请输入正确的手机号格式！")
//     }else if(!email.test(value)){
//         options.user.text("请输入正确的邮箱格式！")
//     }
//
// }
// $.fn.checkPassword = function () {
//     var pw = "^[^ ]{6,16}$"; //验证密码
//     var value2 = options.password.text();
//     if(value2 == ""){
//         options.password.text("密码不能为空！");
//     }else if(!pw.test(value2)){
//         options.password.text("请输入正确的密码格式！");
//     }
// };
//
// $.fn.ensurePassW = function () {
//     var passwordValue = options.password.text();
//     var passwordEnsureValue = options.ensure.text();
//     if(passwordEnsureValue == ""){
//         options.ensure.text("请在次填写密码！");
//     }else if(passwordEnsureValue != passwordValue){
//         options.ensure.text("两次密码输入不一致！");
//     }
// }