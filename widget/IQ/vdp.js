/**
 * 
 */
// SE4M/SE/ProfileSummary/tagsbyID?uid=100001


// http://192.168.1.13:8000/SE4M/SE/JobProfile/jobListRandom       job_name
// http://192.168.1.13:8000/SE4M/SE/OrgnizationProfile/orgnizationlistRandom
console.log(11)
var urlbase = "http://192.168.1.13:8000/SE4M/SE//UserProfile/queryListRandom";

var httpbase = "http://192.168.1.13:8000/SE4M/SE/OrgnizationProfile/orgnizationlistRandom"
// var wsbase= "ws://" + window.WP4C.host + ":" + window.WP4C.port + window.WP4C.context;
var id_num=0;

var webSocket = null;
var whoami=null;
var whichgroup=null;

var lawyer_list = {"refresh": true};
var lawfirm_list = {"refresh": true};
var offical_law_org_list = {"refresh": true};

var acl_obj={};
var org_acl_obj=new Array();
var case_acl_obj=new Array();
var office_acl_obj=new Array();
var stuff_acl_obj=new Array();

var poc_data={};
var mul_ti_pay={}

var poc_product={};
var one_product={};
one_product['p_id']='p1000';
one_product['p_name']='澳洲旅游';
one_product['price']='3888.00';
one_product['due_date']='2017-03-31';
poc_product.p1000=one_product;

var patten={};
patten['020']='pt_020.jsp';
patten['021']='pt_021.jsp';
patten['022']='pt_022.jsp';
patten['023']='pt_023.jsp';
patten['024']='pt_024.jsp';
patten['025']='pt_025.jsp';
patten['026']='pt_026.jsp';
patten['027']='pt_027.jsp';
patten['028']='pt_028.jsp';
patten['029']='pt_029.jsp';
patten['030']='pt_030.jsp';
patten['0210']='card_0210.jsp';
patten['0212']='selectamount.jsp';


patten['0217']='pt_025.jsp';
patten['0218']='pt_021.jsp';

patten['0231']='0231/1.jsp';
patten['02312']='0231/2.jsp';
patten['02313']='0231/3.jsp';
patten['02314']='0231/4.jsp';
patten['02315']='0231/5.jsp';

patten['02401']='0240/1.jsp';
patten['02402']='0240/2.jsp';
patten['02403']='0240/3.jsp';
patten['02404']='0240/setTarget.jsp';
patten['02405']='0240/5.jsp';


var selected_prog = null;

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function htmlEncode(str) {
    return (str + '').replace(/\r\n|\n/g, ' ')
    .replace(/\'/g, "\\\'")
    .replace(/\\n/g, '\\\\n');
    
    // .replace('\n', ' ');
}

Array.prototype.indexOf = function(obj) {
	var rs_iindex=-1;
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
        	rs_iindex=i;
        	break;
        }
    }
    return rs_iindex;
}

// function isEmpty(str){
// return !str.replace(/^\s+/g, '').length; // boolean (`true` if field is
// empty)
// }

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function clearnFormData(oForm) {

    var frm_elements = oForm.elements;

    for (var i = 0; i < frm_elements.length; i++) {
        var field_type = frm_elements[i].type.toLowerCase();
        switch (field_type) {
            case "text":
            case "password":
            case "textarea":
            case "hidden":
                frm_elements[i].value = "";
                break;
            case "radio":
            case "checkbox":
                if (frm_elements[i].checked) {
                    frm_elements[i].checked = false;
                }
                break;
            case "select-one":
            case "select-multi":
                frm_elements[i].selectedIndex = -1;
                break;
            default:
                break;
        }
    }

}


Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds() // millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

Number.prototype.Rformat = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};


function toggleDisabled(el) {
    try {
        el.disabled = true;
        // alert(el.disabled);
    }
    catch (E) {
    }

    if (el.childNodes && el.childNodes.length > 0) {
        for (var x = 0; x < el.childNodes.length; x++) {
            toggleDisabled(el.childNodes[x]);
            // alert(el.disabled);
        }
    }

}
function toggleDiv(el_id) {
	var elt = document.getElementById(el_id);
	if (elt.style.display == 'none') {
		elt.style.display = 'block';
	} else
		elt.style.display = 'none';


}

function foldDiv(el_id) {
	var elt = document.getElementById(el_id);
	var h= elt.offsetHeight;
	if(h>100)
	elt.style.height = '100px';
	console.log('div:'+el_id+" h:"+h);

}

function removeRow(table_id) {
    var tb2 = document.getElementById(table_id);
    if (tb2 != null && tb2.rows != null) {
        var rowlength = tb2.rows.length;
        for (var xi = 1; xi <= rowlength; xi++) {
            var ind = rowlength - xi;
            tb2.deleteRow(ind);
        }
    }
}

function removeSelectOptions(form_select_id, from, to) {
    var select_field = document.getElementById(form_select_id);
    if (select_field != null && select_field.rows != null) {
        var length = select_field.options.length;
        var from_i = 0;
        var to_i = length;

        if (from) from_i = from;
        if (to) to_i = to;

        for (var i = from; i < to; i++) {


            select_field.options.remove(i);
        }

    }

}


function getLen(str) {
    var totallength = 0;

    for (var i = 0; i < str.length; i++) {
        var intCode = str.charCodeAt(i);

        if (intCode >= 0 && intCode <= 128) {
            totallength = totallength + 1;
        } else {
            totallength = totallength + 2;
        }
    } // end for

    return totallength;

}

