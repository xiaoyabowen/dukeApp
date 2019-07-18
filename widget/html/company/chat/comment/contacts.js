function contactsInit(Vue) {
    var str = dataValue('company/chat/comment/contacts.html')

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
                console.log(123,list)
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
            linkHandle: function (token, ptoken, t_key) {
                openNewWindow("chat_Room", "./chat_Room.html", {
                    token: token,
                    ptoken: ptoken,
                    t_key: t_key,
                });
            },
        }
    }
}
