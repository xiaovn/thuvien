function close_popup(cmd){   
    var ifr=$(cmd).parents('.highslide-header').next().find('iframe'); 
    var src=$(ifr).attr('src');  
    $(ifr).attr('path',src);
    $(ifr).attr('src','');  
    var path=$(ifr).attr('path'); 
    $(ifr).attr('src',path); 
    setTimeout(function(){
        hs.close(cmd);        
        },220);  
    return false;
}
function register(){
    var username = $("#username")
    var password = $("#password")
    var repassword = $("#repassword")
    var emailreg = $("#res_email")
    var res_name = $("#res_name")
    var sex = $("#sex").find("div[alt='true']").attr("rel")
    var day = $("#day")
    var mon = $("#mon")
    var year = $("#year")
    var showns = $("#showns").attr("alt")
    var address = $("#res_address")
    var show_address = $("#show_address").attr("alt")
    var national = $("#national")
    var res_school = $("#res_school")

    var dieukhoan = $("#dieukhoan").attr("alt")
    var code = $("#code")

    var params = {
        "user":username.val(),
        "pass" : password.val(),
        "repass" : repassword.val(),
        "email" : emailreg.val(),
        "name" : res_name.val(),
        "sex" : sex,
        "day" : day.val(),
        "mon" : mon.val(),
        "year" : year.val(),
        "showns" :showns == "true" ? 1 : 0,
        "dieukhoan" : dieukhoan,
        "code" : code.val(),
        "address" : address.val(),
        "show_address" : showns == "true" ? 1 : 0,
        "national" : national.val(),
        "res_school" : res_school.val(),
        "btnReg" : "" 
    }
    $(".res_f_note").hide()
    $(".res_f_note").removeClass("res_false")
    $(".res_input").removeClass("res_input_false")
    $.post(base_urlroot + "pages/register.php",params,function(rs){
        rs = jQuery.parseJSON(rs)
        if(rs.success_reg)
        {
            window.location.href = base_urlroot + "register_success";
        }
        reloadCapcha("#reloadCapcha");
        if(rs.erroruser)
        {
            $("#er_username").show()
            $("#er_username").addClass("res_false")
            $("#er_username").html(rs.erroruser)
            username.addClass("res_input_false")
        }
        if(rs.cuccessuser)
        {
            $("#er_username").show()
            $("#er_username").addClass("res_true")
            $("#er_username").html(rs.cuccessuser)
        }
        if(rs.errorpass)
        {
            $("#er_password").show()
            $("#er_password").addClass("res_false")
            $("#er_password").html(rs.errorpass)
            password.addClass("res_input_false")
            repassword.addClass("res_input_false")
        }
        if(rs.cuccesspass)
        {
            $("#er_password").show()
            $("#er_password").addClass("res_true")
            $("#er_password").html(rs.cuccesspass)
        }
        if(rs.erroremail)
        {
            $("#er_email").show()
            $("#er_email").addClass("res_false")
            $("#er_email").html(rs.erroremail)
            emailreg.addClass("res_input_false")
        }
        if(rs.errordieukhoan)
        {
            $("#er_dieukhoan").show()
            $("#er_dieukhoan").addClass("res_false")
            $("#er_dieukhoan").html(rs.errordieukhoan)
        }
        if(rs.errorcode)
        {
            $("#er_code").show()
            $("#er_code").addClass("res_false")
            $("#er_code").html(rs.errorcode)
            $("#code").addClass("res_input_false")
        }
        if(rs.cuccesscode)
        {
            $("#er_code").show()
            $("#er_code").addClass("res_true")
            $("#er_code").html(rs.cuccesscode)
        }
    })
    return false;       
}

function updateProfile(member_id){
    var name = $("#name");
    var email = $('#email');
    var national = $("#national");
    var address = $("#andress");
    var show_add = $("#show_add").attr('alt');
    var sex = $("#sex").find("div[alt='true']").attr("rel");
    var ngay = $("#ngay");
    var thang = $("#thang");
    var nam = $("#nam");
    var show_born = $("#show_born").attr('alt');
    var school = $("#school");

    var params = {
        "name":name.val(),
        "national" : national.val(),
        'email': email.val(),
        "address" : address.val(),
        "show_add" : show_add,
        "sex" : sex,
        "ngay" : ngay.val(),
        "thang" : thang.val(),
        "nam" : nam.val(),
        "show_born" : show_born,
        "school" :school.val(),
        "update_info" : true 
    }
    if(confirm("Bạn có chắc chắn muốn cập nhật thông tin?")){
        $.post(base_urlroot + "member/" + member_id + "/info",params,function(rs){
            rs = jQuery.parseJSON(rs)
            if(rs.result){
                $('#result_message').html(rs.message);
                $('#form_show_result').find('image').attr('src','pne_friend.png'/*tpa=http://www.thuviengiaoduc.org/images/pne_friend.png*/);

            }else{
                $('#result_message').html(rs.message);
                $('#form_show_result').find('image').attr('src','rs_note_false.png'/*tpa=http://www.thuviengiaoduc.org/images/home/rs_note_false.png*/);
            }
            $('#form_show_result').show();
            setTimeout(function () {  $('#form_show_result').hide()}, 5000);

        })
    }

    return false;       
}

function login()
{
    var user = $("#txtUser") 
    var pass = $("#txtPass")
    var passfake = $("#fakepassword")
    var ghinho = $("#ghinho").attr("alt")
    //var inputCaptcha = $("#inputCaptcha")
    var check = new Array()
    if(user.val() == "" || user.val() == "Tên đăng nhập")
    {
        user.addClass("b_error")
        //user.focus()
        check[0] = "err"
    }
    else
        { user.removeClass("b_error") }

    if(pass.val() == "" || pass.val() == "Mật khẩu")
    {
        pass.addClass("b_error")
        passfake.addClass("b_error")
        pass.focus()
        check[1] = "err"
    } 
    else
        {pass.removeClass("b_error")}
    if(check.length != 0)
    {
        var mess = $(".messLog")
        if(check[0] && check[1])
            mess.text("Bạn chưa nhập tên đăng nhập và mật khẩu")
        else if(check[0])
            mess.text("Bạn chưa nhập tên đăng nhập")
            else
                mess.text("Bạn chưa nhập mật khẩu")    
        return false;
    }
    //var attrCaptcha = "" 
    //if(inputCaptcha.attr("rel"))
        //attrCaptcha = inputCaptcha.attr("rel")
    var params = {
        user : user.val(),
        pass : pass.val(),
        ghinho : ghinho,
        //statusCaptcha : attrCaptcha,
        //captcha : $("#txtCapcha").val() 
    }    
    $.post(base_urlroot + "pages/manager.php?act=login",params,function(rs){
        if(IsJsonString(rs))
        {
            rs = jQuery.parseJSON(rs)
            user.addClass("b_error")
            pass.addClass("b_error")
            $(".messLog").text(rs.mess)
            /*if(rs.captcha)
            {
                $("#inputCaptcha").show().attr("rel","true")
                $("#rsCaptcha").html("<img id=\"chaptchaLogin\" src=\""+ base_urlroot +"/pages/captcha.php\">")
                reloadCapcha("#chaptchaLogin") 
            }*/
        }
        else
            reLoad();
    })
    return false;  
}

