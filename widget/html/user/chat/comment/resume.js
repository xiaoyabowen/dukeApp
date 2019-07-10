function resumeInit(Vue) {
    var str = dataValue('user/chat/comment/resume.html')

    return {
        template: str,
        data: function () {
            return {
                list: [],
                listDB: [],
                db: {},
            }
        },
        created: function () {
            this.lookmeList();
        },
        mounted: function () {

        },
        methods: {
            // 获取谁看过我数据列表
            lookmeList: function () {
                var that = this;
                ajaxGetWithProgress(lookmeList, {}, function (data, err) {
                    console.log(data);
                    if (data.lookmeList) {
                        that.list = data.lookmeList;
                        that.listDB = data.lookmeList;

                    }
                })
                // this.setIndexedDB(this);
            },
            linkHandle: function (job_id) {
                openNewWindow("position", "../home/position.html", {
                    job_id: job_id
                });
            },
            // // 利用 indexedDB 数据库存储数据
            // setIndexedDB(vm) {
            //     // 打开数据库,如果不存在就新建一个数据库
            //     var request = indexedDB.open('duke', 1);
            //
            //     if (!request) return;
            //     // 数据库打开报错
            //     request.onerror = function (event) {
            //         console.log('数据库打开错误');
            //     }
            //     // 数据库打开成功
            //     request.onsuccess = function (event) {
            //         vm.db = request.result;
            //         console.log('数据库打开成功', vm.db);
            //         vm.requestRead(vm);
            //     }
            //     // 数据库升级事件
            //     request.onupgradeneeded = function (event) {
            //         vm.db = event.target.result;
            //         // 判断是否有数据表
            //         if (!vm.db.objectStoreNames.contains('seenMe')) {
            //             // 没有seenMe数据表,就新建一个
            //             var objectStore = vm.db.createObjectStore('seenMe', {keyPath: 'id'});
            //             objectStore.createIndex('seens', 'seens', {unique: false});
            //         }
            //     }
            // },
            // // 向对象仓库写入数据
            // requestAdd(vm) {
            //     var request = vm.db.transaction(['seenMe'], 'readwrite')
            //         .objectStore('seenMe')
            //         .add({
            //             id: 1,
            //             seens: vm.list,
            //         });
            //
            //     request.onsuccess = function (event) {
            //         console.log('数据添加成功');
            //     };
            //
            //     request.onerror = function (event) {
            //         console.log('数据添加失败');
            //     }
            // },
            // // 读取数据
            // requestRead(vm) {
            //     var transaction = vm.db.transaction(['seenMe']);
            //     var objectStore = transaction.objectStore('seenMe');
            //     var request = objectStore.get(1);
            //
            //     request.onerror = function (event) {
            //         console.log('事务失败');
            //     };
            //
            //     request.onsuccess = function (event) {
            //         if (request.result) {
            //             if (request.result.seens) {
            //                 vm.list = request.result.seens;
            //             }
            //             console.log('数据库读取:' + request.result.seens);
            //             ajaxGet(lookmeList, {}, function(data,err){
            //                 console.log('后台获取数据更新的本地数据库:',data);
            //                 if (data.lookmeList) {
            //                     vm.list = data.lookmeList;
            //                     vm.listDB = data.lookmeList;
            //                     vm.requestUpdate(vm);
            //                 }
            //             });
            //
            //         } else {
            //             console.log('未获得数据记录', request);
            //             ajaxGetWithProgress(lookmeList, {}, function (data, err) {
            //                 console.log(data);
            //                 if (data.lookmeList) {
            //                     vm.list = data.lookmeList;
            //                     vm.listDB = data.lookmeList;
            //                     vm.requestUpdate(vm);
            //                 }
            //             })
            //         }
            //     };
            // },
            // // 跟新数据
            // requestUpdate(vm) {
            //     var request = vm.db.transaction(['seenMe'], 'readwrite')
            //         .objectStore('seenMe')
            //         .put({
            //             id: 1,
            //             seens: vm.listDB
            //         });
            //     request.onsuccess = function (event) {
            //         console.log('数据更新成功');
            //     };
            //
            //     request.onerror = function (event) {
            //         console.log('数据更新失败');
            //     }
            // },
            // // 删除数据
            // requestRemove(vm) {
            //     var request = vm.db.transaction(['seenMe'], 'readwrite')
            //         .objectStore('seenMe')
            //         .delete(1);
            //
            //     request.onsuccess = function (event) {
            //         console.log('数据删除成功');
            //     };
            // },
        }
    }
}
