var csreen_height = window.innerHeight;
var csreen_width = window.innerWidth;
var a01_w = (csreen_width > csreen_height / 2) ? csreen_height / 2 : csreen_width;

// width_d=(screen_w-20) *2/5 - 5;
var width_d = (a01_w - 10) * 0.22 - 5;    // 100


var ratio_s2 = 1.141;

var flag_top_cat = false;
var current_sn = 0;
var cat_sn = 0;

var opac = 0.69;  // style("opacity", 0.6)

var data_p =
    [
        {
            "id": 0,
            "type": 0,
            "title": "理财",
            "selected": 1,
            "color": "rgba(255,255,255,0.9)",
            "sx": 330,
            "sy": -212,
            "tx": 385,
            "ty": 75,
            "tcolor": "rgb(0,0,0)",
            "icon": "catalog/loan2x.png"
        },
        {
            "id": 1,
            "type": 0,
            "title": "当日优惠",
            "selected": 1,
            "color": "rgba(255,255,255,0.9)",
            "sx": 330,
            "sy": -106,
            "tx": 310,
            "ty": 150,
            "icon": "catalog/pp@2x.png"
        },
        {
            "id": 2,
            "type": 0,
            "title": "分期",
            "selected": 0,
            "color": "rgba(255,255,255,0.9)",
            "sx": 436,
            "sy": -106,
            "tx": 385,
            "ty": 225,
            "icon": "catalog/today@2x.png"
        },
        {
            "id": 3,
            "type": 0,
            "title": "Visa有礼",
            "selected": 1,
            "color": "rgba(255,255,255,0.9)",
            "sx": 330,
            "sy": 0,
            "tx": 235,
            "ty": 225,
            "tcolor": "rgb(0,0,0)",
            "icon": "catalog/visa@2x.png"
        },
        {
            "id": 4,
            "type": 0,
            "title": "xMore",
            "selected": 0,
            "color": "rgba(255,255,255,0.9)",
            "sx": 436,
            "sy": 0,
            "tx": 310,
            "ty": 300,
            "icon": "catalog/wealth.png"
        },
        {
            "id": 5,
            "type": 0,
            "title": "有机农庄",
            "selected": 0,
            "color": "rgba(255,255,255,0.9)",
            "sx": 330,
            "sy": 106,
            "tx": 160,
            "ty": 300,
            "icon": "catalog/xMore@2x.png"
        }

    ];