function make_friend_response(rid,msg,recieve_id)
{
    if(confirm('Are you sure?'))
    {
        var url="make_friend_reponse.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/make_friend_reponse.php*/;
        //xmlhttp.onreadystatechange=status_delcomment;
        $.get(url, {rid: rid, stt: msg}, function(data){
            console.log('result: ' + data);
            $result = $('#request_friend_' + rid).find('#result_message');
            sync_respond_make_friend(rid, msg,recieve_id);
            if(data == 1){
                $result.find('span img').attr('src','pne_friend.png'/*tpa=http://www.thuviengiaoduc.org/images/pne_friend.png*/);
                $result.find('.pne_friend').html('Đã trở thành bạn bè');
            }else{
                $result.find('span img').attr('src','pne_nofriend.png'/*tpa=http://www.thuviengiaoduc.org/images/pne_nofriend.png*/);
                $result.find('.pne_friend').html('Đã từ chối');
            }
            $result.show();
            $('#btnMakeFriend').hide();
            setTimeout(function(){$('#request_friend_' + rid).hide();}, 5000);
        });

    }
}
var vWin;
    function tWin() {
        if (vWin.closed) {
            document.location = document.location;
        }
        else {
            setTimeout("tWin()", 500);
        }
}
function reLoad() {
    var pos = String(l).indexOf('activenewpass');
    if(pos == -1)
        location.reload(true);
    else
        location = base_urlroot;
}
function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}
/*function IsJsonString(str) {
try {
JSON.parse(str);       
} catch (e) {
return false;
} 
return true;   
}*/
function IsJsonString(code)
{   
    if($.trim(code) == "")
    {
        return false;
    }
    try {        
        $.parseJSON(code)
    } catch (e) {
        return false;
    }
    return true;
}       
function validate_pass(string)
{
    var reg = /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])^\S+$/;
    if(string.length < 6)
        return false;			
    var rs = reg.test(string);
    return rs;
}
function reloadCapcha(idSelecter)
{
    var d = new Date ();
    var captcha = base_urlroot +"pages/captcha.php?r=" + d.getTime ();
    $(idSelecter).attr ("src", captcha);
}



//<script type="text/javascript" src="{site_url}/includes/v1/videoajax.js"></script>
var xmlhttp;
var pid = 0;
var tdimg = 'url(/images/navbut.gif)';
var ec_stt = 1;
var e_cm = 0;
var currentChar = 1;
var desid = 0;

var tdid = 0;
var newsid = 1;
var topid = 1;
var gold = 1;
var music = 1;
var ghidden = 1;
var sym_smile = 1;
var ls_bar = 1;
var mscore = 0;
var cdiem = 0;
var hoidap_sec = 10;
//-----------------------------------------

function change_music(id)
{
    var msa1 = document.getElementById('music_a1');
    var msa2 = document.getElementById('music_a2');

    if(id==1)
    {		
        msa2.style.backgroundImage = 'url(/images/bg001.gif)';
        msa1.style.backgroundColor = '#FFF';
        document.getElementById('show_music_1').style.display = 'block';
        document.getElementById('show_music_2').style.display = 'none';
    }else if(id==2)
    {
        msa1.style.backgroundImage = 'url(/images/bg001.gif)';
        msa2.style.backgroundColor = '#FFF';
        document.getElementById('show_music_1').style.display = 'none';
        document.getElementById('show_music_2').style.display = 'block';
    }
}

function test_music(id)
{
    var msa1 = document.getElementById('music_a1');
    var msa2 = document.getElementById('music_a2');

    if(id==1)
    {		
        msa2.style.backgroundColor = 'transparent';
        msa1.style.backgroundColor = '#FFF';
        document.getElementById('loibh_dich').style.display = 'block';
        document.getElementById('loibh_dientu').style.display = 'none';
    }else if(id==2)
    {
        msa1.style.backgroundColor = 'transparent';
        msa2.style.backgroundColor = '#FFF';
        document.getElementById('loibh_dich').style.display = 'none';
        document.getElementById('loibh_dientu').style.display = 'block';
    }
}

