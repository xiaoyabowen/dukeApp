
function activitiesInit(Vue) {
    var str = dataValue('user/circle/comment/activities.html')
    

    return {
        template: str,
        data: function() {
            return {
                imgUrl:"../../../image/circle/mask2x.png",
                imgText:"../../../icon/bianji.png",
                imgImg:"../../../icon/bianji.png",
                imgAdd:"../../../image/circle/add.png",
                imgDel:"../../../image/circle/del.png",
                isTrue:true,
                dataDiv:[],
                contentText:''
            }
        },
        created: function() {
            this.saveText()
        },
        methods: {

            mask : function (index) {
                // console.log(index)
                $(".bottom-medal").animate({bottom:"0rem"},100);
                $(".bottom-medal").attr("index",index)
                // $(".meng").fadeIn("1000")
            },
            deleteText:function(index){

                mui.confirm('确定要删除此条数据吗?', function (e) {
                    this.dataDiv.splice(index,1);
                })
            },
            cancel : function () {
                $(".bottom-medal").animate({bottom:"-3rem"},10);
            },
            /*saveText : function(){
                $(".textMedal").fadeOut("1000")
            },*/
            cancelText : function(){
                $(".textMedal").fadeOut("1000")
                // $(".meng").fadeOut("1000")
            },
            saveText:function(index){
                $(".textMedal").fadeOut("1000")
                // $(".meng").fadeOut("1000")
                // dataDiv.splice(2, 0, "three");
                var indexPush = $(".bottom-medal").attr("index")*1
                var evalIndex = Number(indexPush+1)
                console.log(evalIndex)
                var that = this
                that.dataDiv.splice(evalIndex,0,{
                    textActive:that.contentText
                });
                that.contentText = ''
            },
            textFrame : function () {
                $(".bottom-medal").animate({bottom:"-3rem"},10);
                $(".textMedal").fadeIn("1000")
                // $(".meng").fadeIn("1000")

                /*openNewWindow("textSign", "./textSign.html", {
                    url: 'activities',
                    mode:"1"

                })*/
            },
            addNode:function () {
                this.dataDiv.push({
                    textActive : node
                })
            }

        }
    }
}