var data_sub =
    [
        {"id": 0, "type": 1, "title": "夏目", "icon": "00.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 1, "type": 1, "title": "绿皮书", "icon": "01.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 2, "type": 1, "title": "网络迷踪", "icon": "02.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 3, "type": 1, "title": "蜘蛛侠", "icon": "03.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 4, "type": 1, "title": "老人和枪", "icon": "04.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 5, "type": 1, "title": "石油大亨", "icon": "05.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 6, "type": 1, "title": "秋日武士", "icon": "06.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 7, "type": 1, "title": "event-8", "icon": "07.png", "note": "主演：长濑智也，藤冈..."}
    ];

var data_sm =
    [
        {"id": 0, "type": 2, "title": "sub-1", "icon": "00.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 1, "type": 2, "title": "那些年", "icon": "01.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 2, "type": 2, "title": "初吻50次", "icon": "02.png", "note": "影片翻拍自亚当-桑德勒和德鲁。巴里摩尔主演的同名爱情喜剧。主演山田孝之。"},
        {"id": 3, "type": 2, "title": "银魂-2", "icon": "03.png", "note": "根据日漫改编的系列电影，第二部，主演小栗旬等"},
        {"id": 4, "type": 2, "title": "日漫展览", "icon": "04.png", "note": "本月上海展览"},
        {"id": 5, "type": 2, "title": "日本旅\n樱花游", "icon": "05.png", "note": "最新推出，日本旅游项目，为期一周，赏花之旅"},
        {"id": 6, "type": 2, "title": "sub-7", "icon": "06.png", "note": "主演：长濑智也，藤冈..."},
        {"id": 7, "type": 2, "title": "Visa打折", "icon": "07.png", "note": "持Visa卡，在日本消费，满1000返100； 有效期到2019年6月30号"},


    ];

var color_cate = {
    "c_0": ["rgba(166,169,178,0.9)", "#81D4FA", "#B3E5FC", "#E1F5FE"],
    "c_1": ["rgba(144,144,144,0.9)", "#EF9A9A", "#FFCDD2", "#FFEBEE"],
    "c_2": ["rgba(219,187,132,0.9)", "rgb(226,217,115)", "rgb(223,230,180)"],
    "c_3": ["rgba(198,185,163,0.9)", "rgb(249,150,74)", "rgb(251,195,153)"],
    "c_4": ["rgba(133,134,142,0.9)", "rgb(85,190,71)", "rgb(165,219,146)"],
    "c_5": ["rgba(137,142,165,0.9)", "rgb(223,129,214)", "rgb(232,183,229)"],
    "c_6": ["rgba(189,192,205,0.2)", "rgb(235,155,178)", "rgb(235,198,211)"],
    "c_7": ["rgba(190,192,198,0.2)", "rgb(187,188,188)", "rgb(208,208,206)", "rgb(217,217,214)"]

};


function drawDiamond(context, x, y, width, height, msg) {

    var poly = [{"x": x, "y": y},
        {"x": x + width / 2, "y": y + height / 2},
        {"x": x, "y": y + height},
        {"x": x - width / 2, "y": y + height / 2}
    ];


    var circleGroup = context.append("g").attr("id", "p_" + msg);
    console.log(circleGroup)

    var p = circleGroup.append("rect")
        .data([poly])
        .attr("points", function (d) {
            return d.map(function (d) {
                return [d.x, d.y].join(",");
            }).join(" ");
        })
        // .style("fill", "rgba(200,200,200,0.8)")
        .style("stroke", "#FFFFFF")
        .style("stroke-width", "1px");

    fade0(circleGroup, x, y);

    circleGroup.on("click", function (d) {
        fade11(circleGroup, x, y);
    });


    circleGroup.append("text")
        .attr("dx", x - 10).attr("dy", y + 40)
        .text(msg);

    circleGroup.append("svg:image")
        .attr("xlink:href", "/dukeApp/widget/image/01.png")
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", x - 30)
        .attr("y", y + 70);
}


function fade11(p_in, x, y) {


    p_in.transition().duration(100)
        .attr("transform", "translate(" + x + " " + 0 + ") scale(0.001,1)")
        .transition()
        .duration(1000)
        .delay(10)
        .attr("transform", "scale(1,1)");

}


function fade0(p_in, x, y) {
    p_in.transition().duration(10)
        .attr("transform", "translate(" + x + " " + 0 + ") scale(0.001,1) scale(1,1)")
        .transition().duration(800)
        .attr("transform", "scale(1,1)");

}


function openCate(d) {

    // console.info(d);
    cat_sn = d.id;

    var tmp_obj = {"c_id": d.cat_id};
    // console.info(tmp_obj);
    var ret_obj = JSON.parse(callService("Persona", "getCatProdRandom", tmp_obj));
    // console.info(ret_obj);

    var prod_list = ret_obj.list;
    // console.info(prod_list);
    // console.info(prod_list);
    initData();
    if (prod_list) {
        var j = 0;
        for (var i = 0; i < prod_list.length; i++) {
            if (cat_sn == i) {
                j++;
            }

            data_p[j].title = prod_list[i].p_name;
            // console.info(prod_list[i].pid);
            data_p[j].p_id = prod_list[i].pid;
            // d.p_id=prod_list[i].pid;

            if (prod_list[i].mandatory) data_p[j].mandatory = prod_list[i].mandatory;
            else data_p[j].mandatory = 0;

            if (prod_list[i].endpoint) data_p[j].endpoint = prod_list[i].endpoint;
            else data_p[j].endpoint = null;


            j++;
        }
        // console.info(data_p);

    }


    d3.selectAll('g')
        .each(function (d, i) {
            // data_sub[j].p_id
            // console.log(d, i);
            if (current_sn == d.id) {
                d.type = 0;
                d3.select(this)
                    .select("rect").style("opacity", opac)
                    .style("filter", null)
                    .style('fill', function (d) {
                        // var i=d.id;
                        return color_cate["c_" + d.id][0];
                    });
            } else {

                var did = d.id;
                d.type = 1;
                d3.select(this)
                    .select("rect")
                    .style("filter", null)
                    .style('fill', function (d) {
                        return color_cate["c_" + current_sn][1];
                    });

                d3.select(this)
                    .select("text")
                    .attr("dx", function (d) {
                        var sub = 0;
                        if (d.title && d.title.length > 2) sub = 15;
                        return d.tx - 15 - sub;
                    })
                    .text(function (d, i) {
                        return data_p[d.id].title;
                    });

                // console.log(d);
                if (d.mandatory == 1) addMTTag(d3.select(this), true);
                else addMTTag(d3.select(this), false);

                fade11(d3.select(this), d.tx, d.ty);

                // d3.select("#work_plate").style('background',function (d) {
                // var i=d.id;
                // return color_cate["c_"+did][3]; });
            }

            // console.log(d, i);d.sx-25+12;

        });


}


function returnCate() {

    var dy_m_d = document.getElementById('a01');
    dy_m_d.style.display = "block";

    var jbsn = [0, 1, 3, 5];
    var orgsn = [2, 4];

    var tmp_obj = {"job_name": ""};
    var ret_job_obj = JSON.parse(callService("Position", "listJobs", tmp_obj));
    var joblist = ret_job_obj.jobs;
    console.log(joblist)
    // job_id,job_name,summary,open_time,status,c_id

    for (var i = 0; i < joblist.length; i++) {
        data_p[jbsn[i]].job_name = joblist[i].job_name;
        data_p[jbsn[i]].job_id = joblist[i].job_id;
        data_p[jbsn[i]].company_c_id = joblist[i].company_c_id;
        data_p[jbsn[i]].type = 1;
        data_p[jbsn[i]].endpoint = "/jsp/duke/one_job.jsp?job_id=" + joblist[i].job_id;
        if (joblist[i].cat_icon) data_p[jbsn[i]].cat_icon = joblist[i].cat_icon;
        if (joblist[i].mandatory) data_p[jbsn[i]].mandatory = joblist[i].mandatory;
        else data_p[jbsn[i]].mandatory = 0;
    }

    var ret_org_obj = JSON.parse(callService("Position", "listOrgs", tmp_obj));
    var orglist = ret_org_obj;
    console.log(orglist)

    // c_id,c_name,tel,summary,contactor,homepage,phone,email,logo_icon,open_acount

    for (var i = 0; i < orglist.length; i++) {
        data_p[orgsn[i]].job_name = "" + orglist[i].open_acount + "个职位";
        data_p[orgsn[i]].job_id = orglist[i].c_id;
        data_p[orgsn[i]].c_id = orglist[i].c_id;
        data_p[orgsn[i]].type = 1;
        data_p[orgsn[i]].endpoint = "/jsp/duke/one_org.jsp?c_id=" + orglist[i].c_id;
        if (orglist[i].logo_icon) data_p[orgsn[i]].cat_icon = orglist[i].logo_icon;
        if (orglist[i].mandatory) data_p[orgsn[i]].mandatory = orglist[i].mandatory;
        else data_p[orgsn[i]].mandatory = 0;
    }

    // console.info(data_p);


    d3.selectAll('g')
        .each(function (d, i) {
            // console.log(d, i);
            var showtext = d.job_name;
            var line_1 = '', line_2 = '';
            if (showtext) {
                if (showtext.length > 4) line_1 = showtext.substring(0, 4);
                else line_1 = showtext;

                if (showtext.length >= 8) line_2 = showtext.substring(4, 8);
                else if (showtext.length < 8) line_2 = showtext.substring(4);
            }
            d.type = 0;

            d3.select(this)
                .select("rect").style("opacity", opac)
                .style("filter", null)
                .style('fill', function (d) {
                    var i = d.id;
                    return color_cate["c_" + i][0];
                });

            d3.select(this).select("image")
                .attr("xlink:href", function (d) {
                    return "/DuKe/ShowLogo?c_id=" + d.job_id;
                    // return d.endpoint;
                    // return "/DuKe/images/ysx/" + d.cat_icon;
                });

            d3.select(this).selectAll("text").remove();
            if (showtext) {
                if (showtext.length > 4) {
                    d3.select(this).selectAll("text").remove();
                    d3.select(this).append("text")
                        .attr("dx", function (d) {
                            return d.tx - 24;
                        })
                        .attr("dy", function (d) {
                            return d.ty + 10;
                        })
                        .attr("fill", "#FFFFFF")
                        .attr("font-family", "'Microsoft YaHei UI Light'")
                        .attr("font-size", "14px")
                        .text(line_1);
                    d3.select(this).append("text")
                        .attr("dx", function (d) {
                            return d.tx - 24;
                        })
                        .attr("dy", function (d) {
                            return d.ty + 30;
                        })
                        .attr("fill", "#FFFFFF")
                        .attr("font-family", "'Microsoft YaHei UI Light'")
                        .attr("font-size", "14px")
                        .text(line_2);

                } else {
                    d3.select(this).append("text")
                        .attr("dx", function (d) {
                            var sub = 0;
                            if (d.job_name && d.job_name.length > 2) sub = 15;
                            return d.tx - 15 - sub;
                        }).attr("dy", function (d) {
                        return d.ty + 10;
                    })
                        .attr("fill", "#FFFFFF")
                        .attr("font-family", "'Microsoft YaHei UI Light'")
                        .attr("font-size", "14px")
                        .text(d.job_name);


                }
            }

            // if(d.mandatory==1) addMTTag(d3.select(this),true);
            // else
            addMTTag(d3.select(this), false);

            fade11(d3.select(this), d.tx, d.ty);

        });

}


function showEvent(d) {
    current_sn = d.id;
    // console.info("showEvent was called: ------->");
    var tmp_obj = {"p_id": d.p_id};
    // console.info("ep: "+current_sn +" | c:"+cat_sn);
    var ret_obj = JSON.parse(callService("Persona", "getProdRelated", tmp_obj));
    // console.info(ret_obj);
    var prod_list = ret_obj.list;
    // console.info(prod_list);
    initData();
    if (prod_list) {

        var j = 0;
        // console.info(d);
        var prod_length = prod_list.length;
        initProdData(prod_list);
        // console.info(prod_list);
        for (var i = 0; i < 8; i++) {
            // console.info(j +" " + i +" : "+ "ep: "+current_sn +" |
            // c:"+cat_sn);
            if (current_sn == i || cat_sn == i) {

            } else {
                // console.info(j);
                data_p[i].title = prod_list[j].to_name;
                data_p[i].p_id = prod_list[j].pid_to;
                if (prod_list[j].level) data_p[i].mandatory = prod_list[j].level;
                else data_p[i].mandatory = 0;

                if (prod_list[j].endpoint) data_p[i].endpoint = prod_list[j].endpoint;
                else data_p[i].endpoint = null;

                j++;
            }

        }


    }


    d3.selectAll('g')
        .each(function (d, i) {

            var this_g = d3.select(this);
            this_g.select("rect").style("filter", null);

            // console.log(d);
            if (current_sn == d.id || cat_sn == d.id) {
                // d.type=1;
                var ii = d.id;
                if (current_sn == d.id) d3.select("#show_note").text(function (d) {
                    return data_sub[ii].note;
                });
            } else {
                d.type = 2;
                var ii = d.id;
                this_g.select("rect").style("opacity", opac)

                // .style("filter", "url(#drop-shadow)")
                    .style('fill', function (d) {
                        return color_cate["c_" + cat_sn][2];
                    });

                this_g.select("text")
                    .attr("dx", function (d) {
                        var sub = 0;
                        if (d.title && d.title.length > 2) sub = 15;
                        return d.tx - 25 - sub;
                    })
                    .text(function (d, i) {
                        return data_p[d.id].title;
                    });


                d3.select("#show_note")
                    .text(function (d) {
                        return data_p[ii].note;
                    });

                if (d.mandatory == 1) {
                    addMTTag(d3.select(this), true);
                } else {
                    addMTTag(d3.select(this), false);
                    fade11(d3.select(this), d.tx, d.ty);
                }


            }

            // console.log(d, i);

        });

}

function details(d_e, current_id, chg_bgc_flag) {

    var url_endpoint = "/dygraphs/dg.jsp";

    var e = d_e.select("g[id='" + current_sn + "']");

    if (chg_bgc_flag) e.select("rect").style("filter", "url(#drop-shadow)").style("fill", "#FFFFFF").style("opacity", 1);

    // console.log(data_p);
    // console.log(d_e);
    // console.log(current_id);
    // console.log(data_p[current_id].endpoint);

    if (data_p[current_id].endpoint) url_endpoint = data_p[current_id].endpoint;


    showProductIn("show_note", url_endpoint, {});
    // e.select("text").text("--");

}


function addMTTag(d, flag) {

    if (flag) {
        d.append("circle")
            .attr("cx", function (d) {
                return d.sx + 11;
            })
            .attr("cy", function (d) {
                return d.sy + 30;
            })
            .attr("r", 6)
            .style("fill", "#ffffff")
            .style("filter", "url(#drop-shadow)")
        ;
    } else {
        if (d.select("circle"))
            d.select("circle").remove();

    }
}

function initData() {

    // data_p[i].job_name = joblist[i].job_name;
    // data_p[i].job_id = joblist[i].job_id;

    for (var i = 0; i < data_p.length; i++) {
        if (current_sn == i || cat_sn == i) {

        } else {
            data_p[i].job_name = 'TBD';
            data_p[i].job_id = null;
            data_p[i].mandatory = 0;

        }
    }


}

function initProdData(data) {
    if (data) {
    } else data = [];

    var length = data.length;
    if (length < 6)
        for (var i = (length - 1); i < 6; i++) {
            var one = {};
            one.title = 'TBD';
            one.p_id = null;
            one.mandatory = 0;
            data[i] = one;
        }


}

function prepareShadows(svg) {

    var defs = svg.append("defs");


    var pattern_1 = defs.append("pattern").attr("id", "pat_1").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)");

    pattern_1.append("image")
        .attr("xlink:href", "/dukeApp/widget/image/6.png")
        .attr("x", "0").attr("y", "0")
        .attr("width", "200").attr("height", "200");


    var filter_g = defs.append("filter")
        .attr("id", "glow");
    filter_g.append("feColorMatrix")
        .attr("type", "matrix")
        .attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0");

    filter_g.append("feGaussianBlur")
        .attr("stdDeviation", 2.5)
        .attr("result", "blur");
    var feMerge_g = filter_g.append("feMerge");
    feMerge_g.append("feMergeNode").attr("in", "coloredBlur");
    feMerge_g.append("feMergeNode").attr("in", "SourceGraphic");


    var filter = defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("x", "-50%").attr("y", "-50%")
        .attr("width", "200%").attr("height", "200%");

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 1)
        .attr("result", "blur");

    filter.append("feFlood")
        .attr("flood-color", "#FFFFFF")
        .attr("flood-opacity", "1")
        .attr("result", "offsetColor");

    filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 1).attr("dy", 1)
        .attr("result", "offsetBlur");

    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");
}