function changevideo(num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var mang = new Array();
    mang[0] = 'Ti&#7871;ng Anh giao ti&#7871;p';
    mang[1] = 'H&#7885;c v&#7899;i ng&#432;&#7901;i n&#7893;i ti&#7871;ng';
    mang[2] = 'Youtube';
    for(i=0;i<3;i++)
    {
        var str = document.getElementById("video"+(i+1));
        if((i+1)==num)
            str.innerHTML = '<b>'+mang[i]+'</b>';
        else
            str.innerHTML = mang[i];
    }
    var url="./pages/videobg.php";
    url=url+"?q="+num;
    url=url+"&sid="+Math.random();
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function show_navigation(id,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    //---------------------
    var tdbg1 = document.getElementById("tdnav"+tdid).style.backgroundImage = 'url()';
    var tdbg2 = document.getElementById("tdnav"+num).style.backgroundImage = tdimg;
    tdid = num;
    //---------------------

    //---------------------
    var url="navigation.php.htm"/*tpa=http://www.thuviengiaoduc.org/pages/modules/navigation.php*/;
    url=url+"?q="+id;
    url=url+"&i="+num;
    xmlhttp.onreadystatechange=stateChanged1;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function show_submenu(id,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if((id!='') && (num!=''))
    {
        var url="navigation.php.htm"/*tpa=http://www.thuviengiaoduc.org/pages/modules/navigation.php*/;
        url=url+"?q="+id;
        url=url+"&i="+num;
        xmlhttp.onreadystatechange=stateChanged1;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);	
    }
}
function setdefault()
{
    var tdbg1 = document.getElementById("tdnav"+tdid).style.backgroundImage = 'url()';
    var tdbg2 = document.getElementById("tdnav0").style.backgroundImage = tdimg;
    var divnav = document.getElementById("navigation").innerHTML = '';	
    tdid = 0;	
}
function show_pages(id,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="pagesvideo.php.htm"/*tpa=http://www.thuviengiaoduc.org/pages/pagesvideo.php*/;
    url=url+"?id="+id;
    url=url+"&p="+num;
    url=url+"&sid="+Math.random();
    xmlhttp.onreadystatechange=stateChanged2;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function remember_lesson(page,type)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="remember_lesson.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/remember_lesson.php*/;
    url=url+"?url="+page;
    url=url+"&type="+type;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=remember;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function remember()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("show_less_option").innerHTML=xmlhttp.responseText;
    }
}
function show_pages_jok(id,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="pagejok.php.htm"/*tpa=http://www.thuviengiaoduc.org/pages/pagejok.php*/;
    url=url+"?id="+id;
    url=url+"&p="+num;
    url=url+"&sid="+Math.random();
    xmlhttp.onreadystatechange=pagejok;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function pagejok()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("loadeps").innerHTML=xmlhttp.responseText;
    }
}
function changeback(id)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(id!=newsid)
    {
        var curdiv = document.getElementById('recent_a'+newsid);
        var newdiv = document.getElementById('recent_a'+id);

        curdiv.style.backgroundColor = 'transparent';
        //curdiv.style.borderBottom = '1px solid #FFF';

        //newdiv.style.borderBottom = '1px solid #FFF';
        newdiv.style.backgroundColor = '#FFF';

        newsid = id;
    }

    var url="newlesson.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/newlesson.php*/;
    url=url+"?id="+id;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=newlesson;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);

    //document.getElementById('aaa').style.borderBottom = '#CCC';
}
function show_test_list()
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var type = document.getElementById("select_type").value;
    var lv = document.getElementById("select_level").value;
    if(type!=0 && lv!=0)
    {
        var url="test_list.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/test_list.php*/;
        url=url+"?t="+type;
        url=url+"&l="+lv;
        url=url+"&id="+Math.random();
        xmlhttp.onreadystatechange=test_list;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);	
    }
}
function comment_filter_goldenkids(id,p,page){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var ft = document.getElementById("cm_filter_list").value;	
    var member = document.getElementById("com_search").value;
    var url="comment_filter_goldenkids.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/comment_filter_goldenkids.php*/;
    url=url+"?ft="+ft;
    url=url+"&mem="+member;
    url=url+"&page="+page;
    url=url+"&p="+p;
    url=url+"&id="+id;
    url=url+"&cid="+Math.random();
    xmlhttp.onreadystatechange=status_comment_filter;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function test_list()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("test_list").innerHTML=xmlhttp.responseText;
    }
}
//----------------------------------------
function reload_test()
{
    document.getElementById("test_main").style.display = 'block';
    document.getElementById("finish").disabled = 'true';
}
function save_score(scr,tid)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    document.getElementById('button_save').disabled = 'true';
    var url="save_score.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/save_score.php*/;
    url=url+"?scr="+scr;
    url=url+"&tid="+tid;
    xmlhttp.onreadystatechange=status_score;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_score()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("msg_score").innerHTML=xmlhttp.responseText;
    }
}
function xephang()
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    type = document.getElementById("top_type").value;
    lv = document.getElementById("top_level").value;
    var url="xephang.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/xephang.php*/;
    url=url+"?t="+type;
    url=url+"&l="+lv;
    xmlhttp.onreadystatechange=status_xephang;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_xephang()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("xephang").innerHTML=xmlhttp.responseText;
    }
}
//----------------------------------------
function add_new_comment(page){
   
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var str = document.getElementById("sendcms").value;
    //Check has chamdiem
    var score = $("#score").val()
    var paramsScore = "";
    if(score != undefined)
    {
        paramsScore = "&score=" + score + "&ChamDiem=true"; 
    }
    if(str == "Nhập nội dung phản hồi... (Bạn chỉ có 1 lần đăng phản hồi cho bài học này | Nội dung phản hồi ít nhất 10 kí tự)")
    {
        $('#show_error_msg').css('color','red').html('Bạn chưa nhập nội dung comment');
        return false;
    }
    if(str.length < 11){
        $('#show_error_msg').css('color','red').html('Nội dung phản hồi phải lớn hơn 10 kí tự');
        return false;
    }
    $('#btt_comment_submit,.boxsharefb').hide();
    if (encodeURIComponent){
        var string = encodeURIComponent(str);
    } else {
        var string = escape(str);
    }
    var url="add_new_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_new_comment.php*/;
    var params = 'url='+page+'&str='+string + paramsScore;
    if($('input#sharefeedfb').is(':checked')){
        var title = $('title').html();
        var description = $('meta[name="description"]').attr('content');
        params += '&feedfb=true&title='+title+'&descr='+description;
    }
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    xmlhttp.onreadystatechange=status_new_comment;
    xmlhttp.send(params);
    return false;
}

function status_new_comment()
{
    if (xmlhttp.readyState==4)
    {
        var result = xmlhttp.responseText;		       
        var str = result.split("_err_");                      
        if(str[1]!='')
            $('#show_error_msg').css('color','red').html(str[0]);
        else{
            $('.form_send_comment, .comment_ico_text,.vbv2_listScore').remove();
            $(".info_cus_box").html(str[0]);
            init_comment();           
        } 

    }	
}

function add_kara_comment(page)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var str = document.getElementById("add_mess").value;
    document.getElementById("add_mess").value = '';
    var score = document.getElementById("kara_score");

    if(score!=null)
        var scr=score.value;
    else
        var scr = 0;

    if (encodeURIComponent) {
        var string = encodeURIComponent(str);
    } else {
        var string = escape(str);
    }

    var url="add_kara_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_kara_comment.php*/;

    var params = 'url='+page+'&str='+string+'&scr='+scr;
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4)
        {
            document.getElementById("show_comment").innerHTML=xmlhttp.responseText;
        }	
    };
    xmlhttp.send(params);
}
function add_kara_yt(page)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var str = document.getElementById("karaoke_yt").value;

    if (encodeURIComponent) {
        var string = encodeURIComponent(str);
    } else {
        var string = escape(str);
    }

    var url="add_kara_yt.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_kara_yt.php*/;

    var params = 'url='+page+'&str='+string;
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4)
        {
            document.getElementById("display_send_record").innerHTML=xmlhttp.responseText;
        }	
    };
    xmlhttp.send(params);
}
//-------------

