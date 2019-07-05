
function activitiesInit(Vue) {

    var str = '<div>\n' +
        '    <form method="post">\n' +
        '        <textarea id="mytextarea">Hello, World!</textarea>\n' +
        '    </form>\n' +
        '    <form method="post">\n' +
        '        <textarea name="editor1"></textarea>\n' +
        '        \n' +
        '        </form> \n' +
        '        </div>';

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
