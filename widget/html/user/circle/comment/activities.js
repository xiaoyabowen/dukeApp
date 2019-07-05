
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
                dataDiv:[
                    /*{
                        textActive:'',
                    }*/
                ]
            }
        },
        created: function() {
            // console.log(CKEDITOR)

        },
        methods: {
            mask : function () {
                $(".bottom-medal").animate({bottom:"0rem"},100);
            },
            cancel : function () {
                $(".bottom-medal").animate({bottom:"-3rem"},10);
            },
            textFrame : function () {
                /*openNewWindow("textSign", "./textSign.html", {
                    url: 'publishing_activities',
                    content: document.getElementById("pro_cheng").innerText,
                    mode:"1"
                })*/
                openNewWindow("textSign", "./textSign.html", {
                    url: 'publishing_activities',
                    mode:"1"

                })
            },
            addNode:function () {
                this.dataDiv.push({
                    textActive : node
                })
            }

        }
    }
}