/*function comment_filter(id,p,page)
{
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Browser does not support HTTP Request");
return;
}
var ft = document.getElementById("cm_filter_list").value;	
var member = document.getElementById("com_search").value;
var url="comment_filter.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/comment_filter.php*/;
url=url+"?ft="+ft;
url=url+"&mem="+member;
url=url+"&page="+page;
url=url+"&p="+p;
url=url+"&id="+id;
url=url+"&cid="+Math.random();
xmlhttp.onreadystatechange=status_comment_filter;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);	

//setInterval(updateStylesheets, 1000);
}  */

// For basic communication
function comment_filter_comm(id,p,page)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var ft = document.getElementById("cm_filter_list").value;	
    var member = document.getElementById("com_search").value;
    var url="comment_filter.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/comment_filter.php*/;
    url=url+"?ft="+ft;
    url=url+"&mem="+member;
    url=url+"&page="+page;
    url=url+"&p="+p;
    url=url+"&id="+id;
    url=url+"&task=task";
    url=url+"&cid="+Math.random();
    xmlhttp.onreadystatechange=status_comment_filter;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	

    //setInterval(updateStylesheets, 1000);
}

function status_comment_filter()
{

    if (xmlhttp.readyState==4)
    {
        document.getElementById("comment_filter").innerHTML=xmlhttp.responseText;
    }
}

//-------------

function send_my_post(page,text)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var str = document.getElementById("post_text").value;

    if (encodeURIComponent) {
        var string = encodeURIComponent(str);
    } else {
        var string = escape(str);
    }

    var url="send_my_post.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/send_my_post.php*/;

    var params = 'url='+page+'&str='+string+'&text='+text;
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    xmlhttp.onreadystatechange=status_my_post;
    xmlhttp.send(params);
    document.getElementById("comment_loading").innerHTML='<img src="sending.gif"/*tpa=http://data.thuviengiaoduc.org/images/sending.gif*/ width="244" height="127" />';

    //setInterval(updateStylesheets, 1000);
}
function toeic_submit(time,stt,user_score,quiz_score)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="xml_request.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/xml_request.php*/;
    var params = '';
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    document.write('<request ver="3.0.0"><global><elapsed>'+time+'</elapsed><passed>'+stt+'</passed><user_score>'+user_score+'</user_score><quiz_score>'+quiz_score+'</quiz_score></global></request>');
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4)
        {
            document.getElementById("test_xml_div").innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.send(params);

    //setInterval(updateStylesheets, 1000);
}

function status_my_post()
{
    /*if(xmlhttp.readyState==3)
    {		
    document.getElementById("comment_loading").innerHTML='Loading...';
    document.getElementById("post_text").disabled = true;
    }*/
    if (xmlhttp.readyState==4)
    {		
        var result = xmlhttp.responseText;
        if(result.substring(0,3)=='OK_')
        {
            document.getElementById("send_form").innerHTML = '';	
        }
        document.getElementById("comment_loading").innerHTML=result.substring(3);
    }
}

//-------------

function add_blog_comment(page,blog_id,num)
{    

    //Disable active
    $('#pr_submit_post').attr("disabled", true);

    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var str = $("#pr_post_wall").val();
    $("#pr_post_wall").val('');
    if(document.getElementById("public_all").checked)
        var pub = document.getElementById("public_all").value;
    else
        var pub = document.getElementById("public_one").value;

    if (encodeURIComponent) {
        var string = encodeURIComponent(str);
    } else {
        var string = escape(str);
    }

    var url="add_blog_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_blog_comment.php*/;
    url=url+"?url="+page;
    url=url+"&bid="+blog_id;
    url=url+"&str="+string;
    url=url+"&pub="+pub;
    url=url+"&num="+num;
    xmlhttp.onreadystatechange=status_blog_comment;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);

    setTimeout(function (){
        $('#pr_submit_post').removeAttr("disabled");
        }, 5000);

    //setInterval(updateStylesheets, 1000);
}
function status_blog_comment()
{
    if (xmlhttp.readyState==4)
    {
        if(xmlhttp.responseText == 'novipkid')
             document.getElementById("comment_ico_title").innerHTML='<span style="font-size:13px;color:red">Chỉ thành viên VIP hoặc GOLDENKID mới có thể ghi lên bảng!</span>';
        else
        {
            document.getElementById("display_text_board").innerHTML=xmlhttp.responseText;
            setTimeout(function (){
            $('.pne_result_message').hide();
            }, 5000);
        }
    }
}

//-------------

function load_comment_pages(page,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="load_comment_pages.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/load_comment_pages.php*/;
    url=url+"?url="+page;
    url=url+"&p="+num;
    xmlhttp.onreadystatechange=status_comment_pages;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		
}
function load_comment_goldenkids_pages(page,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="load_comment_goldenkids_pages.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/load_comment_goldenkids_pages.php*/;
    url=url+"?url="+page;
    url=url+"&p="+num;
    xmlhttp.onreadystatechange=status_comment_pages;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		
}
//For basic communication
function load_comment_pages_comm(page,num){  
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="load_comment_pages_comm.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/load_comment_pages_comm.php*/;
    url=url+"?url="+page;
    url=url+"&p="+num;
    xmlhttp.onreadystatechange=status_comment_pages;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);  
}

function status_comment_pages()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("show_comment").innerHTML=xmlhttp.responseText;
    }
}
function load_kara_pages(page,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="load_kara_pages.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/load_kara_pages.php*/;
    url=url+"?url="+page;
    url=url+"&p="+num;
    xmlhttp.onreadystatechange=status_comment_pages;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		
}
//--------------------------------
function blog_comment_pages(page,num,blog_id,stt)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }

    var url="blog_comment_pages.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/blog_comment_pages.php*/;
    url=url+"?url="+page;
    url=url+"&bid="+blog_id;
    url=url+"&p="+num;
    url=url+"&stt="+stt;
    xmlhttp.onreadystatechange=status_blog_pages;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		
}
function status_blog_pages()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("display_text_board").innerHTML=xmlhttp.responseText;
    }
}
function blog_comment_owner(page,num,blog_id,mem_id)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }

    var url="blog_comment_owner.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/blog_comment_owner.php*/;
    url=url+"?url="+page;
    url=url+"&bid="+blog_id;
    url=url+"&mid="+mem_id;
    url=url+"&p="+num;
    xmlhttp.onreadystatechange=status_blog_owner;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		
}
function status_blog_owner()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("display_owner_pages").innerHTML=xmlhttp.responseText;
    }
}
//---------------------------------
function updateStylesheets() {
    var i,a,s;
    a=document.getElementsByTagName('link');
    for(i=0;i<a.length;i++) {
        s=a[i];
        if(s.rel.toLowerCase().indexOf('stylesheet')>=0&&s.href) {
            var h=s.href.replace(/(&|\\?)forceReload=d /,'');
            s.href=h+(h.indexOf('?')>=0?'&':'?')+'forceReload='+(new Date().valueOf());
        }
    }
}