var timeout = null;

// http://localhost/SE4M/SE/Persona/1stC?u_id=abeljxwang
var tmp_obj = {
    "u_id": "abeljxwang"
};


var bodySelection = d3.select("#a01");
var svgSelection = bodySelection.append("svg").attr("width", a01_w).attr("height", a01_w);
prepareShadows(svgSelection);


// svgSelection.on("click", function(d) {

// console.log( d3.event.pageX, d3.event.pageY );
// showCardMain();
// });

// left top trang

svgSelection.append("polygon")
    .attr("points", function (d) {
        var x = a01_w;
        var y = a01_w;
        var width = width_d * 1.4;
// var poly = [{"x":x, "y":y},
// {"x": x - width, "y": y },
// {"x": x,"y": y-width}];

        var poly = [{"x": 0, "y": 0},
            {"x": 0, "y": a01_w},
            {"x": a01_w, "y": 0}];

        return poly.map(function (d) {
            return [d.x, d.y].join(",");
        }).join(" ");
    })
    .style("fill", function (d) {
        return "#000000";
    })
    .style("opacity", "0.00")
    .on("click", function (d) {

        // console.log( d3.event.pageX, d3.event.pageY );
        showCardMain();
    });
;

svgSelection.append("polygon")
    .attr("points", function (d) {
        var x = a01_w;
        var y = a01_w;
        var width = width_d * 1.4;
// var poly = [{"x":x, "y":y},
// {"x": x - width, "y": y },
// {"x": x,"y": y-width}];

        var poly = [{"x": x, "y": y},
            {"x": x - a01_w, "y": y},
            {"x": x, "y": y - a01_w}];

        return poly.map(function (d) {
            return [d.x, d.y].join(",");
        }).join(" ");
    })
    .style("fill", function (d) {
        return "#000000";
    })
    .style("opacity", "0.55")
    .style("stroke", "#rgba(0,0,255,0.8)")
    .style("strokeWidth", "1px");