function callService(service_name, op, input_obj, result_a) {
    // var result_a;
    var urltoendpoint = urlbase ;
    console.log(urltoendpoint)

    // document.getElementById("debug_w").value=JSON.stringify(input_obj);

    return $.ajax({
        type: 'POST',
        url: urltoendpoint,
        async: false,
        // headers: {access_id: "121481941749174","Access-Control-Allow-Origin": "*"},
        dataType: "json",
        contentType: "text/plain; charset=utf-8",
        processData: true,
        data: JSON.stringify(input_obj),
        success: function (response) {
            // result_a = response;
            // document.getElementById("debug_w").value=document.getElementById("debug_w").value+":
			// success";

            // result_a = response;

            // document.getElementById("debug_w").value=JSON.stringify(result_a);


        },
        error: function (jqXHR, textStatus, errorThrown) {


        }


    }).responseText;

}
function callServiceUrl(s_url, in_obj) {
    //var result_a;
    var urltoendpoint = s_url;

    //document.getElementById("debug_w").value=JSON.stringify(input_obj);
    var input_obj={};
    if(in_obj){
    	input_obj=in_obj;
    }
    
    return $.ajax({
        type: 'POST',
        url: urltoendpoint,
        async: false,
        // headers: {access_id: "121481941749174","Access-Control-Allow-Origin": "*"},
        dataType: "json",
        contentType: "text/plain; charset=utf-8",
        processData: true,
        data: JSON.stringify(input_obj),
        success: function (response) {
            //result_a = response;
            //document.getElementById("debug_w").value=document.getElementById("debug_w").value+": success";

            //result_a = response;

            //document.getElementById("debug_w").value=JSON.stringify(result_a);


        },
        error: function (jqXHR, textStatus, errorThrown) {

        }


    }).responseJSON;

}


function callHTTPFunction(url, input_obj) {
    // var result_a;
    var urltoendpoint = httpbase ;
 
    return $.ajax({
        type: 'POST',
        url: urltoendpoint,
        async: false,
        // headers: {access_id: "121481941749174","Access-Control-Allow-Origin": "*"},
        // dataType: "html",
        // contentType : "text/plain; charset=utf-8",
        processData: true,
        data: input_obj,
        success: function (response) {


        },
        error: function (jqXHR, textStatus, errorThrown) {


        }


    }).responseText;

}

function callHTTPFunctionURL(url, input_obj) {
    // var result_a;
    var urltoendpoint =  url;
 
    return $.ajax({
        type: 'POST',
        url: urltoendpoint,
        async: false,
        // headers: {access_id: "121481941749174","Access-Control-Allow-Origin": "*"},
        // dataType: "html",
        // contentType : "text/plain; charset=utf-8",
        processData: true,
        data: input_obj,
        success: function (response) {


        },
        error: function (jqXHR, textStatus, errorThrown) {


        }


    }).responseText;

}

function post2URL(path, params, method) {
    method = method || "post"; // Set method to post by default if not
								// specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function postMPF2URL(path, params, method) {
    method = method || "post"; // Set method to post by default if not
								// specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("enctype", "multipart/form-data");

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}


function makeFormSelect(formid, title, name, values) {
    var mypara = document.getElementById(formid);   // "basic_form"
    var element = document.createElement("div");
    element.classList.add('f_cell');
    var element_title = document.createElement("div");
    element_title.classList.add('title');

    element_title.appendChild(document.createTextNode(title));
    element.appendChild(element_title);
    var myselect = document.createElement("select");

    // add options
    for (var i = 0; i < values.length; i++) {
        var theOption = document.createElement("OPTION");
        var theText = document.createTextNode(values[i].name);
        theOption.appendChild(theText);
        theOption.setAttribute("value", values[i].value);
        myselect.appendChild(theOption);

    }

    // end of options

    // to reference then so I can delete the form later
    myselect.setAttribute("id", "selectID");
    myselect.setAttribute("name", name);

    // myform.setAttribute("id","formID");
    myselect.classList.add('select');
    // document.getElementById("MyElement").classList.remove('class');

    element.appendChild(myselect);
    mypara.appendChild(element);
}

function makeFormTextInput(formid, title, name, value) {

    var mypara = document.getElementById(formid);  // "basic_form"

    var element = document.createElement("div");
    element.classList.add('f_cell');
    var element_title = document.createElement("div");
    element_title.classList.add('title');

    element_title.appendChild(document.createTextNode(title));

    element.appendChild(element_title);


    var myinput = document.createElement("input");
    myinput.setAttribute("type", "text");
    myinput.setAttribute("name", name);
    myinput.setAttribute("value", value);

    myinput.classList.add('i_text');


    element.appendChild(myinput);
    mypara.appendChild(element);
}

function makeFormRadio(formid, title, name, values) {

    var mypara = document.getElementById(formid);   // "basic_form"

    var element = document.createElement("div");
    element.classList.add('f_cell');
    var element_title = document.createElement("div");
    element_title.classList.add('title');

    element_title.appendChild(document.createTextNode(title));
    element.appendChild(element_title);

    // <div class="radio">
    // <input type="radio" name="group1" value="T"> 目标客户
    // </div>
    // add options
    for (var i = 0; i < values.length; i++) {
        var element_radio = document.createElement("div");
        element_radio.classList.add('radio');

        var theRadio = document.createElement("input");
        theRadio.setAttribute("type", "radio");
        theRadio.setAttribute("name", name);
        theRadio.setAttribute("value", values[i].value);
        element_radio.appendChild(theRadio);
        var theText = document.createTextNode(values[i].name);
        element_radio.appendChild(theText);

        element.appendChild(element_radio);

    }
    mypara.appendChild(element);
}


function changeOpacity(eid, opacity) {
    // Return the text of the selected option
    // var opacity = x.options[x.selectedIndex].text;
    var el = document.getElementById(eid);
    if (el.style.opacity !== undefined) {
        el.style.opacity = opacity;
    } else {
        alert("Your browser doesn't support this function!");
    }
}



function showObj2Options(form_select_id, json_obj, start_sn) {
    var sel = document.getElementById(form_select_id);
    sel.innerHTML = "";
    // removeSelectOptions(form_select_id,'1');

    var items = Object.keys(json_obj);
    // parti_id,parti_name,offical_name
    // start_id=0;
    // if(start_sn) start_id=start_sn;

    for (var i = 0; i < items.length; i++) {
        var onedata = items[i];
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(json_obj[onedata]));
        opt.value = onedata; // set value property of opt
        sel.appendChild(opt); // add opt to end of select box (sel)
    }

}

function showObj2OptionsAdd(form_select_id, json_obj, start_sn) {
    var sel = document.getElementById(form_select_id);

    // removeSelectOptions(form_select_id,'1');

    var items = Object.keys(json_obj);
    // parti_id,parti_name,offical_name
    // start_id=0;
    // if(start_sn) start_id=start_sn;

    for (var i = 0; i < items.length; i++) {
        var onedata = items[i];
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(json_obj[onedata]));
        opt.value = onedata; // set value property of opt
        sel.appendChild(opt); // add opt to end of select box (sel)
    }

}

