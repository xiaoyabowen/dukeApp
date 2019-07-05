
function activitiesInit(Vue) {

    var str = `<div>
                    <form method="post">
                        <textarea id="mytextarea">Hello, World!</textarea>
                    </form>
                    <form method="post">
                        <textarea name="editor1"></textarea>
                        <script>
                            var a = CKEDITOR.replace( 'editor1' );
                    
                                var myCKeditor = {
                                    getData:function(){
                                        return CKEDITOR.instances.textarea.getData();
                                    },
                                    setData:function(){
                                        CKEDITOR.instances.textarea.setData(data);       //设置数据
                                    }
                                }     
                        </script> 
                    </form> 
            </div>`;

    return {
        template: str,
        data: function() {
            return {

            }
        },
        created: function() {
            // console.log(CKEDITOR)

        },
        methods: {

        }
    }
}