var p_gs = svgSelection.selectAll("g").data(data_p).enter().append("g");

p_gs.transition().duration(10).attr(
    "transform",
    function (d) {
        return "translate(" + d.tx + " " + 0
            + ") scale(0.001,1) scale(1,1)";
    }).transition().duration(800).attr("transform", "scale(1,1)")
    .transition();

    var pgs_d = p_gs.attr("id", function (d) {
        return d.id;
    })
    .on("click", function (d) {
        console.log(d.job_id)
        var queryJobSummary= "http://192.168.1.13:8000/SE4M/SE/JobProfile/queryJobSummary" // ?job_id=x"

        $.ajax({
            url: queryJobSummary,
            method: 'get',
            timeout: 60,
            dataType: 'json',
            // returnAll: false,
            async:false,
            data: {
                // job_id : d.job_id
                job_id : "1"
            },
            success :function (ret) {
                console.log(ret)
                if (ret){
                    var skill = ret.skills;
                    var skillsArr = skill.split(",")
                    var skillData= ''

                        skillData +='<div class="jobBox cssFlex">\n' +
                        '                                    <div class="job-left">\n' +
                        '                                        <h4 class="job-nameNm">'+ret.job_name+'</h4>\n' +
                        '                                        <p class="adress-job">\n' +
                        '                                            <span class="adressInfo">'+ret.province+'-'+ret.city+'-'+ret.street+'</span>\n' +
                        '                                            <span class="job-year">'+ret.work_ex+'</span>\n' +
                        '                                            <span>'+ret.edu_ex+'</span>\n' +
                        '                                        </p>\n' +
                        '                                    </div>\n' +
                        '                                    <!--薪资 日期-->\n' +
                        '                                    <div class="job-right ">\n' +
                        '                                        <p class="moneyNum">'+ret.ratio+'k</p>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="F9Line"></div>\n' +
                        '                                <div class="positionName padding12">\n' +
                        '                                    <div class="job-img-content cssFlex">\n' +
                        '                                        <img src="../../../image/hr.png" alt="hr" class="hrImg">\n' +
                        '                                        <div class="job-img-text">\n' +
                        '                                            <p class="posiName">'+ret.user_name+'</p>\n' +
                        '                                            <p class="job-name">\n' +
                        '                                                <span>'+ret.c_name+'</span>\n' +
                        '                                                <i>·</i>\n' +
                        '                                                <span>'+ret.z_user_job+'</span>\n' +
                        '                                            </p>\n' +
                        '\n' +
                        '                                        </div>\n' +
                        '                                        <img src="../../../icon/right.png" alt="right" class="link-right">\n' +
                        '                                    </div>\n' +
                        '\n' +
                        '                                    <div class="job-chatBox cssFlex">\n' +
                        '                                        <div class="chatJob">聊一聊</div>\n' +
                        '                                        <div class="workJob">投递简历</div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="F9Line"></div>\n' +
                        '                                <!--岗位职责-->\n' +
                        '                                <div class="positionMain">\n' +
                        '                                    <h4 class="productName">岗位职责</h4>\n' +
                        '                                    <p class="posiText">'+ret.description+'</p>\n' +
                        '                                </div>\n' +
                        '                                <h4 class="productName">技能要求</h4>\n' +
                        '                                <div class="skillList cssFlex">\n'

                            for (let i = 0;i<skillsArr.length;i++){
                                skillData +='<span>'+skillsArr[i]+'</span>'
                            }

                    skillData +='                                </div>\n' +
                        '                                <div class="infoProduct cssFlex">\n' +
                        '                                    <img src="../../../image/pro.png" alt="pro" class="pro-img">\n' +
                        '                                    <div class="infoProductContent">\n' +
                        '                                        <h5 class="posiName">'+ret.c_name+'</h5>\n' +
                        '                                        <p class="textOverflow posiSize"><span>'+ret.description+'</span>\n' +
                        '                                            <i>·</i><span>'+ret.scale+'</span><i>·</i><span>'+ret.org_type+'</span></p>\n' +
                        '                                    </div>\n' +
                        '                                </div>'
                    $(".positionBox").html(skillData)
                }
            },
            error:function (res) {
                toast("请求失败")
            }
        });
        console.log(d);
        clearTimeout(timeout);



        timeout = setTimeout(function () {
            // console.clear();
            // console.log("node was single clicked", new Date());

            current_sn = d.id;

            // showEvent(d);
            details(svgSelection, current_sn, false);


        }, 100)

        // console.info(d.type, flag_top_cat, current_id, d.id);

    })

    .on("dblclick", function (d) {
        clearTimeout(timeout);
        console.log(1)
        // console.clear();
        console.log("node was double clicked", new Date());
        if (d.type == 0) {
            current_sn = d.id;
            cat_sn = d.id;
            returnCate();
            flag_top_cat = false;
        }

    });