function showPage(url_op,input_obj){

	var result_html = callHTTPFunction(url_op,input_obj);
	console.log(result_html)
	// var result_html = callHTTPFunction(url_op,input_obj);
	
	$('#container_main').html(result_html);
	//document.getElementById("container_main").innerHTML = result_html;
	
}


function showPage4In(el_id,url_op,input_obj){

	var el=document.getElementById(el_id);
	
	var msg_html = callHTTPFunction(url_op,input_obj);
	el.innerHTML = msg_html;
	toggleDiv('sc_d');
	
}

function showProductIn(el_id,url_op,input_obj){
	var el=document.getElementById(el_id);
	
	//var msg_html = callHTTPFunction(url_op,input_obj);
	//el.innerHTML = msg_html;
	
	//$('#'+el_id).html(msg_html);
	
	$('#'+el_id).load("/DuKe"+url_op);   //load("include/test.html")

	
}

function showPage4InNC(el_id){

	vc_show('ctc_in_sc_d',true);
	vc_show('cont_in_sc_d',false);
	vc_show('sc_d',true);
	
}




var inv_status=true;

function showInvoice(user_id,acount_id){
	// var baseurl="/DuKe/VDP/";
	// window.location.assign(baseurl+fname+"/"+aname);
	var elt=document.getElementById('invoice_d');
	if(inv_status){
	elt.style.display='block';
	}
	else
		elt.style.display='none';
	
	inv_status=!inv_status;
		
	return false;
	
	
}

// function go2(fname, aname){
// 	var baseurl="/DuKe/MaaC/";
// 	window.location.assign(baseurl+fname+"/"+aname);
//
// }
//
// function go2Page(url){
// 	var baseurl="/DuKe";
// 	window.location.assign(baseurl+url);
//
// }

var view_status={};


function showMore(info_dev,user_id, acount_id) {
	// var baseurl="/DuKe/VDP/";
	// window.location.assign(baseurl+fname+"/"+aname);
	var div_od='more_vmorc';
	
	if(info_dev){
		div_od=info_dev;			
	} 
	if(view_status[div_od]!=null){}
	else view_status[div_od]=true;
	
	var elt = document.getElementById(div_od);
	
	if (view_status[div_od]) {
		elt.style.display = 'block';
	} else
		elt.style.display = 'none';

	view_status[div_od] = !view_status[div_od];

	return false;

}