function cance_edit_comment(id)
{
    document.getElementById('member_comment_'+id).innerHTML = document.getElementById('edit_mess_'+id).value;
    ec_stt = 1;
}

function edit_comment(id,stt)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(stt=='load')
    {
        if(ec_stt)
        {
            var string = '';
            ec_stt = 0;
        }

    }else if(stt=='process')
    {
        var contentcm = document.getElementById('edit_mess_'+id).value;
        if (encodeURIComponent) {
            var string = encodeURIComponent(contentcm);
        } else {
            var string = escape(contentcm);
        }
    }
    e_cm = id;

    var url="edit_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/edit_comment.php*/;

    var params = 'id='+id+'&stt='+stt+'&str='+string;
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length",params.length);
    xmlhttp.setRequestHeader("Connection","close");
    xmlhttp.onreadystatechange=status_editcomment;
    xmlhttp.send(params);
}
function status_editcomment()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("member_comment_"+e_cm).innerHTML=xmlhttp.responseText;
    }
}

//Delete comment
function del_comment(id)
{
    if(!confirm('Are you sure delete this comment?'))
        return false;

    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="del_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/del_comment.php*/;
    url=url+"?id="+id;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var rt = xmlhttp.responseText;            
            $('#li_comm_'+id).remove();       
        }
    }  	
    return false;
}

// Delete comment of basic communication
function del_comment_comm(id,task)
{
    if(!confirm("Are you sure?"))
        return false;

    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="del_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/del_comment.php*/;
    url=url+"?id="+id+"&task="+task;   

    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);		    

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var rt = xmlhttp.responseText;
            $('#li_comm_'+id).remove();       
        }
    }         
    return false;
}

function del_kara_comment(id,oid,post)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="del_kara_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/del_kara_comment.php*/;
    url=url+"?id="+id;
    url=url+"&oid="+oid;
    url=url+"&pid="+post;
    //xmlhttp.onreadystatechange=status_delcomment;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	

    document.getElementById('member_comment_'+id).innerHTML = 'Comment was deleted';
}
//----------------------------------------

//---------------------------------------------------------
function del_followed_member(fid,bid)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(confirm('Are you sure?'))
    {
        var url="del_followed_member.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/del_followed_member.php*/;
        url=url+"?fid="+fid;
        url=url+"&bid="+bid;
        //xmlhttp.onreadystatechange=status_delcomment;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);	

        document.getElementById('request_friend_'+fid).innerHTML = '';
        document.getElementById('request_friend_'+fid).style.display = 'none';
    }
}


//---------------------------------------------------------
function popup_test(url,id)
{
    var new_win = window.open(url,'new_window','width=500, height=600');
    add_test_view(id);
}
//----------------------------------------
function del_blog_comment(page,blog_id,cm_id,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(confirm('Are you sure?'))
    {
        var url="del_blog_comment.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/del_blog_comment.php*/;
        url=url+"?url="+page;
        url=url+"&blog_id="+blog_id;
        url=url+"&cmid="+cm_id;
        url=url+"&num="+num;
        xmlhttp.onreadystatechange=status_del_blog_comment;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);
    }
}
function status_del_blog_comment()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("display_text_board").innerHTML=xmlhttp.responseText;
    }
}
//---------------------------------
function report_spam(id,mid)
{
    if(!confirm('Are you sure?'))
        return false;
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="report_spam.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/report_spam.php*/;
    url=url+"?mid="+mid;
    e_cm = id;
    xmlhttp.onreadystatechange=status_report_spam;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
    return false;
}
function status_report_spam()
{
    if (xmlhttp.readyState==4)
    {		
        document.getElementById("comm_error_"+e_cm).innerHTML=xmlhttp.responseText;
        setTimeout(function(){
            document.getElementById("comm_error_"+e_cm).innerHTML='';
            },6000)
    }
}
//----------------------------------------


function show_des(id)
{
    if(!desid && id)
    {
        var desshow = document.getElementById('description_'+id);
        desshow.style.display = 'block';
        desid = id;
    }else if(id){
        var desshow1 = document.getElementById('description_'+desid);
        desshow1.style.display = 'none';	
        var desshow2 = document.getElementById('description_'+id);
        desshow2.style.display = 'block';
        desid = id;
    }else{
        var desshow = document.getElementById('description_'+desid);
        desshow.style.display = 'none';
        desid = 0;
    }
}
//----------------------------------------
function change_newspic(type)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(type=='news')
    {
        document.getElementById("news_td").style.backgroundImage = news1;	
    }else if(type=='pic')
    {
        document.getElementById("news_td").style.backgroundImage = news2;
    }
    var url="learn_news.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/learn_news.php*/;
    url=url+"?t="+type;
    url=url+"&cid="+Math.random();
    xmlhttp.onreadystatechange=status_learnnews;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_learnnews()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("news_pic").innerHTML=xmlhttp.responseText;
    }
}
//----------------------------------------
function add_test_view(id)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="add_test_view.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_test_view.php*/;
    url=url+"?id="+id;
    url=url+"&cid="+Math.random();
    xmlhttp.onreadystatechange=status_addtestview;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_addtestview()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("test_view").innerHTML=xmlhttp.responseText;
    }
}
//----------------------------------------
function settingms(str)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="settingms.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/settingms.php*/;
    url=url+"?v="+str;
    url=url+"&id="+Math.random();
    xmlhttp.onreadystatechange=status_ms;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_ms()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("tuychinhnhac").innerHTML=xmlhttp.responseText;
    }
}
//-----------------------------------------------
function forum_new_post()
{
    //alert('smb');
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        //alert ("Browser does not support HTTP Request");
        return;
    }

    var url="stats.php.htm"/*tpa=http://www.thuviengiaoduc.org/pages/modules/stats.php*/;
    url=url+"?sid="+Math.random();
    xmlhttp.onreadystatechange=forum_new;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function forum_new()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("new_post_forum").innerHTML=xmlhttp.responseText;
    }
}