// { "id": 0, "sx":330,"sy":-212,"tx":385,"ty":75,"tcolor" :
// "rgba(255,255,255,1)", "icon" : "catalog/loan2x.png" },
// { "id": 1, "sx":330,"sy":-106,"tx":310,"ty":150, "icon" : "catalog/pp@2x.png"
// },
// { "id": 2, "sx":436,"sy":-106,"tx":385,"ty":225, "icon" :
// "catalog/today@2x.png" },
// { "id": 3, "sx":330,"sy":0,"tx":235,"ty":225, "tcolor" :
// "rgba(255,255,255,1)", "icon" : "catalog/visa@2x.png" },
// { "id": 4, "sx":436,"sy":0,"tx":310,"ty":300, "icon" : "catalog/wealth.png"
// },
// { "id": 5, "sx":330,"sy":106,"tx":160,"ty":300, "icon" :
// "catalog/xMore@2x.png" }

//console.log("----------"+width_d+" : "+a01_w);
var tmp_w = width_d;
var right_s = a01_w * 0.707;


data_p[0].sx = right_s + 5;
data_p[0].sy = -2 * (tmp_w + 5) - 5;
data_p[0].tx = a01_w / 2 + (width_d + 10) * 1.414;
data_p[0].ty = a01_w / 2 - (width_d + 10) * 0.707;

