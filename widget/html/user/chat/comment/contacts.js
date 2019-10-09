function contactsInit(Vue) {
    var str = dataValue('user/chat/comment/contacts.html')

    return {
        template: str,
        data: function () {
            return {
                list: [],

                // 聊天
                JIM : '',
                pid_accept : '',         //接收消息者 username
                pid_name : '',             //接收消息者 name
                appkey : '',
                random_str : '',
                signature : '',
                timestamp : '',
            }
        },
        created: function () {
            this.lookmeList();
            this.getSignatureJiGuang();
        },
        mounted: function () {

        },
        methods: {
            // 获取谁聊一聊数据列表
            lookmeList: function () {
                var that = this;
                var list = localStorage.getItem('chats');
                // console.log(list)
                /*if (list) {
                    that.list = JSON.parse(list);
                    ajaxGet(queryChatList, {}, function (data, err) {
                        // console.log(JSON.parse(data));
                        if (data.ChatList) {
                            that.list = data.ChatList;
                            localStorage.setItem('chats', JSON.stringify(that.list));
                        }
                    });
                    // return;
                }*/

                ajaxGetWithProgress(queryChatList, {}, function (data, err) {
                    console.log(data,"1222");
                    if (data.ChatList) {
                        that.list = data.ChatList;
                        localStorage.setItem('chats', JSON.stringify(that.list));
                    }
                })
            },
            // 跳转到聊一聊
            linkHandle: function (token, ptoken, t_key,job_id,pid_accept,pid_send,pid_name,pid_icon,c_name,z_user_job) {

                openNewWindow("chat_Room", "./chat_Room.html", {
                    token: token,
                    ptoken: ptoken,
                    t_key: t_key,
                    job_id: job_id,
                    pid_accept: pid_accept,
                    pid_send: pid_send,
                    pid_name: pid_name,
                    pid_icon: pid_icon,
                    c_name: c_name,
                    z_user_job: z_user_job,
                });
            },

            // 聊天获取 appkey random_str signature timestamp   初始化  JIM
            getSignatureJiGuang : function () {
                var that = this
                ajaxGetWithProgress(getSignatureJiGuang, {}, function (data) {
                    //console.log(data)
                    if (data){
                        that.appkey = data.appkey
                        that.random_str = data.random_str
                        that.signature = data.signature
                        that.timestamp = data.timestamp

                        that.JIM =  new JMessage({debug:true})
                        //console.log("JIM",that.JIM)
                        that.init()

                    } else {
                        toast("连接失败")
                    }
                })
            },

            init : function (){
                var that = this
                that.JIM.init({
                    "appkey":that.appkey,
                    "random_str":that.random_str,
                    "signature":  that.signature,
                    "timestamp":  that.timestamp,
                    "flag": 1

                }).onSuccess(function(data) {
                    //console.log('success:', data);

                    that.isConnect()
                    that.isInit()
                    that.login()
                    that.getConversation()
                    // that.updateConversation()
                    // appendToDashboard('success' + JSON.stringify(data));
                }).onFail(function(data) {
                    //console.log('error2:' ,data)
                    // appendToDashboard('error: ' +JSON.stringify(data));
                });
            },
            // 获取连接状态
            isConnect : function (){
                var that = this
                //console.log('isConnect:',that.JIM.isConnect());
            },
            // 获取初始化状态
            isInit : function (){
                var that = this
                //console.log('isInit:',that.JIM.isInit());
            },

            // 登陆
            login : function (){
                var that = this
                that.JIM.login({
                    'username' : localStorage.getItem("person_id") + 'j',
                    'password': localStorage.getItem("person_id") + 'j',
                }).onSuccess(function(data) {
                    //console.log('success:',data);
                    // appendToDashboard(JSON.stringify(data));

                    that.JIM.onMsgReceive(function(data) {
                        data = JSON.stringify(data);
                        //console.log('1msg_receive:' + data);
                        // appendToDashboard('msg_receive:' + data);

                    });


                    that.JIM.onEventNotification(function(data) {
                        //console.log('event_receive: ' + JSON.stringify(data));
                        // appendToDashboard('event_receive: ' +JSON.stringify(data));
                    });

                    that.JIM.onSyncConversation(function(data) { //离线消息同步监听
                        //console.log( data);
                        // appendToDashboard('event_receive: ' +JSON.stringify(data));
                    });

                    that.JIM.onUserInfUpdate(function(data) {
                        //console.log('onUserInfUpdate : ' + JSON.stringify(data));
                        // appendToDashboard('onUserInfUpdate : ' +JSON.stringify(data));
                    });

                    that.JIM.onSyncEvent(function(data) {
                        //console.log('onSyncEvent : ' + JSON.stringify(data));
                        // appendToDashboard('onSyncEvent : ' +JSON.stringify(data));
                    });

                    that.JIM.onMsgReceiptChange(function(data){
                        //console.log('onMsgReceiptChange : ' + JSON.stringify(data));
                        // appendToDashboard('onMsgReceiptChange : ' +JSON.stringify(data));

                    });

                    that.JIM.onSyncMsgReceipt(function(data){
                        //console.log('onSyncMsgReceipt : ' + JSON.stringify(data));
                        // appendToDashboard('onSyncMsgReceipt : ' +JSON.stringify(data));

                    });

                    that.JIM.onMutiUnreadMsgUpdate(function(data){
                        //console.log('onConversationUpdate : ' + JSON.stringify(data));
                        // appendToDashboard('onConversationUpdate : ' +JSON.stringify(data));

                    });

                    that.JIM.onTransMsgRec(function(data){
                        //console.log('onTransMsgRec : ' + JSON.stringify(data));
                        // appendToDashboard('onTransMsgRec : ' +JSON.stringify(data));
                    });

                    that.JIM.onRoomMsg (function(data){
                        //console.log('onRoomMsg  : ' + JSON.stringify(data));
                        // appendToDashboard('onRoomMsg  : ' +JSON.stringify(data));
                    });





                }).onFail(function(data) {

                    //console.log('error:' + JSON.stringify(data));
                    // appendToDashboard('error: ' +JSON.stringify(data));
                }).onTimeout(function(data) {
                    //console.log('timeout:' + JSON.stringify(data));
                    // appendToDashboard('timeout: ' +JSON.stringify(data));
                });
            },
            sendSingleMsg : function () {
                var that = this
                //console.log("sendInput",that.sendInput)
                that.JIM.sendSingleMsg({
                    'target_username' : that.pid_accept + 'j',     //接收消息者 username
                    'target_nickname' : that.pid_name,     //接收者的展示名
                    'appkey' :  that.appkey,
                    'content' : that.sendInput,
                    'no_offline' : false,       //消息离线控制标志，false，默认值，保存离线消息；true，不保存离线消息
                    'no_notification' : false,      //状态栏显示消息标志，false，默认值，状态栏显示消息；true，状态栏不显示消息
                    'custom_notification':{'enabled':true,'title':'title','alert':'alert'},
                    'need_receipt':true       //是否需要已读回执，需要:true 不需要:false
                }).onSuccess(function(data,msg) {
                    //console.log('success data:' ,data);
                    //console.log('succes msg:' ,msg);
                    var html = '<div class="ask">\n' +
                        '                <div class="time">05/22 06:30</div>\n' +
                        '                <div class="msg">\n' +
                        '                    <img src="../../../image/chat/touxiangm.png" alt=""/>\n' +
                        '                    <span class="name">千里马</span>\n' +
                        '                    <p>\n' +
                        '                        <i clas="msg_input"></i>\n' +
                        that.sendInput +
                        '\n' +
                        '\n' +
                        '                    </p>\n' +
                        '                </div>\n' +
                        '            </div>'
                    var message = $('#message');
                    message.append(html);
                    $('html,body').animate({
                        scrollTop: message.outerHeight() - window.innerHeight
                    }, 200);
                    that.sendInput = ''

                }).onFail(function(data) {
                    //console.log('error:' ,data);
                    // appendToDashboard('error: ' +JSON.stringify(data));
                });






            },

            getConversation: function (){
                var that = this
                that.JIM.getConversation().onSuccess(function (data) {
                    //console.log('success123:',data);
                }).onFail(function (data) {
                    //console.log('error:', data);
                });
            },


        }
    }
}