function load_gold_lesson(id,gtype,num)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        //alert ("Browser does not support HTTP Request");
        return;
    }

    if(num!=gold)
    {
        var url="http://www.thuviengiaoduc.org/pages/modules/load_gold_lesson.php";
        url=url+"?id="+id;
        url=url+"&type="+gtype;
        url=url+"&stt="+num;
        url=url+"&sid="+Math.random();
        xmlhttp.onreadystatechange=status_gold;
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);
        gold = num;
    }
}
function status_gold()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("lesson_show_part").innerHTML=xmlhttp.responseText;
    }
}
function lesson_bar()
{
    if(ls_bar)
    {
        document.getElementById("jGlide_001").style.display = "block";	
        ls_bar = 0;
    }else{
        document.getElementById("jGlide_001").style.display = "none";	
        ls_bar = 1;
    }
}

/*function insertAtCursor(myField, myValue)
{	
if(sym_smile<4)
{
//IE support
if (document.selection)
{
myField.focus();
sel = document.selection.createRange();
sel.text = myValue;
}
//MOZILLA/NETSCAPE support
else if (myField.selectionStart || myField.selectionStart == '0')
{
var startPos = myField.selectionStart;
var endPos = myField.selectionEnd;
myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
} else {
myField.value += myValue;
}
sym_smile++;
}
}*/

function insertAtCursor(myField,mySymbol,myValue)
{	
    var contentCm = myField.value;
    if(contentCm == "Nhập nội dung phản hồi... (Bạn chỉ có 1 lần đăng phản hồi cho bài học này | Nội dung phản hồi ít nhất 10 kí tự)")
    {
        myField.focus()
        myField.value = "" 
    }
    var ar = contentCm.split(":b");
    if(ar.length > 0)
        sym_smile = ar.length;

    if(contentCm == "<br>")
    {
        myField.value = "";
        sym_smile = 0;
    }
    if(contentCm.substring(contentCm.length - 4,contentCm.length) == "<br>")
    {
        myField.value = contentCm.substring(0,contentCm.length - 4);  
    }
    if(sym_smile<4)
    {
        //IE support
        if (document.selection)
        {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = mySymbol;
        }
        //MOZILLA/NETSCAPE support
        else if (myField.selectionStart || myField.selectionStart == '0')
        {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            myField.value = myField.value.substring(0, startPos) + mySymbol + myField.value.substring(endPos, myField.value.length);
        } else {
            myField.value += mySymbol;
        }
        sym_smile++;
    }
}



function display_class(id)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="display_class.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/display_class.php*/;
    url=url+"?id="+id;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=status_class;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_class()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("dispay_class").innerHTML=xmlhttp.responseText;
    }
}
//-----------------------------------------------

function check_forgot_pass()
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }

    var fg_email = document.getElementById("fg_email").value;
    var fg_code = document.getElementById("fg_maso").value;

    alert('smb'+fg_email);

    if (encodeURIComponent) {
        email = encodeURIComponent(email);
    } else {
        email = escape(email);
    }

    var url="forgotpass.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/forgotpass.php*/;
    url=url+"?email="+email;
    url=url+"&code="+code;
    xmlhttp.onreadystatechange=status_check_forgot;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	

    //setInterval(updateStylesheets, 1000);
}
function status_check_forgot()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("forgot_pass").innerHTML=xmlhttp.responseText;
    }
}

//-----------------------------------------------

