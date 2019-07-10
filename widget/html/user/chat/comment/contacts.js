function contactsInit(Vue) {
    var str = dataValue('user/chat/comment/contacts.html')

    return {
        template: str,
        data: function () {
            return {
                //客户端选项
                option: {
                    "ServerUri": "192.168.1.10",
                    "ServerPort": 61614,
                    "UserName": "admin",
                    "Password": "password",
                    "ClientId": "",
                    "TimeOut": 5,
                    "KeepAlive": 100,
                    "CleanSession": false,
                    "SSL": false
                },
                //所有主题
                allTopics: [
                    {"Topic": "/data/alarm", "Describe": "报警"},
                    {"Topic": "/data/message", "Describe": "消息"},
                    {"Topic": "/data/notify", "Describe": "通知"}
                ],
                //选中订阅主题
                selectedTopics: [],
                //选中发布主题
                currentTopic: [],
                //客户端
                client: {},
                msg: '',
                result: '',
                type: ''
            }
        },
        created: function () {

            //设置客户端标识
            this.option.ClientId = this.guid();

            this.client = new Paho.Client(this.option.ServerUri, this.option.ServerPort, this.option.ClientId);
            this.client.onConnectionLost = this.onConnectionLost; //绑定连接断开事件
            this.client.onMessageArrived = this.onMessageArrived; //绑定接收消息事件
            //连接服务端
            this.client.connect({
                invocationContext: {
                    host: this.option.ServerUri,//IP地址
                    port: this.option.ServerPort,//端口号
                    path: this.client.path,
                    clientId: this.option.ClientId//标识
                },
                timeout: this.option.TimeOut,//连接超时时间
                keepAliveInterval: this.option.KeepAlive,//心跳间隔
                cleanSession: this.option.CleanSession,//是否清理Session
                useSSL: this.option.SSL,//是否启用SSL
                userName: this.option.UserName,  //用户名
                password: this.option.Password,  //密码
                onSuccess: this.onConnect,//连接成功回调事件
                onFailure: this.onError//连接失败回调事件
            });

        },
        mounted: function () {

        },
        methods: {
            // 发送
            sendHandle: function() {
                var message = new Paho.Message(this.option.ClientId+ '/,/' +this.msg);
                message.destinationName = "yang";
                this.client.send(message);
            },
            //连接成功回调事件
            onConnect: function () {
                console.log("连接成功了");
                this.client.subscribe("yang");

            },
            //连接失败回调事件
            onError: function(e) {
                console.log("连接失败：" + e)
            },
            //连接断开事件
            onConnectionLost: function(responseObject) {
                if (responseObject.errorCode !== 0)
                    console.log("onConnectionLost:" + responseObject.errorMessage);
            },
            //接收消息事件
            onMessageArrived: function(message) {
                console.log(message)
                console.log("onMessageArrived:" + message.payloadString);
                this.result = message.payloadString;
                // 断开连接
                // this.client.disconnect();
            },
            //生成GUID
            guid: function() {
                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                }

                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }

        }
    }
}
