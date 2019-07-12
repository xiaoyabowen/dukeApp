

function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y =date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + '';
    console.log(Y+M+D)
    return Y+M+D;
}

// JavaScript Document
var nstr = new Date(); // 获取当前日期

// timestampToTime(nstr)


var timestampStr = nstr.getTime();
console.log(timestampStr)


// var timestamp = new Date(date).getTime();
// console.log(timestamp)


var changedYear = nstr.getFullYear(); // 年份
var changedMonth = nstr.getMonth(); // 月份
var dnow = nstr.getDate(); // 今日日期
var n1str = new Date(changedYear, changedMonth, 1); // 当月第一天Date
var initfirstday = n1str.getDay(); // 当月第一天星期几

commChanged(changedYear,changedMonth+1)


// 是否为闰年
function is_leap(year) {
	return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0)
			: res = (year % 4 == 0 ? 1 : 0));
}

// 获取当月的天数
function getMonthAllDay(month, year) {
	var m_days = new Array(31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	return m_days[month];
}

// 获得某年某月某日是星期几
function getFirstWeekDay(year, month, day) {
	var date = new Date();
	date.setFullYear(year);
	date.setMonth(month);
	date.setDate(day);
	return date.getDay();
}


$(function () {
    showCanledar(changedMonth+1, initfirstday, dnow, getMonthAllDay(changedMonth,changedYear),changedYear)
})


function daysOfMonth(){
    var MonthYear =$(".txt_Year").text()
    console.log(MonthYear)
    var MonthMonth = $(".txt_blue").text()
    // 获取到当前月份的全部日期
    let daysOfMonth = '';
    let fullYear = MonthYear;
    let month = MonthMonth;
    let lastDayOfMonth = new Date(fullYear, month, 0).getDate();
    for (var i = 1; i <= lastDayOfMonth; i++) {
        daysOfMonth+=fullYear + '-' + month + '-' + i;
        daysOfMonth+=',';
    };
    activeDateStr = daysOfMonth.substring(0, daysOfMonth.lastIndexOf(','));
    return activeDateStr;
}


function commChanged(changedYear,changedMonth) {

    var changedMonth =  changedMonth
    var firstweekday = getFirstWeekDay(changedYear, parseInt(changedMonth) - 1, 1);

    var allday = getMonthAllDay(parseInt(changedMonth) - 1, changedYear);       //获取当月的天数
    showCanledar(changedMonth, firstweekday, 1, allday,changedYear);
}

// 获得表格行数
function requiredRows(allday, firstday) {
    var trstr = Math.ceil((allday + firstday) / 7);
    // alert("trstr"+trstr);
    return trstr;
}


/* 显示日历 */
function showCanledar(month, firstday, dnow, allday,changedYear) {

    var rows = requiredRows(allday, firstday);
    var tb = "<table data-role='none' cellpadding='0px' cellspacing='3px' id='dates'>";
    tb += "<tr class='firsttr'><td colspan='7' class='heightTitle'>";
    tb += "</td></tr>";
    tb += "</tr>";
    tb += "<tr class='secondtr'>";
    tb += "<td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td>";
    tb += "</tr>";
    for (var i = 0; i < rows; i++) {
        tb += "<tr>";
        for (var k = 0; k < 7; k++) { // 表格每行的单元格
            var idx = i * 7 + k; // 单元格自然序列号
            var date_str = idx - firstday + 1; // 计算日期
            (date_str <= 0 || date_str > allday) ?  tb+="<td style='background:#fff'> </td>" : tb += '<td class="tdActive">\n' +
                '                    <div class=" normal">\n' +
                '                        '+date_str+' ' +
                '                        <p class="price">¥<i class="priceNum">1380</i></p>\n' +
                '                        <var>余 <i class="Surplus">8</i></var>\n' +
                '<span class="price_low_tag ">完</span>'+
                '\n' +
                '                    </div>\n' +
                '                </td>'; // 过滤无效日期（小于等于零的、大于月总天数的）
            // 打印日期：今天底色为红
            // 查询月签到情况


        }
        tb += "</tr>";
        // 表格的行结束
    }
    tb += "</table>"; // 表格结束
    $(".signincalendar").html(tb);
}



function getNewYear() {
    // alert("得到年");
    return $(".txt_Year").html()
}
// 获得下拉列表的月
function getNewMonth() {
    // alert("得到月");
    return  $(".txt_blue").html()
}