function change_kids_img(pos,stt,num)
{
    var golden_first = Array('goden_kids_05.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_05.gif*/,'goden_kids_06.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_06.gif*/,'goden_kids_07.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_07.gif*/);
    var golden_last = Array('goden_kids_1.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_1.gif*/,'goden_kids_2.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_2.gif*/,'goden_kids_3.gif'/*tpa=http://www.thuviengiaoduc.org/images/child/goden_kids_3.gif*/);

    if(stt)
    {
        document.getElementById('golden_kids_level_'+num).src = golden_last[num];
        document.getElementById('golden_kids_'+pos+'_hidden_'+(stt-1)).style.display = 'none';
        document.getElementById('golden_kids_'+pos+'_hidden_'+stt).style.display = 'block';
        currentChar=1;
        typing(pos,stt);
    }else{
        document.getElementById('golden_kids_level_'+num).src = golden_first[num];
        document.getElementById('golden_kids_'+pos+'_hidden_'+(stt+1)).style.display = 'none';
        document.getElementById('golden_kids_'+pos+'_hidden_'+stt).style.display = 'block';
    }
}

function typing(pos,stt)
{
    var text = '';

    if(pos=='left')
        text = 'Golden Kids - Tr&igrave;nh &#273;&#7897; 1: &#272;&acirc;y l&agrave; tr&igrave;nh &#273;&#7897; d&agrave;nh cho c&aacute;c b&eacute; m&#7899;i b&#7855;t &#273;&#7847;u l&agrave;m quen v&#7899;i ti&#7871;ng Anh.';
    else if(pos=='midd')
        text = 'Golden Kids - Tr&igrave;nh &#273;&#7897; 2: &#7902; tr&igrave;nh &#273;&#7897; n&agrave;y c&aacute;c b&eacute; s&#7869; &#273;&#432;&#7907;c h&#7885;c c&aacute;c b&agrave;i h&#7885;c t&#432;&#417;ng &#273;&#432;&#417;ng v&#7899;i ch&#432;&#417;ng tr&igrave;nh l&#7899;p 1.';
        else
            text = 'Golden Kids - Tr&igrave;nh &#273;&#7897; 3: &#7902; tr&igrave;nh &#273;&#7897; n&agrave;y c&aacute;c b&eacute; s&#7869; &#273;&#432;&#7907;c h&#7885;c c&aacute;c b&agrave;i h&#7885;c t&#432;&#417;ng &#273;&#432;&#417;ng v&#7899;i ch&#432;&#417;ng tr&igrave;nh l&#7899;p 2.';

    var dest=document.getElementById('golden_kids_'+pos+'_hidden_'+stt);
    if (dest)
    {
        dest.innerHTML='<div class="hidtext">'+text+'</div>';
    }
}

function show_golden(id)
{
    //if(id!=ghidden)
    //{
    var golden_id = document.getElementById('gold_nav_'+id);
    golden_id.style.backgroundImage = 'url(/images/gold/gold_select_9.gif)';
    document.getElementById('hidden_gold_'+id).style.display = 'block';

    if(ghidden!=id)
    {
        document.getElementById('gold_nav_'+ghidden).style.backgroundImage = 'url(/images/gold/gold_select_09.gif)';
        document.getElementById('hidden_gold_'+ghidden).style.display = 'none';
    }
    ghidden = id;
    //}
}
//----------------------------------------------
function add_mem_score(mid,cid,stt)
{
    if(!confirm('Are you sure?'))
        return false;
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="add_mem_score.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/add_mem_score.php*/;
    url=url+"?mid="+mid;
    url=url+"&stt="+stt;
    url=url+"&cid="+cid;
    url=url+"&sid="+Math.random();
    mscore = mid;
    comm_id = cid;
    xmlhttp.onreadystatechange=stt_mem_score;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
    return false;
}
function stt_mem_score()
{	
    if (xmlhttp.readyState==4)
    {
        document.getElementById("dthanhtich"+comm_id).innerHTML='• Điểm thành tích: '+xmlhttp.responseText;        
        document.getElementById("comm_error_"+comm_id).innerHTML='Cập nhật thành công';
        setTimeout(function(){
            document.getElementById("comm_error_"+comm_id).innerHTML='';
            },3000)
    }
}
//-----------
function view_visiting(pid)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="view_visiting.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/view_visiting.php*/;
    url=url+"?pid="+pid;
    url=url+"&sid="+Math.random();
    mscore = pid;
    xmlhttp.onreadystatechange=stt_view_visiting;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function stt_view_visiting()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("visiting_"+mscore).innerHTML=xmlhttp.responseText;
    }
}
//-----------show last lesson was viewed--------
function show_last_view()
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="show_last_view.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/show_last_view.php*/;
    xmlhttp.onreadystatechange=status_last_view;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_last_view()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("jGM_tile_jGlide_001_2").innerHTML=xmlhttp.responseText;
    }
}
//--------------------------------
function chamdiem(mid,id,tid,stt)
{
    if(stt == 'delete'){
        if(!confirm('Are you sure?'))
            return false;   
    } 
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }

    if(stt=='submit' || stt=='update')
    {
        var diemhv = document.getElementById('diemhv_'+id).value;
        var nhanxet = document.getElementById('nhanxet_'+id).value;
        if (encodeURIComponent) {
            var string = encodeURIComponent(nhanxet);
        } else {
            var string = escape(nhanxet);
        }
    }else{
        var diemhv = '';
        var string = '';
    }

    cdiem = id;

    var url="chamdiem.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/chamdiem.php*/;
    url=url+"?mid="+mid;
    url=url+"&id="+id;
    url=url+"&tid="+tid;
    url=url+"&diem="+diemhv;
    url=url+"&nx="+string;
    url=url+"&stt="+stt;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=status_chamdiem;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
    return false;
}
function status_chamdiem()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("chamdiem_"+cdiem).innerHTML=xmlhttp.responseText;
    }
}
//--------------------Hoi-Dap--------------------------------------------------------

//----------- Spam -------------
function hoidap_spam(id,mid)
{
    if(!confirm('Are you sure?')) return false;
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="report_spam.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/report_spam.php*/;
    url=url+"?mid="+mid;
    e_cm = id;
    xmlhttp.onreadystatechange=status_hoidap_spam;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

function status_hoidap_spam()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("report_spam_"+e_cm).innerHTML=xmlhttp.responseText;
    }
}

function hoidap_submit(types,pg,id,power)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var string = '';
    if(types=='submit')
    {
        var hoitext = document.getElementById("hoidap_text").value;
        document.getElementById("hoidap_text").value = '';
        if(!power)
        {
            document.getElementById("show_hd_form").style.display = 'none';
            document.getElementById("hidden_hd_form").style.display = 'block';
        }
    }else if(types=='answer_show'||types=='answer_noanswer'||types=='answer_myquestion')
    {
        var hoitext = document.getElementById("hoidap_answer_"+id).value;	
    }
    if (encodeURIComponent) {
        var string = encodeURIComponent(hoitext);
    } else {
        var string = escape(hoitext);
    }
    var url="hoidap_submit.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/hoidap_submit.php*/;
    url=url+"?str="+string;
    url=url+"&type="+types;
    url=url+"&p="+pg;
    url=url+"&id="+id;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=status_hoidap;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function status_hoidap()
{	        
    if (xmlhttp.readyState==4)
    {
        var result = xmlhttp.responseText; 
        var arr = result.split('ta123member'); 
        if(arr[0] == 'chepphat'){            
            if(arr[2]){
                document.getElementById("hoidap_answer_"+arr[2]).value= "Bạn còn "+arr[1]+" ngày không được đăng hỏi - đáp vì lý do Spam!";                    
            }else{
                document.getElementById("hoidap_text").value= "Bạn còn "+arr[1]+" ngày không được đăng hỏi - đáp vì lý do Spam!";                
            } 
        }else if(arr[0] == 'script'){                        
            if(arr[1]){
                document.getElementById("hoidap_answer_"+arr[1]).value= "Nội dung bạn nhập không phù hợp!";                
            }else{
                document.getElementById("hoidap_text").value= "Nội dung bạn nhập không phù hợp!";
            } 
        }else{
            document.getElementById("show_hoi_dap").innerHTML=xmlhttp.responseText;
        }    
    }
}