// var myElement = document.getElementById('element_within_div');
var topPos = 0;


  function onMessage(event) {
  	
  	 //alert(whoami+" : "+JSON.stringify(event.data));
    // document.getElementById('container_msg').innerHTML
    // += '<br />' + event.data;
	  var data=JSON.parse(event.data);
	  
	  // alert(JSON.stringify(event.data));
	  var sender=data.sender;
	  var to=data.to;
	  //console.log(to_one +' to somebody: '+whoami+' | '+(to_one==whoami) );
    var element_msg = document.getElementById("container_main");	
    
    var cur_msg=null
    
   //console.log(data.message);
    var msg_str=data.message;
   
   
    if(sender=='System'||sender=='Robot'||sender=='CustomerMgr') {
    	// alert("ada : "+ data.message.indexOf('0'));
    	//console.log(msg_str);
    	var msg_card=data.msg_card;
    	//console.log(JSON.stringify(data));
    	if(msg_card){
    		 var card_url=msg_card.url;
    		 if(card_url) cur_msg=creatDilog4Sys(msg_str,sender,card_url);  //
    		 else cur_msg=creatDilog4others(msg_str,sender,'H5') ;
    	}
    	else{
    	if(msg_str.indexOf(02)>=0)
    	// cur_msg=creatADmsg4Sys(msg_str); //creatDilog4Sys
    		cur_msg=creatDilog4Sys(msg_str,sender);  //
    	else
    		cur_msg=creatDilog4others(msg_str,sender,'H5') ;
    	}
    		
      
    }
    else if(sender=='MFERB') {
    	// alert("ada : "+ data.message.indexOf('0'));
    	//console.log('msflow msg: '+msg_str);
    	//console.log(JSON.stringify(data));
    	//var page_u=msg_str;
    	var fl_msg=creatDilog4Flow(msg_str,sender,id_num); 
    	//fl_msg.setAttribute("id", id_num);
    	
    	var flmsgin=JSON.parse(msg_str);
    	console.log("msg with data: "+JSON.stringify(flmsgin));
    	var fltype=flmsgin.type;
    	if(fltype=='msgflow'){
    		var pgurl=flmsgin.page_url;
    		var msg_html = callHTTPFunctionURL(pgurl,flmsgin.data);
    		
        	
    	
    	
    	if(to&&whoami){
    	    for(var i=0;i<to.length;i++){
    	    	var to_one=to[i];
    	    	
    	    	//if(to_one==whoami)
    	    	if(element_msg) element_msg.appendChild(fl_msg);
            	document.getElementById(id_num).innerHTML=msg_html;
    	    	
    	    }
    	    }
    	id_num=id_num+1;
    	}
    	
    }
    else if(sender==whoami) cur_msg=creatDilog4user(msg_str);
    else {
    	cur_msg=creatDilog4others(msg_str,sender,'H5') ;
    }
    
    
    if(cur_msg) {
    cur_msg.setAttribute("id", id_num);
    //if(element_msg) element_msg.appendChild(cur_msg);
    if(element_msg) $('#container_main').append(cur_msg);
    id_num=id_num+1;
    
    
    
    var tem_e=document.getElementById("container_main_con");
    //console.info(tem_e.scrollTop +" : "+ tem_e.scrollHeight);
    //if(tem_e)     
    tem_e.scrollTop = tem_e.scrollHeight;
    console.info(tem_e.scrollTop +" : "+ tem_e.scrollHeight);
    // msg_end.click();
    }
    
    unfreeze();  
  }

  function onOpen(event) {
    if(document.getElementById('console_msg')) document.getElementById('console_msg').innerHTML = 'Connection established';
    var element_msg = document.getElementById("container_main");
	// alert("close: "+element_msg.innerHTML);
    
    // localStorage.chathistory
	// if (localStorage.chathistory)
	// element_msg.innerHTML = localStorage.chathistory;
  }

  function onClose(event) {
		var element_msg = document.getElementById("container_main");
		
		// localStorage.chathistory
		// localStorage.chathistory = element_msg.innerHTML;
		// alert("close: "+localStorage.chathistory);

	}
  function onError(event) {
    alert(event.data);
  }

  function start() {
    webSocket.send('hello');
    return false;
  }
  
  function sendmsg() {
  	var msg_send=document.getElementById('msg').value;
      if(msg_send) webSocket.send(msg_send);
      document.getElementById('msg').value='';
      
      return false;
    }
  
  function sendADmsg(s_p_id) {
	  	// var msg_send=document.getElementById('msg').value;
	      
	      // var msg_html =
			// callHTTPFunction('/jsp/xinsadmin/more_vmorc_tmp.jsp');
	      if(s_p_id) webSocket.send(s_p_id);
      return false;
	    }
  
  function sendADmsgbyPID(s_p_id) {
	  
	  // alert(s_p_id+" -------------" +selected_prog);
	  var  p_id=selected_prog;
	  if(s_p_id) p_id=s_p_id;
	  var input_obj={"p_id":p_id};
	 

		var msg_html='';
		// alert(p_id+"-------------");
		if(p_id)
			msg_html = callHTTPFunction('/jsp/xinsadmin/patten/'+patten[p_id],input_obj);
		else
			msg_html = callHTTPFunction('/jsp/xinsadmin/patten/more_product_pt.jsp',input_obj);
		// alert(p_id+"-------------"+msg_html);
		document.getElementById("preview_edit").innerHTML=msg_html;
	      if(s_p_id) webSocket.send(p_id);
    return false;
	    }
  
  function sendSAmsg(msg_str, from, to,flowid,nodeid) {
	  var msg_tmp={};
	  var msg_send=null;
	  if(msg_str) msg_send=msg_str;
	  else msg_send=document.getElementById('msg').value;
	  msg_tmp['message']=msg_send;
	  if(to) msg_tmp['to']=to;
	  if(from) msg_tmp['sender']=from;
	  if(flowid) msg_tmp['flow_id']=flowid;
	  if(nodeid)msg_tmp['node_id']=nodeid;
	  
      if(msg_send) webSocket.send(JSON.stringify(msg_tmp));
      document.getElementById('msg').value='';
      
      return false;
	    }
  
  function  sendSAmsgRich(msg_str, type,from,to) {
	  var msg_tmp={};
	  var msg_send=null;
	  if(msg_str) msg_send=msg_str;
	  else msg_send=document.getElementById('msg').value;
	  msg_tmp['message']=msg_send;
	  if(to) msg_tmp['to']=to;
	  if(from) msg_tmp['sender']=from;
	  
      if(msg_send) webSocket.send(JSON.stringify(msg_tmp));
      document.getElementById('msg').value='';
      
      return false;
	    }
  
  function sendFLmsgRich(msg_str,from,to,flowid,nodeid) {
	  var msg_tmp={};
	  var msg_send=null;
	  msg_tmp['flow_id']=flowid;
	  msg_tmp['node_id']=nodeid;
	  if(msg_str) msg_tmp['message']=msg_str;
	  if(to) msg_tmp['to']=to;
	  if(from) msg_tmp['sender']=from;
	  
      if(msg_send) webSocket.send(JSON.stringify(msg_tmp));

      return false;
	    }
  
  function split2Array(str){
	  var words = str.split(/@|;|,|\s+/);
	  var result=new Array();
	  for(var l=0;l<words.length;l++){
		  if(words[l]) result.push(words[l]);
	  }
	  return result;
	  
  }
  
function sendJSONMsg(from,to,text,fid_call,type,msg_encode) {
	  
	  // alert(s_p_id+" -------------" +selected_prog);
	  // var to=selected_prog;
	  var input_obj={"sender":from};
	  var _to=split2Array(to);
	  input_obj['to']=_to;
	  if(text) input_obj['message']=text;
	  if(fid_call) input_obj['fid_call']=fid_call;
	  var _type="text/plain";
	  if(type) _type= type;
	  input_obj['type']=_type;
	  
	  var _msg_encode="plain";
	  if(msg_encode) _msg_encode= msg_encode;
	  input_obj['msg_encode']=_msg_encode;
	  input_obj['time']=new Date();   // "time", new Date().toString()
	  
	  
	  // alert(JSON.stringify(input_obj));
	  
	  if(text) webSocket.send(JSON.stringify(input_obj));
	  
	  
	  return false;
    // return input_obj;
	    }