data_p[1].sx = right_s + 5;
data_p[1].sy = -(tmp_w + 5);
data_p[1].tx = a01_w / 2 + (width_d + 10) * 0.707;
data_p[1].ty = a01_w / 2;

data_p[2].sx = right_s + tmp_w + 15;
data_p[2].sy = -(tmp_w + 5);
data_p[2].tx = a01_w / 2 + (width_d + 10) * 1.414;
data_p[2].ty = a01_w / 2 + (width_d + 10) * 0.707;

data_p[3].sx = right_s + 5;
data_p[3].sy = 5;
data_p[3].tx = a01_w / 2;
data_p[3].ty = a01_w / 2 + (width_d + 10) * 0.707;

data_p[4].sx = right_s + tmp_w + 15;
data_p[4].sy = 5;
data_p[4].tx = a01_w / 2 + (width_d + 10) * 0.707;
data_p[4].ty = a01_w / 2 + (width_d + 10) * 1.414;

data_p[5].sx = right_s + 5;
data_p[5].sy = tmp_w + 15;
data_p[5].tx = a01_w / 2 - (width_d + 10) * 0.707;
data_p[5].ty = a01_w / 2 + (width_d + 10) * 1.414;


pgs_d.append("rect").attr("x", function (d) {
    return d.sx;
}).attr("y", function (d) {
    return d.sy;
}).attr("rx", 10).attr("ry", 10).attr("width", width_d).attr(
    "height", width_d).style("fill", function (d) {
    var i = d.id;
    return color_cate["c_" + i][0];
}).style("opacity", opac)
    .style("stroke", "rgba(255,255,255,0.8)")
    .style("stroke-width", "1")
    .style("filter", function (d) {
        return "url(#glow)";
    })
    // fill="yellow" filter="url(#f1)" />
    .attr("transform", function (d) {
        return "rotate(45) ";
    });

