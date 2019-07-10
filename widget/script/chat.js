var canSend = false;
$(function() {
    $('#footer').on('keyup', 'input', function() {
        if ($(this).val().length > 0) {
            $(this).next().css('background', '#114F8E').prop('disabled', true);
            canSend = true;
        } else {
            $(this).next().css('background', '#ddd').prop('disabled', false);
            canSend = false;
        }
    })
    $('#footer .send').click(send)
    $("#footer .my-input").keydown(function(e){
        if(e.keyCode == 13){
            return send();
        }
    });
})
var arr = ['你在想我么', '怎么不和我说话', '跟我聊会天吧'];
test()
function test() {
    $(arr).each(function(i) {
        setTimeout(function() {
            reply("../image/chat/touxiang.png", arr[i])
        }, sj() * 500)
    })
}

function reply(headSrc, str) {
    var html = "<div class='reply'><div class='msg'><img src=" + headSrc + " /><span class='name'>斜杠青年</span><p><i class='msg_input'></i>" + str + "</p></div></div>";
    return upView(html);
}
function ask(headSrc, str) {
    var html = "<div class='ask'><div class='msg'><img src=" + headSrc + " />" + "<p><i class='msg_input'></i>" + str + "</p></div></div>";
    return upView(html);
}
function upView(html) {
    let message = $('#message');
    message.append(html);
    return $('html,body').animate({
        scrollTop: message.outerHeight() - window.innerHeight
    }, 200);
}
function send(msg){
    if(canSend){
        let input = $("#footer .my-input");
        ask("../image/chat/touxiangm.png", input.val());
        input.val('');
        test();
    }
}
function sj() {
    return parseInt(Math.random() * 10)
}