function sendJSONMsg4AX(from,to,text,fid_call) {
	  
	  // alert(s_p_id+" -------------" +selected_prog);
	  // var to=selected_prog;
	//	{
	//		"method":"create",   //create, disable, close
	//		"type":"inner",      //inner  modal
	//		"openHeight":"40",   //卡片打开的初始高度
	//		"needFold":true,	 //是否可以展开。展开时卡片的高度由手机屏幕和H5高度来决定
	//		"sessionId":"980909-90831-ce1e3",  //会话ID， 决定是哪个会话窗口中新建卡片
	//		"url":"www.maac.wpc/121",  //url，卡片打开的url
	//		"cardSer":"2"     	 //卡片序号，用以指定对哪个卡片做disable或close
	//
	//	}
	
		var msg_card={};
			msg_card.method="create";
			msg_card.type="inner";
			msg_card.openHeight=245;
			msg_card.needFold=false;
			msg_card.sessionId="980909-90831-ce1e3";
			msg_card.url="http://localhost/MaaC/MsgCard/CC01/p2";
			msg_card.cardSer=2;
			
			
	
	
	
	
	  var input_obj={"sender":from};
	  var _to=split2Array(to);
	  input_obj['to']=_to;
	  if(text) input_obj['message']=text;
	  if(fid_call) input_obj['fid_call']=fid_call;
	  var _type="card/msg";
	  //if(type) _type= type;
	  input_obj['type']=_type;
	  
	  //var _msg_encode="plain";
	  //if(msg_encode) _msg_encode= msg_encode;
	  //input_obj['msg_encode']=_msg_encode;
	  input_obj['time']=new Date();   // "time", new Date().toString()
	  
	  input_obj["msg_card"]=msg_card;
	  
	  
	  // alert(JSON.stringify(input_obj));
	  
	  if(text) webSocket.send(JSON.stringify(input_obj));
	  
	  
	  return false;
  // return input_obj;
	    }
  
  function creatDilog4user(msg) {
	  		// alert(msg);

		    // var mypara = document.getElementById(formid); //"basic_form"

		    var element = document.createElement("div");				// <div
																		// class="container-fluid">
		    element.classList.add('container-fluid');
		    
		    var element_row = document.createElement("div");			// <div
																		// class="row">
		    element_row.classList.add('row');
		    
		    var element_col_10 = document.createElement("div");			// <div
																		// class="col-md-10
																		// text-right">
		    element_col_10.classList.add('col-md-10');
		    element_col_10.classList.add('col-sm-10');
		    element_col_10.classList.add('col-xs-10');
		    element_col_10.classList.add('text-right');
		    
		    var element_org_box = document.createElement("div");			//      
		    element_org_box.classList.add('org_box');					// <div
																		// class="org_box">
		    element_org_box.style.background='#AAFFAA';
		    
		    var element_span = document.createElement("span");			// <span
																		// class="org_box_cor
																		// cor4"></span>
		    element_span.classList.add('org_box_cor');	
		    element_span.classList.add('cor4');	
		    
		    
		    element_org_box.appendChild(element_span);
		    element_org_box.appendChild(document.createTextNode(msg));			// 我想申请提高授权额度到20000，请帮忙处理。
		    element_col_10.appendChild(element_org_box);
		    element_row.appendChild(element_col_10);
		    
		    
		    // /for icon part
		    var element_col_2 = document.createElement("div");			// <div
																		// class="col-md-2"
																		// style="padding-left:
																		// 0;">
		    element_col_2.classList.add('col-md-2');
		    element_col_2.classList.add('col-sm-2');
		    element_col_2.classList.add('col-xs-2');
		    element_col_2.style.padding = "0px 2px 0px 0px";

		    
		    var element_icon = document.createElement("div");			// <div
																		// style="margin-top:
																		// 10px;
																		// float:
																		// left;">
		    element_icon.classList.add('icon_box');					//          
		    element_icon.style.float = "left";
		    element_icon.style.margin = "5px 0 0 0";
		    
		    var element_img = document.createElement("img");							// <img
																						// src="/DuKe/images/xins/icon-1.jpg"
																						// width=40
																						// height=40
		    element_img.setAttribute("src", "/DuKe/images/xins/icon-me.png");		// //
																					// alt="..."
																					// class="img-circle
																					// pull-left"
																					// style="float:
																					// left;">
		    element_img.setAttribute("width", 40);	        
		    element_img.classList.add('img-circle');	
		    element_img.classList.add('pull-left');	
		    element_img.style.float = "left";
		    element_img.style.border = "1px solid #ffaa77";

		    
		    element_icon.appendChild(element_img);
		    element_col_2.appendChild(element_icon);	
		    element_row.appendChild(element_col_2);
		    
		    element.appendChild(element_row);
		    
		    return element;
	  
  }
  
  function creatDilog4others(msg,name,type) {
	  
	  // alert(msg);
	  	if(name==null) name='common';

	    var element = document.createElement("div");				// <div
																	// class="container-fluid">
	    element.classList.add('container-fluid');
	    
	    var element_row = document.createElement("div");			// <div
																	// class="row">
	    element_row.classList.add('row');
	    
	    // /for icon part
	    var element_col_2 = document.createElement("div");			// <div
																	// class="col-md-2"
																	// style="padding-left:
																	// 0;">
	    element_col_2.classList.add('col-md-2');
	    element_col_2.classList.add('col-sm-2');
	    element_col_2.classList.add('col-xs-2');
   
	    var element_icon = document.createElement("div");			// <div
																	// style="margin-top:
																	// 10px;
																	// float:
																	// left;">
	    element_icon.style.margin = "5px 0 0 0";
	    
	    var element_img = document.createElement("img");							// <img
																					// src="/DuKe/images/xins/icon-1.jpg"
																					// width=40
																					// height=40
	    element_img.setAttribute("src", "/DuKe/images/xins/icon-"+name+".png");		// //
																					// alt="..."
																					// class="img-circle
																					// pull-left"
																					// style="float:
																					// left;">
	    element_img.setAttribute("width", 40);	        
	    element_img.classList.add('img-circle');	
	    element_img.style.border = "1px solid #ffaa77";

	    
	    element_icon.appendChild(element_img);
	    element_col_2.appendChild(element_icon);	
	    element_row.appendChild(element_col_2);
	    
	    
	    var element_col_10 = document.createElement("div");			// <div
																	// class="col-md-10
																	// text-right">
	    element_col_10.classList.add('col-md-10');
	    element_col_10.classList.add('col-sm-10');
	    element_col_10.classList.add('col-xs-10');
	    element_col_10.classList.add('text-left');
	    
	    var element_org_box = document.createElement("div");			//      
	    element_org_box.classList.add('org_box');					// <div
																	// class="org_box">
	    
	    var element_span = document.createElement("span");			// <span
																	// class="org_box_cor
																	// cor4"></span>
	    element_span.classList.add('org_box_cor');	
	    element_span.classList.add('cor2');	
	    element_org_box.appendChild(element_span);
	    var  element_msg_span = document.createElement("span");
	    
	   // element_org_box.appendChild(document.createTextNode(msg));			// 我想申请提高授权额度到20000，请帮忙处理。
	    //额ill update
	    
	    if(type=="H5"){
	    	var  element_msg_span = document.createElement("span");
	    	element_msg_span.innerHTML=msg;
	    }
	    else{
	    	element_msg_span.innerText=msg;
	    }
	    
	    element_org_box.appendChild(element_msg_span);
	    
	    element_col_10.appendChild(element_org_box);
	    element_row.appendChild(element_col_10);   
	    element.appendChild(element_row);
	    
	    return element;

}
  
  
  
  function creatDilog4Sys(msg,name,url) {
	  
	  	if(name==null) name='common';

	    var element = document.createElement("div");				// <div
																	// class="container-fluid">
	    element.classList.add('container-fluid');
	    
	    var element_row = document.createElement("div");			// <div
																	// class="row">
	    element_row.classList.add('row');
	    
	    // /for icon part
	    var element_col_2 = document.createElement("div");			// <div
																	// class="col-md-2"
																	// style="padding-left:
																	// 0;">
	    element_col_2.classList.add('col-xs-2');
 
	    var element_icon = document.createElement("div");			// <div
																	// style="margin-top:
																	// 10px;
																	// float:
																	// left;">
	    element_icon.style.margin = "5px 0 0 0";
	    
	    var element_img = document.createElement("img");							// <img
																					// src="/DuKe/images/xins/icon-1.jpg"
																					// width=40
																					// height=40
	    element_img.setAttribute("src", "/DuKe/images/xins/icon-"+name+".png");		// //
																					// alt="..."
																					// class="img-circle
																					// pull-left"
																					// style="float:
																					// left;">
	    element_img.setAttribute("width", 40);	        
	    element_img.classList.add('img-circle');	
	    element_img.style.border = "1px solid #ffaa77";

	    
	    element_icon.appendChild(element_img);
	    element_col_2.appendChild(element_icon);	
	    element_row.appendChild(element_col_2);
	    
	    
	    var element_col_10 = document.createElement("div");			// <div
																	// class="col-md-10
																	// text-right">
	    element_col_10.classList.add('col-xs-10');
	    element_col_10.classList.add('text-left');
	    var element_org_box = document.createElement("div");			//      
	    element_org_box.classList.add('org_box');
	    element_org_box.style.margin = "10px 0 0 0";					// <div
																		// class="org_box">
	    element_org_box.style.padding = "0 0 0 0";	
	    
	    var element_span = document.createElement("span");			// <span
																	// class="org_box_cor
																	// cor4"></span>
	    element_span.classList.add('org_box_cor');	
	    element_span.classList.add('cor2');	
	    element_org_box.appendChild(element_span);
	    var elementdd = document.createElement("div");	
	    
	    var msg_html = "";
	    if(url)  msg_html =callHTTPFunction(url);
	    else if(msg) msg_html =callHTTPFunction('/jsp/xinsadmin/patten/'+patten[msg]);
		// /jsp/xinsadmin/patten/'+patten[p_id],input_obj
		element.style.margin = "0 0 0 0";
		elementdd.innerHTML=msg_html;
	    element_org_box.appendChild(elementdd);			// 我想申请提高授权额度到20000，请帮忙处理。
		 
	    
	    element_col_10.appendChild(element_org_box);
	    element_row.appendChild(element_col_10);   
	    element.appendChild(element_row);
	    
	    return element;

}
  
  
  function showCoverPG(url_str,in_obj){
	  //cont_in_sc_d
	var el=document.getElementById('cont_in_sc_d');
	var input_obj={};
	if(in_obj) input_obj=in_obj;
	
	var msg_html = callHTTPFunction(url_str,input_obj);
	el.innerHTML = msg_html;
	toggleDiv('sc_d');

	return false;

  }
  
  
  function creatDilog4Flow (msg,name,id) {
	  
	  
	  
	  	if(name==null) name='common';

	    var element = document.createElement("div");				// <div
																	// class="container-fluid">
	    element.classList.add('container-fluid');
	    element.style.margin = "0 0 0 0";
	    
	    var element_row = document.createElement("div");			// <div
																	// class="row">
	    element_row.classList.add('row');
	    
	    // /for icon part
	    var element_col_2 = document.createElement("div");			// <div
																	// class="col-md-2"
																	// style="padding-left:
																	// 0;">
	    element_col_2.classList.add('col-md-2');
	    element_col_2.classList.add('col-sm-2');
	    element_col_2.classList.add('col-xs-2');
 
	    var element_icon = document.createElement("div");			// <div
																	// style="margin-top:
																	// 10px;
																	// float:
																	// left;">
	    element_icon.style.margin = "5px 0 0 0";
	    
	    var element_img = document.createElement("img");							// <img
																					// src="/DuKe/images/xins/icon-1.jpg"
																					// width=40
																					// height=40
	    element_img.setAttribute("src", "/DuKe/images/xins/icon-"+name+".png");		// //
																					// alt="..."
																					// class="img-circle
																					// pull-left"
																					// style="float:
																					// left;">
	    element_img.setAttribute("width", 40);	        
	    element_img.classList.add('img-circle');	
	    element_img.style.border = "1px solid #ffaa77";

	    
	    element_icon.appendChild(element_img);
	    element_col_2.appendChild(element_icon);	
	    element_row.appendChild(element_col_2);
	    
	    
	    var element_col_10 = document.createElement("div");			// <div
																	// class="col-md-10
																	// text-right">
	    element_col_10.classList.add('col-md-10');
	    element_col_10.classList.add('col-sm-10');
	    element_col_10.classList.add('col-xs-10');
	    var element_org_box = document.createElement("div");			//      
	    element_org_box.classList.add('org_box');
	    element_org_box.style.margin = "10px 0 0 0";					// <div
																		// class="org_box">
	    element_org_box.style.padding = "0 0 0 0";	
	    
	    var element_span = document.createElement("span");			// <span
																	// class="org_box_cor
																	// cor4"></span>
	    element_span.classList.add('org_box_cor');	
	    element_span.classList.add('cor2');	
	    element_org_box.appendChild(element_span);
	    var elementdd = document.createElement("div");	
	    
	    elementdd.setAttribute("id", id);	
	    
	    //var msg_html = callHTTPFunction('/jsp/xinsadmin/patten/'+patten[msg]);
		// /jsp/xinsadmin/patten/'+patten[p_id],input_obj
		
		//elementdd.innerHTML=msg_html;
	    element_org_box.appendChild(elementdd);			// 我想申请提高授权额度到20000，请帮忙处理。
		 
	    
	    element_col_10.appendChild(element_org_box);
	    element_row.appendChild(element_col_10);   
	    element.appendChild(element_row);
	    
	    return element;

}
  
  
  function creatADmsg4Sys(ad_id,name){
	  
	  var element = document.createElement("div");				// <div
																// class="container-fluid">
	    element.classList.add('container-fluid');
	    
	  if(ad_id.indexOf(02)>=0){
	  var msg_html = callHTTPFunction('/jsp/xinsadmin/patten/'+patten[ad_id]);
	   // /jsp/xinsadmin/patten/'+patten[p_id],input_obj
	  element.style.margin = "10px 0 0 0";
	  element.innerHTML=msg_html;

	  }
	    
	    return element;
	  
  }
  
  function startVchat(gname,name){
	  // alert(wsbase);
	  if(webSocket==null) webSocket= new WebSocket(wsbase+'/ws/gchat/'+gname+'/'+name);
	  
	    webSocket.onerror = function(event) {
	      onError(event)
	    };

	    webSocket.onopen = function(event) {
	      onOpen(event)
	    };
	    
	    webSocket.onclose = function() {
			onClose(event)
		};
		
	    webSocket.onmessage = function(event) {
	      onMessage(event)
	    };
	  }
  

