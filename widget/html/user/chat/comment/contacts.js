function contactsInit(Vue) {
    var str = dataValue('user/chat/comment/contacts.html')

    return {
        template: str,
        data: function () {
            return {
                list: [],

            }
        },
        created: function () {
            this.lookmeList();
        },
        mounted: function () {

        },
        methods: {
            // 获取谁聊一聊数据列表
            lookmeList: function () {
                var that = this;
                var list = localStorage.getItem('chats');
                // console.log(list)
                if (list) {
                    that.list = JSON.parse(list);
                    ajaxGet(queryChatList, {}, function (data, err) {
                        console.log(data);
                        if (data.ChatList) {
                            that.list = data.ChatList;
                            localStorage.setItem('chats', JSON.stringify(that.list));
                        }
                    });
                    return;
                }

                ajaxGetWithProgress(queryChatList, {}, function (data, err) {
                    console.log(data);
                    if (data.ChatList) {
                        that.list = data.ChatList;
                        localStorage.setItem('chats', JSON.stringify(that.list));
                    }
                })
            },
            // 跳转到聊一聊
            linkHandle: function (token, ptoken, t_key,job_id) {
                openNewWindow("chat_Room", "./chat_Room.html", {
                    token: token,
                    ptoken: ptoken,
                    t_key: t_key,
                    job_id: job_id,
                });
            },
        }
    }
}
