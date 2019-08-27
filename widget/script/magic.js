
var winWidth,winHeight,a01_w,width_d
apiready = function () {
    alert(11)
    winWidth = api.winWidth;
    winHeight = api.winHeight;
    a01_w = (winWidth > winHeight / 2) ? winHeight / 2 : winWidth;

// width_d=(screen_w-20) *2/5 - 5;
    width_d = (a01_w - 10) * 0.23 - 10;    // 100

    console.log(winWidth)
    console.log(winHeight)
    console.log(width_d)
    console.log(winHeight / 2)


}