function display_answer_form(dptype,id,stype,stt_ans,pg)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(dptype=='close'){
        document.getElementById("add_answer_"+id).innerHTML = '';
    }else if(dptype=='open'){
        if(cdiem==id)
        {
            cdiem = 1;
            document.getElementById("add_answer_"+id).innerHTML = '';
        }else{
            cdiem = id;
            mscore = id;
            var url="display_answer_form.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/display_answer_form.php*/;
            url=url+"?type="+dptype;
            url=url+"&id="+id;
            url=url+"&stype="+stype;
            url=url+"&stt="+stt_ans;
            url=url+"&pg="+pg;
            url=url+"&ids="+Math.random();
            xmlhttp.onreadystatechange=status_answer_form;
            xmlhttp.open("GET",url,true);
            xmlhttp.send(null);
        }
    }
}
function status_answer_form()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("add_answer_"+mscore).innerHTML=xmlhttp.responseText;
    }
}
function hoidap_vote(stt,id,mid)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url="hoidap_vote.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/hoidap_vote.php*/;
    url=url+"?stt="+stt;
    url=url+"&id="+id;
    url=url+"&mid="+mid;
    url=url+"&ids="+Math.random();
    mscore = id;
    xmlhttp.onreadystatechange=status_hd_vote;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);	
}
function status_hd_vote()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("hoidap_show_vote_"+mscore).innerHTML=xmlhttp.responseText;
    }
}
function hd_teacher_answer(id,stt,type)
{
    if(stt=='open')
    {
        if(type=='add')
            document.getElementById("teach_"+id).innerHTML = '<textarea name="hoidap_form'+id+'" id="hoidap_form_'+id+'" cols="45" rows="5"></textarea><br/><input type="button" name="answer_hoidap" value="OK" onclick="teacher_send_hd('+id+',\''+type+'\');"><input type="button" name="close_hoidap" value="Close" onclick="hd_teacher_answer('+id+',\'close\',\''+type+'\');">';
        else if(type=='edit'){
            xmlhttp=GetXmlHttpObject();
            if (xmlhttp==null)
            {
                alert ("Browser does not support HTTP Request");
                return;
            }
            var url="teacher_send_hd.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/teacher_send_hd.php*/;
            url=url+"?id="+id;
            url=url+"&str=";
            url=url+"&type="+type;
            url=url+"&ids="+Math.random();
            xmlhttp.onreadystatechange=function(){
                if (xmlhttp.readyState==4)
                {
                    document.getElementById("teach_"+id).innerHTML=xmlhttp.responseText;
                }	
            }
            xmlhttp.open("GET",url,true);
            xmlhttp.send(null);
        }
    }else if(stt=='close'){
        if(type=='add')
            document.getElementById("teach_"+id).innerHTML = '<a href="javascript:;" onclick="hd_teacher_answer('+id+',\'open\',\''+type+'\');">&raquo; Answer</a>';	
        else if(type=='edit')
            document.getElementById("teach_"+id).innerHTML = '<span style="color:#F30">Replied.</span> <a href="javascript:;" onclick="hd_teacher_answer('+id+',\'open\',\'edit\');">&raquo; Edit</a> <a href="javascript:;" onclick="hd_teacher_answer('+id+',\'open\',\'delete\');">&raquo; Delete</a>';
    }else if(stt=='delete'){
        xmlhttp=GetXmlHttpObject();
        if (xmlhttp==null)
        {
            alert ("Browser does not support HTTP Request");
            return;
        }
        var url="teacher_send_hd.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/teacher_send_hd.php*/;
        url=url+"?id="+id;
        url=url+"&str=";
        url=url+"&type="+type;
        url=url+"&ids="+Math.random();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4)
            {
                document.getElementById("teach_"+id).innerHTML=xmlhttp.responseText;
            }	
        }
        xmlhttp.open("GET",url,true);
        xmlhttp.send(null);	
    }
}
function teacher_send_hd(id,type)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var hdstr = document.getElementById("hoidap_form_"+id).value;
    if (encodeURIComponent) {
        var string = encodeURIComponent(hdstr);
    } else {
        var string = escape(hdstr);
    }
    var url="teacher_send_hd.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/teacher_send_hd.php*/;
    url=url+"?id="+id;
    url=url+"&str="+string;
    url=url+"&type="+type;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4)
        {
            document.getElementById("teach_"+id).innerHTML=xmlhttp.responseText;
        }	
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function blog_image(id,type,stt,encode)
{
    if(stt=='upload')
        document.getElementById("blog_images_frame").innerHTML='<iframe src="http://upload.thuviengiaoduc.org/blog_image.php?mid='+id+'&type='+type+'&tb='+encode+'" width="560" height="100" frameborder="0" scrolling="auto"></iframe>';
    else if(stt=='gallery')
        document.getElementById("blog_images_frame").innerHTML='<iframe src="http://upload.thuviengiaoduc.org/blog_gallery.php?mid='+id+'&type='+type+'&tb='+encode+'" width="560" height="155" frameborder="0" scrolling="no"></iframe>';
}
//----------------------------------
function changetop(id)
{
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    if(id!=topid)
    {
        var curdiv = document.getElementById('top_a'+topid);
        var newdiv = document.getElementById('top_a'+id);

        curdiv.style.backgroundImage = 'url(/images/bg001.gif)';
        newdiv.style.backgroundInage = 'url()';

        topid = id;
    }

    var url="topmember.php.htm"/*tpa=http://www.thuviengiaoduc.org/mod/topmember.php*/;
    url=url+"?id="+id;
    url=url+"&ids="+Math.random();
    xmlhttp.onreadystatechange=topmember;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);

    //document.getElementById('aaa').style.borderBottom = '#CCC';
}
function topmember()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("show_top_member").innerHTML=xmlhttp.responseText;
    }
}
//-----------------------------------------------
function newlesson()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("danhsachbh").innerHTML=xmlhttp.responseText;
    }
}
function stateChanged()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("loadingvideo").innerHTML=xmlhttp.responseText;
    }
}
function stateChanged1()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("navigation").innerHTML=xmlhttp.responseText;
    }
}
function stateChanged2()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("loadeps").innerHTML=xmlhttp.responseText;
    }
}
function GetXmlHttpObject()
{
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject)
    {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}
var dolphintabs={
    subcontainers:[], 
    last_accessed_tab:null,

    revealsubmenu:function(curtabref){
        this.hideallsubs()
        if (this.last_accessed_tab!=null)
            this.last_accessed_tab.className=""
        if (curtabref.getAttribute("rel")) //If there's a sub menu defined for this tab item, show it
            document.getElementById(curtabref.getAttribute("rel")).style.display="block"
        curtabref.className="current"
        this.last_accessed_tab=curtabref
    },

    hideallsubs:function(){
        for (var i=0; i<this.subcontainers.length; i++)
            document.getElementById(this.subcontainers[i]).style.display="none"
    },


    init:function(menuId, selectedIndex){
        var tabItems=document.getElementById(menuId).getElementsByTagName("a")
        for (var i=0; i<tabItems.length; i++){
            if (tabItems[i].getAttribute("rel"))
                this.subcontainers[this.subcontainers.length]=tabItems[i].getAttribute("rel") //store id of submenu div of tab menu item
            if (i==selectedIndex){ //if this tab item should be selected by default
                tabItems[i].className="current"
                this.revealsubmenu(tabItems[i])
            }
            tabItems[i].onmouseover=function(){
                dolphintabs.revealsubmenu(this)
            }
        } //END FOR LOOP
    }

}