pgs_d.append("text").attr("dx", function (d) {
    var sub = 0;
    if (d.title && d.title.length > 2)
        sub = 15;
    return d.tx - 15 - sub;
}).attr("dy", function (d) {
    return d.ty - 50;
}).attr("font-size", 14).attr("fill", function (d) {
    if (d.tcolor)
        return d.tcolor;
    else
        return "#FFFFFF";
}).attr("font-family", "'Microsoft YaHei UI Light'").text(function (d) {
    return d.title;
});


pgs_d.append("svg:image").attr("xlink:href", function (d) {
    if (d.cat_icon) return "/dukeApp/widget/" + d.cat_icon;
    else
        return "/dukeApp/widget/" + d.icon;


}).attr("width", width_d / 2).attr("height", width_d / 2).attr("x",
    function (d) {
        return d.tx - width_d / 4;
    }).attr("y", function (d) {
    return d.ty - width_d / 2;
});


// add return main icon
// svgSelection.append("svg:image").attr("xlink:href", function(d) {
// return "/DuKe/images/logo/duke-2.png";
// }).attr("width", 70).attr("height", 70).attr("x", 375).attr("y", 375)
// .on("click", function(d) {
// returnCate();
// flag_top_cat = false;
//
// });


returnCate();

function showTalk() {

    var maac_d = document.getElementById('layer_1');

    // transform: rotate(45deg) scale(0.5) skew(30deg, 30deg) translate(100px,
    // 100px);

    // maac_d.style.transform="translate(20px, 100px)";
    // if (maac_d.style.display == 'block')
    // maac_d.style.display = 'none';
    // else
    maac_d.style.display = 'block';
    maac_d.style.transform = 'translate3d(500px,0px, 0px)';

    // maac_d.style.left = '0';

    showProductIn("layer_1", "/MaaC/Card/p61?user_name=" + whoami, {});
}

function closeMaaC() {
    var maac_d = document.getElementById('layer_1');
    // maac_d.style.display = 'none';
    maac_d.style.transform = 'translate3d(-500px,0px, 0px)';
};


function showCardMain() {

    var dy_m_d = document.getElementById('a01');
    console.log("dy_m_d  隐藏")
    dy_m_d.style.display = "none";

}

// <pattern id="pat_1" x="-50" y="0" width="142" height="142"
// patternUnits="userSpaceOnUse"
// patternTransform="rotate(-45)">
// <image xlink:href="/DuKe/images/vip/golf_2.jpg" x="0" y="0" height="142" />
// </pattern>
function createPattern() {

    var patt = document.createElement("pattern")
        .attr("x", -50).attr("y", 0)
        .attr("width", function (d) {
            return "142";
        })
        .attr("height", function (d) {
            return "142";
        })
        .attr("patternUnits", function (d) {
            return "userSpaceOnUse";
        })
        .attr("patternTransform", function (d) {
            return "rotate(-45)";
        });
    patt.append("image")
        .attr("xlink:href", function (d) {
            return "/DuKe/images/vip/golf_2.jpg";
        })
        .attr("x", 0).attr("y", 0)
        .attr("height", function (d) {
            return "142";
        });
}