function showFT(flag){
  var elt = document.getElementById('div_ft');
  if(flag)	elt.style.display = 'block';
  else	elt.style.display = 'none';
}

function showPT(input_obj){
	
	var msg_html = callHTTPFunction('/jsp/xinsadmin/more_vmorc_tmp.jsp',input_obj);
	// document.getElementById("editor_div").innerHTML=msg_html;
	// var parser = new DOMParser();
	// var el = parser.parseFromString(msg_html, "text/html");
	// document.getElementById("editor_div").appendChild(el);
	document.getElementById("preview_edit").innerHTML=msg_html;
	
}

function showPTbyID(input_obj){
	var  p_id=input_obj['p_id'];

	//alert(p_id);
	// patten['025']
	var msg_html='';
	if(p_id)
		msg_html = callHTTPFunction('/jsp/xinsadmin/patten/'+patten[p_id],input_obj);
	else
		msg_html = callHTTPFunction('/jsp/xinsadmin/patten/more_product_pt.jsp',input_obj);
	// document.getElementById("editor_div").innerHTML=msg_html;
	// var parser = new DOMParser();
	// var el = parser.parseFromString(msg_html, "text/html");
	// document.getElementById("preview_edit").appendChild(el);
	document.getElementById("preview_edit").innerHTML=msg_html;
	
}

