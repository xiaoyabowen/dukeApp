
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
        mounted :function (){


        },
        methods: {

            mask : function (index) {
                $(".bottom-medal").animate({bottom:"0rem"},100);
                $(".bottom-medal").attr("index",index)

            },
            deleteText:function(index){

                mui.confirm('确定要删除此条数据吗?', function (e) {
                    this.dataDiv.splice(index,1);
                })
            },
            cancel : function () {
                $(".bottom-medal").animate({bottom:"-3rem"},10);
            },
            cancelText : function(){
                $(".textMedal").hide()
            },
            saveText:function(index){
                $(".textMedal").show()
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
            },
            addNode:function () {
                this.dataDiv.push({
                    textActive : node
                })
            },
            nextactiveties:function () {
                var that = this;
                var objInfo = sessionStorage.getItem("informationObj")
                objInfoData = JSON.parse(objInfo)
                var containBox = document.querySelector(".containBox").outerHTML
                var details=containBox
                /*objInfoData.push({details:containBox})
                console.log(objInfoData)*/
                ajaxGetWithProgress(ActivecreateCircle,
                    objInfoData+"&details"+details
                , function (ret, err) {
                    console.log(ret);
                });
            }
        }
    }
}