function vc_show(el, flag) {
	var elt_A = document.getElementById(el);
	// alert(el+" : "+elt_A.style.display)
	if (flag)
		elt_A.style.display = 'block';
	else
		elt_A.style.display = 'none';

}

function showSC(user_id, acount_id) {
	// var baseurl="/DuKe/VDP/";
	// window.location.assign(baseurl+fname+"/"+aname);

	var el=document.getElementById('cont_in_sc_d');
	var input_obj={};
	
	
	var msg_html = callHTTPFunction('/jsp/xins/shoppingcart.jsp',input_obj);
	el.innerHTML = msg_html;
	toggleDiv('sc_d');

	return false;

}

function showSCbyPID(p_id,el_id) {
	// var baseurl="/DuKe/VDP/";
	// window.location.assign(baseurl+fname+"/"+aname);

	var el=document.getElementById(el_id);
	var input_obj={};
	input_obj['p_id']=p_id;
	
	var msg_html = callHTTPFunction('/jsp/xins/adprod.jsp',input_obj);
	el.innerHTML = msg_html;
	toggleDiv('sc_d');
	
	updateValue2AD(p_id);

	return false;

}
var poc_t_price=0;
function updateValue2AD(p_id){
	var one_i=poc_product[p_id];
	document.getElementById('p_id').innerHTML=one_i['p_id'];
	var img_p=document.getElementById('p_img');
	img_p.setAttribute("src", "/DuKe/images/xins/product/"+one_i['p_id']+".jpg");	
	document.getElementById('p_name').innerHTML=one_i['p_name'];
	document.getElementById('p_price').innerHTML=one_i['price'];
	var p_tmp=Number(one_i['price']);
	var p_tax=p_tmp*0.1;
	var p_total_price=p_tmp*1.1;
	document.getElementById('p_tax').innerHTML=p_tax;
	document.getElementById('p_total_price').innerHTML=p_total_price;
	poc_t_price=p_total_price;
	
}



function oneclickPayBill(msg) {
	sendSAmsg(msg, "Visa");
	var elt_p = document.getElementById("paybill_p");
	elt_p.innerHTML='话费已交';
	elt_p.onclick = null;
}

function oneclickPayC(msg) {
	sendSAmsg(msg, "Visa");
	//var elt_p = document.getElementById("paybill_p");
	//elt_p.innerHTML='话费已交';
	//elt_p.onclick = null;
}

function oneclickCP() {
	var element_msg = document.getElementById("container_main");
	
	var cur_msg=creatDilog4Sys('020','Robot');
	element_msg.appendChild(cur_msg);
	var tem_e=document.getElementById("container_main_con");
    if(tem_e)     tem_e.scrollTop = tem_e.scrollHeight;

}

function oneclickChangeCredit(msg) {
	onclick = sendSAmsg(msg, "Visa","",'changeCardLimit','1');
	//onclick = sendFLmsgRich(msg, "Visa","",'changeCardLimit','1');
	// sendSAmsgRich
	// toggleDiv('sc_d');
}

function oneclickBuy(msg) {
	onclick = sendSAmsg(msg, "Visa");
	toggleDiv('sc_d');
}

function oneclickCTC(msg) {
	onclick = sendSAmsg(msg, "CMB");
	toggleDiv('ctc_1');
}



function vc_showInverse(el) {
	var elt_A = document.getElementById(el);
	// alert(el+" : "+elt_A.style.display)
	if (elt_A.style.display == 'block')
		elt_A.style.display = 'none';
	else
		elt_A.style.display = 'block';

}


function ScrollText(oTxt,arg){
    oTxt.focus();
    var _value=parseInt(oTxt.value);
    if(arg>0){
    _value=_value+100;
    if(_value>10000) return;
    }else{
    	_value=_value-100; 
    	if(_value<0) return;
    }
    oTxt.value=_value;
    poc_data.credit=_value;     // set value
    oTxt.select();// ѡ
    
    
}

function ScrollText1(oTxt,arg){
    oTxt.focus();
    var _value=parseInt(oTxt.value);
    if(arg>0){
    _value=_value+3;
    if(_value>24) return;
    }else{
    	_value=_value-3; 
    	if(_value<3) return;
    }
    oTxt.value=_value;
    
    var mount_mon=(40000.00/oTxt.value) *1.02;
    mount_mon=mount_mon.toFixed(2);
    
    mul_ti_pay.phase=oTxt.value;
    mul_ti_pay.amount=mount_mon;
    mul_ti_pay.rate='1%';
    
    document.getElementById('note_fq').innerHTML= mount_mon;
    
    oTxt.select();// ѡ
    
}

function setCredit(el_name){
	var elt_credit = document.getElementById(el_name);
	poc_data.credit=elt_credit.value;
	
}





/**
 * @bit
 * @name dateDiff
 * @description Calculates the time difference between two date objects in the
 *              provided time unit. Rounds decimals. Supports milliseconds,
 *              seconds, minutes, hours, days, weeks, months, and years.
 * @param {Object}
 *            date1 The first date
 * @param {Object}
 *            date2 The second date
 * @param {string}
 *            unit (optional) The unit to use. Defaults to milliseconds
 * @returns {number} The time difference
 * @example ```js var date1 = new Date('July 1, 1989 09:41:00); var date2 = new
 *          Date('June 29, 2011 18:45:10');
 * 
 * dateDiff(date1, date2, 'milliseconds'); // => 694083850000 dateDiff(date1,
 * date2, 'seconds'); // => 694083850 dateDiff(date1, date2, 'minutes'); // =>
 * 11568064 dateDiff(date1, date2, 'hours'); // => 192801 dateDiff(date1, date2,
 * 'days'); // => 8033 dateDiff(date1, date2, 'weeks'); // => 1148
 * dateDiff(date1, date2, 'months'); // => 263 dateDiff(date1, date2, 'years'); // =>
 * 22
 * 
 * dateDiff(date1, date2); // => 694083850000 dateDiff('Not a date'); // =>
 * undefined (Incorrect input types) ```
 */
function dateDiff(date1, date2, unit) {
	if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
		return(undefined);
	}

	// Convert to UTC to account for DST
	var UTCdate1 = new Date(date1);
	var UTCdate2 = new Date(date2);
	UTCdate1.setMinutes(UTCdate1.getMinutes() - UTCdate1.getTimezoneOffset());
	UTCdate2.setMinutes(UTCdate2.getMinutes() - UTCdate2.getTimezoneOffset());

	// Calculate difference in milliseconds (always positive)
	var diffMilliseconds = UTCdate2.getTime() - UTCdate1.getTime();
	
	// Calculate differences for each time unit
	switch (unit) {
		case 'milliseconds':
			return diffMilliseconds;
			break;
		case 'seconds':
			var diffSeconds = Math.round(diffMilliseconds / (1000));
			return diffSeconds;
			break;
		case 'minutes':
			var diffMinutes = Math.round(diffMilliseconds / (1000*60));
			return diffMinutes;
			break;
		case 'hours':
			var diffHours = Math.round(diffMilliseconds / (1000*60*60));
			return diffHours;
			break;
		case 'days':
			var diffDays = Math.round(diffMilliseconds / (1000*60*60*24));
			return diffDays;
		case 'weeks':
			var diffWeeks = Math.round(diffMilliseconds / (1000*60*60*24*7));
			return diffWeeks;
			break;
		case 'months':
			var month1 = UTCdate1.getMonth();
			var month2 = UTCdate2.getMonth();

			var year1 = UTCdate1.getFullYear();
			var year2 = UTCdate2.getFullYear();

			var totalMonth1 = month1 + (year1*12);
			var totalMonth2 = month2 + (year2*12);

			var diffMonths = Math.round(totalMonth2 - totalMonth1);
			return diffMonths;
			break;
		case 'years':
			var year1 = UTCdate1.getFullYear();
			var year2 = UTCdate2.getFullYear();

			var diffYears = Math.round(year2-year1);
			return diffYears;
			break;

		// If no unit is passed, default to return milliseconds
		default:
			return diffMilliseconds;
	}
}

function addCp(){
	var element_msg = document.getElementById("container_main");
	var cur_msg=creatDilog4Sys('020','Robot');
	element_msg.appendChild(cur_msg);
}

function step1(num_ms) {
	  // Do some data processing here.
	  var x = 7;
	  setTimeout(function () { step2(x); }, num_ms);
	}

function step2(x) {
	++x;
	  //alert(++x); // Shows: 8
	  // Do more data processing here.
	}
function kQsubmit(){
	setTimeout(function () { 
		sendJSONMsg('Abel','@Abel;@Visa','我想购[炉匠]券。'); 
		}, 500);
	
	setTimeout(function () { 
		oneclickPayC('您选择了[炉火]餐厅，购买优惠券，请使用下面的卡片完成购买。'); 
		}, 1200);
	
	
	setTimeout(function () { 
		sendSAmsg('020', 'Robot');
		}, 1500);

	
}


function getLastElebyIDV(ele_id) {

	//var elt = document.getElementById('invoice_d');
	
	var elms = document.querySelectorAll("[id='"+ele_id+"']");
	//alert(elms.length);
	var result=null;
	if(elms) result=elms[elms.length-1];

	return result;

}

function freeze() {
	var el_b=document.getElementById("container_main_con");
	var el=document.getElementById("container_main");
	var offsets = el.getBoundingClientRect();
	var leftPos = el.offsetLeft, el = el.offsetParent;
	console.log(leftPos, el.offsetTop);
	console.log(offsets.top);
	console.log(offsets.left);
	
	el.style.position = "absolute";
	//el.scroll = "no";
	//el_b.scroll = "no";
	el_b.style["overflow-y"]="hidden";
	//el.style.position = "absolute";
	

    }


//Unfreeze page content scrolling
function unfreeze() {
    
	var el_b=document.getElementById("container_main_con");
	var el=document.getElementById("container_main");
	el.style.position = "relative";
	//el.scroll = "yes";
	//el_b.scroll = "yes";
	el_b.style["overflow-y"]="scroll";
    
}