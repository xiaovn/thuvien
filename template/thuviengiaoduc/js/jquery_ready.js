hs.graphicsDir = 'http://www.thuviengiaoduc.org/highslide/graphics/';
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';
/**libs**/
var l = window.location;
var base_urlroot = l.protocol + "//" + l.host + "/";
var prev_element = null;
var ubanPlayer_instance = null;//Singleton ubanPlay;
var isIOS = false;

$(document).ready(function(){
    //Show captcha
    if(getCook("nElog") >= 3){
        $("#rsCaptcha").html("<img id=\"chaptchaLogin\" src=\""+ base_urlroot +"/pages/captcha.php\">")
        $("#inputCaptcha").show().attr("rel","true")
    }        
    //Global
    var path = location.pathname
    $("input[type=image]").css({border:"none"})
    var obj = new Object()
    obj.margin_left = null;
    obj.margin_right = null;
    obj.width_bd = null;
    obj.heaight = null;
    obj.ac = null;

    obj.margin = function(){
        var width_bd = $("body").width()
        var margin = (100 - (1000*100)/ width_bd)
        obj.margin_left = Math.round(margin/2);
        obj.margin_right = obj.margin_left;
        obj.width_bd = width_bd;

        $("#contents").css("left",obj.margin_left + "%")
        $("#contents").css("right",obj.margin_right + "%")
    }

    obj.strpos = function (haystack, needle, offset) {
        var i = (haystack + '').indexOf(needle, (offset || 0));
        return i === -1 ? false : i;
    }

    obj.descript_input = function(field,text){
        $(field).click(function(){            
            if($(this).val() == "" || $(this).val() == text)
                $(this).val("")
        })
        $(field).blur(function(){
            if($(this).val() == "")
                $(this).val(text)
        }) 
    }

    //obj.margin()       
    /*window.onresize = function() {
    obj.margin()
    }*/

    $(".menus ul li:first img").hover(function(){
        $(this).attr("src","/images/home/bg_menu_left.png")
        },function(){
            $(this).attr("src","/images/home/bg_menu_left_hover.png") 
    })

    //Find active menu current
    $(".menus ul li[title]").each(function(){
        //Active menu has reload
        if($(this).find("a:first-child").attr("href") == l)
        {
            $(".home a").addClass("active_home");
            $(this).addClass("hover_mn_new")
            $(this).find("div[id]").html("<div class='arrow'></div>")
        }
        else
        {
            $(this).find("a").each(function(){
                if($(this).attr("href") == l)
                {
                    $(".home a").addClass("active_home");
                    if($(this).parent().parent().parent().parent().attr("rel") == "sub_3")
                        var root = $(this).parent().parent().parent().parent().parent().parent().parent().parent()
                    else
                        var root = $(this).parent().parent().parent().parent().parent()
                    root.addClass("hover_mn_new")
                    root.find("div[id]").html("<div class='arrow'></div>")
                }
            })
        }   
        if(obj.strpos($(this).attr("class"),"hover_mn_new") != 0) 
        {
            $(this).attr("ac","true")
            obj.ac = "exits_current"
            $(".home a").addClass("active_home");
            $(this).find("div[id]").html("<div class='arrow'></div>")
        }
    })

    var height_defauls
    $(".menus ul li[title]").hover(function(){      
        height_defauls = $(this).find("div:first").height()
        $("li[rel=sub_3]").removeClass("acti_sub3").parent().parent().parent().css({"width":"210px"})        
        $(".menus ul li[title]").removeClass("hover_mn_new")
        $(".home a").addClass("active_home")
        $(this).addClass("hover_mn_new")
        $(this).find("div[id=arrow]").html("")
        $(".menus ul li[ac=true]").find("div[id]").html("")
        //Them chi muc        
        $(this).find("div[id=arrow]").html("<div class='arrow'></div>")
        var sub = $(this).find("div[class='sub_mn shadow']")
        sub.show().stop()
        },function(){
            $(this).find("div:first").css("height",height_defauls)        
            $(this).find("div[id=arrow]").html("")
            $(".menus ul li[ac=true]").find("div[id]").html("") 
            if(obj.ac != null)
            {
                $(this).removeClass("hover_mn_new")   
                $(".menus ul li[ac=true]").addClass("hover_mn_new")            
                $(".menus ul li[ac=true]").find("div[id]").html("<div class='arrow'></div>")
            }
            else
            {
                $(".home a").removeClass("active_home");
                $(this).removeClass("hover_mn_new")  
            }
            $(this).find("div[class='sub_mn shadow']").hide().stop()
    })   
    $(".col_sub li[rel=sub_2]").hover(function(){
        $(".sub_3").hide()
        $("li[rel=sub_3]").removeClass("acti_sub3")
        $(this).parent().parent().parent().stop().animate({"width":"210px","height":height_defauls,"margin-left":0},80)

    })
    $(".col_sub li[rel=sub_3]").hover(function(){     
        $(this).addClass("acti_sub3")
        $(this).find("div").show()
        var height_sub3 = $(this).find("div").height()
        var rSub3 = $(this).parent().parent().parent();
        if(height_sub3 > height_defauls)
        {
            rSub3.stop().animate({"width":rSub3.attr("w"),"height":height_sub3 + 30,"margin-left":-91},80)                     
        }   
        else
        {
            if(rSub3.attr("s") == "true")
                rSub3.stop().animate({"width":rSub3.attr("w"),"margin-left":-91},80)
            else
                rSub3.stop().animate({"width":rSub3.attr("w")},80)     
        } 

    })
    $(".col_sub li:last-child,.sub_mn div:last-child,.des_one li:last-child,.new4f li:last-child,.overview li:last-child,.nano .content li:last-child,.lik_baihoc_new div.itemLamBai:last-child,.hld2_tch_left div:last-child").addClass("last_des")

    //scrollbar
    $(".nano").nanoScroller();
    $(document).ajaxComplete(function(){
        $(".nano").nanoScroller();
        $(".col_sub li:last-child,.sub_mn div:last-child,.des_one li:last-child,.new4f li:last-child,.overview li:last-child,.nano .content li:last-child").addClass("last_des") 
    })
    $(".kids li a img").hover(function(){
        var alt = $(this).attr("alt");
        $(this).attr("src","/images/home/kids_level"+ alt +"_icon_hover.jpg")
        },function(){
            var alt = $(this).attr("alt"); 
            $(this).attr("src","/images/home/kids_level"+ alt +"_icon_normal.jpg") 
    })

    $(".class li a img").hover(function(){
        var alt = $(this).attr("alt");
        $(this).attr("src","/images/home/lop"+ alt +"_hover.jpg")
        },function(){
            var alt = $(this).attr("alt"); 
            $(this).attr("src","/images/home/lop"+ alt +"_normal.jpg") 
    })
    $(".des_two ul li").hover(function(){
        var alt = $(this).find("div[alt]").attr("alt")
        $(this).find("div[alt]").css({"background":"url(/images/home/box_"+ alt +"_hover.jpg) 0 0 no-repeat"})
        $(this).find("a").css("color","#CD6C03")
        },function(){
            var alt = $(this).find("div[alt]").attr("alt")
            $(this).find("div[alt]").css({"background":"url(/images/home/box_"+ alt +".jpg) 0 0 no-repeat"})
            $(this).find("a").css("color","#474646")
    })

    $(".info_cont_one ul li").hover(function(){
        $(this).css({"background":"url(/images/home/n1_hover.jpg) center left no-repeat"})
        },function(){
            $(this).css({"background":"url(/images/home/n1_normal.jpg) center left no-repeat"})
    })

    var h 
    var s 
    $(".yt li").hover(function(){

        h = $(this).find("img").attr("hover") 
        s = $(this).find("img").attr("src")
        $(this).find("img").attr("src",h)
        $(this).find("a").css("color","#CD6C03")
        },function(){
            $(this).find("img").attr("src",s)
            $(this).find("a").css("color","#474646")  
    })

    $(".share a").hover(function(){
        h = $(this).find("img").attr("hover")        
        s = $(this).find("img").attr("src")
        $(this).find("img").attr("src",h)
        },function(){
            $(this).find("img").attr("src",s)
    })

    obj.descript_input(".input_search","Tìm kiếm bài học")
    obj.descript_input(".input_reg_news","Email đăng ký nhận bài học mới")
    obj.descript_input(".pne_input_search", "Tìm kiếm bạn bè");
    obj.descript_input("#txtUser","Tên đăng nhập")
    //obj.descript_input("#txtPass","Mật khẩu")
    obj.descript_input("#sendcm","Nhập nội dung phản hồi...")
    //obj.descript_input("#res_name","Họ và tên")
    //obj.descript_input("#username","tienganh123")
    //obj.descript_input("#password","ZnNkcm")
    //obj.descript_input("#repassword","ZnNkcm")
    //obj.descript_input("#res_email","dangky@beonline.com.vn")
    //obj.descript_input("#code","Mã xác nhận")
    obj.descript_input("#nt_gt_box_r_input","Nhập nick người giới thiệu")
    obj.descript_input("#vipcode","Nhập mã số nạp thẻ")
    obj.descript_input(".sendbl","Lời bình...")
    obj.descript_input("#addnote","Nội dung...")
    obj.descript_input("#pr_post_wall","Nhập nội dung... (Nội dung ít nhất 10 kí tự)")
    //obj.descript_input("#sendcms","Nhập nội dung phản hồi... (Bạn chỉ có 1 lần đăng phản hồi cho bài học này | Nội dung phản hồi ít nhất 10 kí tự)")

    //Check focus form login top
    $("#txtUser").keyup(function(){
        $(this).removeClass("default_input") 
    })
    $("#txtUser").blur(function(){
        if($(this).val() == "Tên đăng nhập")
            $(this).addClass("default_input")  
    })
    $("#fakepassword").focus(function(){
        {
            $('#fakepassword').hide();
            $('#txtPass').show();
            $('#txtPass').focus();
        }
    })
    $("#txtPass").blur(function(){
        if ($('#txtPass').val() == '') {
            $('#txtPass').hide();
            $('#fakepassword').show();
        } 
    })
    //Back Top
    $("#contents").append("<div title='Trở lên trên' id='tops'>Top</div>")

    $(window).scroll(function() {      
        var top = (document.documentElement && document.documentElement.scrollTop) || 
        document.body.scrollTop;
        if(top!=0)
        {
            $('#tops').fadeIn()
        }
        else
            $('#tops').fadeOut()
    })
    $('#tops').live("click",function(){
        $('html, body').animate({scrollTop:0},800);
    })

    //Seting No no_arown
    $(".no_arown").hover(function(){
        $(this).find("div").css("display","none")
    })
    //Show-Close comment

    var textOld

    $("a.replay").live("click",function(){
        var i
        $(".content_hoidapnhanh li[class=ques] a[id]").each(function(){
            if($(this).text() == "Ẩn")
            {
                $(this).html(textOld).css({"padding":"5px 20px 5px 7px"}).find("b").css("color","#474646")
                i = $(this).attr("id")
            }
        })
        $(".info_replay").css("visibility","hidden") 
        var id = $(this).attr("id")

        if($(this).text() == "Ẩn")
        {
            //$("div#show_"+ id).hide()
            $("div#show_"+ id).css("visibility","hidden")
            $(this).html(textOld).css({"padding":"5px 20px 5px 7px"}).find("b").css("color","#474646")    
        }
        else
        {
            if($(this).attr("id") != i)
            {
                //$("div#show_"+ id).show()  
                $("div#show_"+ id).css("visibility","visible")   
                textOld = $(this).html()   
                $(this).text("Ẩn").css({"padding":"5px 31px","color":"#007F9F"})
            }
        }
        //var pos = $(this).offset()       
        //$('html, body').animate({scrollTop:pos.top - $("div#show_"+ id).height()/2},800);
    })

    $("input#hiden_form_comment").live("click",function(){
        //$(".info_replay").css("display","none")
        $(".info_replay").css("visibility","hidden")
        var id = $(this).attr("alt")
        $(".ques a[id="+ id +"]").html(textOld).css({"padding":"5px 20px 5px 7px"}).find("b").css("color","#474646") 
    })

    //Back Top
    $("#tops").hover(function(){
        $(this).css("background","url(./template/thuviengiaoduc/images/img_homepage-1.png) no-repeat scroll -220px -455px transparent")
        },function(){
            $(this).css("background","url(./template/thuviengiaoduc/images/img_homepage-1.png) no-repeat scroll -170px -455px transparent")
    })

    //Menu Cus Login
    $(".vbv2_root a").hover(function(){
        $(".menu_cus").show()
    })
    $(".cus_cen li").each(function(){
        var d = $(this).find("div")
        var alt = d.attr("class")
        d.css({background:"url(/images/home/"+ alt +".png) 0 5px no-repeat"})
    })
    $(".cus_cen li").live("hover",function(event){
        if (event.type == 'mouseenter') {
            var d = $(this).find("div")
            var alt = d.attr("class")
            d.find("a").css({"color":"#CD6C03"})
            d.css({background:"url(/images/home/"+ alt +"_hover.png) 0 5px no-repeat"})
        }
        else{
            var d = $(this).find("div")
            var alt = d.attr("class")
            d.find("a").css({"color":"#474646","font-weight":"normal"})
            d.css({background:"url(/images/home/"+ alt +".png) 0 5px no-repeat"})
        }
    })

    $('#hover_boxdt').live('hover', function(event) {
        if (event.type == 'mouseenter') {
            $(".box_dt_fast").show()
            $(".box_dt_fast_logged_in").show()
        } else {
            $(".box_dt_fast").hide()
            $(".box_dt_fast_logged_in").hide()
        }
    })

    $(".details tr:even").css({background:"#FBFBFB"})
    $("#CungTruongTrinh li:odd").css({background:"#FBFBFB"})
    $(".lng_content li:odd").css({background:"#eff8fa"})
    $(".ptl_content2 li:even").css("border-right","5px solid #fff")
    $(".lng_content2 li:odd").css({background:"#eff8fa"})
    $("ul.ptl_list_colgb li:odd").css("background","#eff8fa")
    $(".bh_box2 ul li:odd").css("background","#FBFBFB")
    $(".thanhtichs li:odd").css({background:"#F2F2F2"})
    $(".hocquabaihat li:odd").css({background:"#FAFAFA url(/images/home/music_disk.jpg) no-repeat scroll 0 5px"})
    $(".history_cen_less_content:odd").children().css("background-color", "#fbfbfb")
    $(".to_unit:even").css({background:"#fff"})
    //$("#rsHoiDapNhanh li:first-child").addClass("non_border")
    //Menu trang ca nhan
    $(".two li").each(function(){
        var id = $(this).attr("class")
        $(this).css({background:"#FAFAFA url(/images/home/"+ id +".png) 5px 10px no-repeat"})
        if(id == "c_7")
        {
            $(this).find("a").css({"color":"#CD6C03","font-weight":"bold"})
            $(this).css({background:"#FAFAFA url(/images/home/"+ id +"_hover.png) 5px 10px no-repeat"})
        } 
    })
    $(".two li").hover(function(){
        var id = $(this).attr("class")
        $(this).find("a").css({"color":"#CD6C03","font-weight":"normal"})
        if(id == "c_7")
        {
            $(this).find("a").css({"color":"#CD6C03","font-weight":"bold"})
            $(this).css({background:"#FAFAFA url(/images/home/"+ id +"_hover.png) 5px 10px no-repeat"})
        } 
        $(this).css({background:"#FAFAFA url(/images/home/"+ id +"_hover.png) 5px 10px no-repeat"})

        },function(){
            var id = $(this).attr("class")
            $(this).find("a").css({"color":"#268BA7","font-weight":"normal"})
            $(this).css({background:"#FAFAFA url(/images/home/"+ id +".png) 5px 10px no-repeat"}) 

            if(id == "c_7")
            {
                $(this).find("a").css({"color":"#CD6C03","font-weight":"bold"})
                $(this).css({background:"#FAFAFA url(/images/home/"+ id +"_hover.png) 5px 10px no-repeat"})
            } 
    })
    //get Hoi Dap Nhanh
    $(".vbv2_next").live("click",function(){
        var curent = $(".pagging .vbv2_current").text()
        var limit = parseInt($(".pagging .vbv2_current").attr("limit"))
        var where = $(".pagging .vbv2_current").attr("alt")
        var params = {
            "typeRedirect" : "loadPageHoiDapNhanh",
            "start" : curent,
            "end": limit,
            "cus" : where
        }
        $.post(base_urlroot+"mod/hoidapnhanh.php",params,function(rs){
            if(rs != "")
            {
                var curnew =  parseInt(curent) + limit;
                $(".pagging .vbv2_current").text(curnew)  
                $("#rsHoiDapNhanh").fadeOut("fast").fadeIn().html(rs)
                //$('div.scrollbar2').tinyscrollbar()             
            }
        })
    })
    $(".vbv2_back").live("click",function(){
        var curent = $(".pagging .vbv2_current").text()
        var limit = parseInt($(".pagging .vbv2_current").attr("limit"))
        var where = $(".pagging .vbv2_current").attr("alt")
        if(curent > limit)
        {
            var curnew =  parseInt(curent) - (limit * 2);    
            var params = {
                "typeRedirect" : "loadPageHoiDapNhanh",
                "start" : curnew,
                "end": limit,
                "cus" : where
            }
            $.post(base_urlroot+"mod/hoidapnhanh.php",params,function(rs){
                if(rs != "")
                {
                    $(".pagging .vbv2_current").text(curnew + limit)  
                    $("#rsHoiDapNhanh").fadeOut("fast").fadeIn().html(rs)
                    //$('div.scrollbar2').tinyscrollbar()             
                }
            })
        }
    })
    //Send hoi dap
    $(".ques_cre_bt").click(function(){ 
        var textarea =  $("#noidunghoidap")
        txtContent = textarea.val()
        var params = {
            "SendHoiDap":"SendHoiDap",
            "Contain" : txtContent
        }
        $.post(base_urlroot+"mod/hoidapnhanh.php",params,function(rs){            
            if(IsJsonString(rs))
            {
                rs = jQuery.parseJSON(rs)
                if(rs.type == "error")
                {  
                    textarea.focus().select()    
                    $(".error").fadeIn().html(rs.mess)     
                }
                else if(rs.type == "success")
                {
                    textarea.val("")    
                    $(".error").fadeIn().fadeOut(3000).html(rs.mess)     
                }  
            }
            else
            {
                textarea.val("");    
                $("#rsHoiDapNhanh").prepend(rs)
                $("#no_question_hd,.error").hide();
            } 
        })
    })
    $("#send_form_comment").live("click",function(){
        var idComment = $(this).attr("class")
        var textarea = $(".content" + idComment)
        var content = textarea.val()
        var Numrl = $(this).attr("alt");

        var params = {
            "id": idComment,
            "SendReplay":"SendReplay",
            "Contain" : content,
            "numtl" : Numrl
        }
        $(".error"+idComment).hide()
        $.post(base_urlroot+"mod/hoidapnhanh.php",params,function(rs){
            if(IsJsonString(rs))
            {
                rs = jQuery.parseJSON(rs)
                if(rs.type == "error")
                {
                    textarea.focus().select()    
                    $(".error" + idComment).fadeIn().html(rs.mess)     
                }
                else if(rs.type == "success")
                {
                    textarea.val("")  
                    $(".error" + idComment).fadeIn().fadeOut(3000).html(rs.mess)

                }
            }
            else
            {
                textarea.val("")    
                $("#show_id_" + idComment + " ul").prepend(rs)                
                var numrlNew = (parseInt(Numrl) + 1);
                var rlNew = "<span class=\"blue1\">Trả lời : </span><b>"+ numrlNew +"</b>" 
                $("input#send_form_comment[class='"+ idComment +"']").attr("alt",numrlNew)
                textOld = rlNew
                //$('div.scrollbar2').tinyscrollbar()
            }
        })
    })

    $("a#QCus").click(function(){
        $(".error").fadeOut("fast")
        var type = $(this).attr("alt")
        var params = {
            "type":type
        }
        $.post(base_urlroot+"mod/hoidapnhanh.php",params,function(rs){
            if(IsJsonString(rs))
            {
                rs = jQuery.parseJSON(rs)
                if(rs.type == "noquestion")
                {
                    $(".error").fadeIn().html(rs.mess)
                    $("#rsHoiDapNhanh").hide()
                    $(".pagging").hide()
                }                     
            }
            else
            {
                $(".RsCus").fadeOut("fast").fadeIn().html(rs)
                //$('div.scrollbar2').tinyscrollbar()
            }
        })
    })
    //Xoa hoidap
    $(".delHoiDap").live("click",function(){
        if(confirm("Bạn chắc chắn xóa trả lời này ?"))
        {
            var idReplay = $(this).attr("id")
            var idHoiDap = $(this).attr("rel")
            var numcurren = $("input#send_form_comment[class='"+ idHoiDap +"']").attr("alt")

            var params = {
                "id" : idReplay,
                "XoaHoiDap" : "true",
                "typed" : 'rl'
            }
            $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(rs){
                rs = jQuery.parseJSON(rs)
                if(rs.success)
                {   
                    $("li#" +idReplay ).remove()
                    var rlNew = "<span class=\"blue1\">Trả lời : </span><b>"+ (parseInt(numcurren) - 1) +"</b>" 
                    textOld = rlNew
                    $("input#send_form_comment[class='"+ idHoiDap +"']").attr("alt",numcurren-1)
                }
                else
                    $(".error" + idHoiDap).html("<span class='red'>Có lỗi không thể xóa trả lời này</span>")            
            })
        }
        else return false;
    })
    $(".voteup").live("click",function(){
        var curent = $(this).text()
        var id = $(this).attr("id")
        var idHoiDap = $(this).attr("rel")
        var params = {
            "curent" : curent,
            "id" : id,
            "voteup" : "true"
        }
        $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(rs){
            if(IsJsonString(rs))
            {
                rs = jQuery.parseJSON(rs)
                if(rs.success)
                {
                    $("a[up='"+ id +"']").text(rs.success)
                    $(".error" + idHoiDap).fadeIn().fadeOut(1000).html("<span class='green'>Vote up success!</span>") 
                }
                else
                    $(".error" + idHoiDap).html("<span class='red'>Có lỗi sảy ra</span>")
            }
            else
                $(".error" + idHoiDap).html("<span class='red'>Bạn phải đăng nhập để có thể Vote</span>")  
        })
    })
    $(".votedown").live("click",function(){
        var curent = $(this).text()
        var id = $(this).attr("id")
        var idHoiDap = $(this).attr("rel")
        var params = {
            "curent" : curent,
            "id" : id,
            "votedown" : "true"
        }
        $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(rs){
            if(IsJsonString(rs))
            {
                rs = jQuery.parseJSON(rs)
                if(rs.success)
                {
                    $("a[down='"+ id +"']").text(rs.success)
                    $(".error" + idHoiDap).fadeIn().fadeOut(1000).html("<span class='green'>Vote down success!</span>") 
                }
                else
                    $(".error" + idHoiDap).html(rs.error)
            }
            else
                $(".error" + idHoiDap).html("<span class='red'>Bạn phải đăng nhập để có thể Vote</span>") 
        })
    })
    $(".DelhdRoot").live("click",function(){
        if(confirm("Bạn có chắc chắn muốn xóa hỏi đáp này ?")){
            var idCh = $(this).attr("id")
            var params = {
                "id" : idCh,
                "XoaHoiDap" : "true",
                "typed" : 'ch'
            }
            $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(rs){
                rs = jQuery.parseJSON(rs)
                if(rs.success)
                    $("#ch"+ idCh).remove()
            })
        }
        else return false;
    })
    $(".setSpam").live("click",function(){
        if(confirm("Áp dụng Spam cho tài khoản này ?")){
            var userId = $(this).attr("rel")
            var params = {
                "idUser" : userId,
                "Spam" : "true"
            }
            $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(rs){
                $("span#rscp" + userId).text(rs) 
            })
        }
        else return false;
    })
    $(".actiHD").live("click",function(){
        if(confirm("Duyệt câu hỏi này được phép hiển thị ra bên ngoài ?")){
            var IdQs = $(this).attr("rel")
            var params = {
                "AlowQs" : IdQs     
            }
            $.post(base_urlroot + "mod/hoidapnhanh.php",params,function(){
                $('.actiHD[rel='+ IdQs +']').html('&nbsp;<img src="http://data.thuviengiaoduc.org/images/v2/home/accept-icon.png">')
            })
        }
        else return false;
    })
    //TA Nguoi lon - Bai hoc
    $(".bh_box").hover(function(){
        $(this).children(".bh_box2").toggle();
    })

    $(".bh_box").hover(function(){
        $(this).addClass("bh_box_hover")
        $(this).children(".bh_box_title").addClass("bh_box_title_hover")
        $(this).children(".nl_box_img").addClass("bh_bg_img_hover")
        },function(){
            $(this).removeClass("bh_box_hover")
            $(this).children(".bh_box_title").removeClass("bh_box_title_hover")
            $(this).children(".nl_box_img").removeClass("bh_bg_img_hover")
        }
    )
    //Bieu tuong cam xuc
    $("#emt_icon").bind("click", function(){	
        $(".box_smile").stop().toggle(); 	
    });
    $(document).mouseup(function(){
        $(".box_smile").mouseup(function(){
            return false;
        }) 
        $(".box_smile").hide() 
    })

    $(".repass").click(function(){
        if($(this).attr("alt") != "true")
        {
            $(this).removeClass("checkRePass")
            $(this).attr("alt","true")
        }
        else
        {
            $(this).addClass("checkRePass")
            $(this).addClass("repass")
            $(this).attr("alt","false")
        }
    })

    $("#btnSubmit").hover(function(){
        $(this).attr("src","/images/home/login_button_holver.png") 
        },function(){
            $(this).attr("src","/images/home/login_button.png")
    })

    $(".showlogfrom").click(function(){        
        $(".first_notLogin").hide()
        $("#loginformhome").show()
    })

    //Register

    $(".res_radio_ic").click(function(){
        $(".res_radio_box").removeClass("rs_checked")
        $(this).parent(".res_radio_box").addClass("rs_checked");
        $(".res_radio_ic").removeClass("res_radio_checked");
        $(".res_radio_ic").attr("alt","flase");
        $(".rs_checked").children(".res_radio_ic").addClass("res_radio_checked");
        $(".rs_checked").children(".res_radio_ic").attr("alt","true");
    })
    $(".res_check_ic").click(function(){
        if($(this).attr("alt") != "true")
        {
            $(this).addClass("res_radio_checked");
            $(this).attr("alt","true");
        }
        else
        {
            $(this).removeClass("res_radio_checked");
            $(this).attr("alt","false");
        }
    })
    $("#rsreloadCapcha").click(function(){
        reloadCapcha("#reloadCapcha");
    });

    //Check live username
    $("#bnv_formReg input[type=text],#bnv_formReg input[type=password]").focus(function(){
        $("#bnv_formReg input[type=text],#bnv_formReg input[type=password]").removeClass("res_input_true")
        $(this).addClass("res_input_true")
        $(this).removeClass("res_input_false")
        $(this).css("color","#635C5C")
        $(this).next().hide()

    })
    $("#bnv_formReg input[type=password]").focus(function(){
        $("#bnv_formReg input[type=text]").removeClass("res_input_true")
        $("#bnv_formReg input[type=password]").removeClass("res_input_true")
        $(this).addClass("res_input_true")
        $(this).removeClass("res_input_false")
        $(this).css("color","#635C5C")
        $(this).next().hide()

    })
    $("#bnv_formReg input[type=password]").focus(function(){
        $("#er_password").hide()
    }) 
    $("#username").blur(function(){
        var username = $(this).val()
        var params = {
            "fielduser" : "field",
            "user" : username
        }
        $("#er_username").removeClass("res_false")
        $(this).removeClass("res_input_false")
        $.post(base_urlroot + "pages/register.php",params,function(rs){
            rs = jQuery.parseJSON(rs)
            if(rs.erroruser)
            {                
                $("#er_username").addClass("res_false")
                $("#er_username").html(rs.erroruser)
                $("#username").addClass("res_input_false")
                $("#er_username").show()
            }
            if(rs.cuccessuser)
            {
                $("#er_username").show()
                $("#er_username").addClass("res_true")
                $("#er_username").html(rs.cuccessuser)
            }
        })
    })
    //Check live pass
    $("#password").blur(function(){
        var password = $("#password").val()
        var repassword = $("#repassword").val()
        $("#er_password").text("")
        $("#password").removeClass("res_input_false")
        $("#er_password").removeClass("res_false") 
        if(!validate_pass(password))
        {
            $("#er_password").show()         
            $("#er_password").text("Mật khẩu của bạn chưa đúng cấu trúc yêu cầu")
            $("#er_password").addClass("res_false")         
            $("#password").addClass("res_input_false")          
        }
        else if(password == repassword)
        {
            $("#er_password").show()
            $("#er_password").addClass("res_true")    
            $("#er_password").text("Bạn có thể sử dụng mật khẩu này")
            $("#repassword").removeClass("res_input_false")
        }
        else if(password != repassword)
        {
            $("#er_password").show()         
            $("#er_password").text("Xác nhận mật khẩu không chính xác")
            $("#er_password").addClass("res_false")         
            $("#repassword").addClass("res_input_false")
        }
    })
    $("#repassword").blur(function(){
        var password = $("#password").val()
        var repassword = $("#repassword").val()
        $("#repassword").removeClass("res_input_false")
        $("#er_password").removeClass("res_false")
        $("#er_password").text("")
        $("#er_password").show()  
        if(validate_pass(password))
        {
            if(password != repassword || repassword == "ZnNkcm")
            {       
                $("#er_password").text("Xác nhận lại mật khẩu không chính xác")
                $("#er_password").addClass("res_false")                 
                $("#repassword").addClass("res_input_false")
            }
            else
            {    
                $("#er_password").text("Bạn có thể sử dụng mật khẩu này")
                $("#er_password").addClass("res_true")         
            }
        }
        else
        {
            $("#er_password").show()         
            $("#er_password").text("Mật khẩu của bạn chưa đúng cấu trúc yêu cầu")
            $("#er_password").addClass("res_false")         
            $("#password").addClass("res_input_false")
        } 
    })
    //Check live email
    $("#res_email").blur(function(){
        var res_email = $(this).val()
        if(res_email == "dangky@beonline.com.vn")
        {
            $("#er_email").show()
            $("#er_email").addClass("res_false")
            $("#er_email").html("Địa chỉ email này đã tồn tại , bạn hãy thử một địa chỉ khác !")
            $("#res_email").addClass("res_input_false")
        }
        else
        {
            var params = {
                "fieldemail" : "field",
                "email" : res_email
            }
            $("#er_email").removeClass("res_false")
            $(this).removeClass("res_input_false")
            $.post(base_urlroot + "pages/register.php",params,function(rs){
                rs = jQuery.parseJSON(rs)
                if(rs.erroremail)
                {
                    $("#er_email").show()
                    $("#er_email").addClass("res_false")
                    $("#er_email").html(rs.erroremail)
                    $("#res_email").addClass("res_input_false")
                }
                if(rs.cuccessemail)
                {
                    $("#er_email").show()
                    $("#er_email").addClass("res_true")
                    $("#er_email").html(rs.cuccessemail)
                }
            })
        }
    })
    //Check live code
    $("#code").blur(function(){        
        var code = $(this).val()
        if(code.length < 6 || code.length > 6)
        {
            $("#er_code").show()
            $("#er_code").addClass("res_false")
            $("#er_code").text("Mã code nhập không hợp lệ")
        }
        else
        {
            var params = {
                "fieldcode" : "field",
                "code" : code
            }
            $("#er_code").removeClass("res_false")
            $(this).removeClass("res_input_false")
            $.post(base_urlroot + "pages/register.php",params,function(rs){
                rs = jQuery.parseJSON(rs)
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
        }
    })
    //Check dieu khoan
    $("#dieukhoan").click(function(){
        if($(this).attr("alt") == "true")
            $("#er_dieukhoan").hide()
        else
        {
            $("#er_dieukhoan").show()
            $("#er_dieukhoan").addClass("res_false")
            $("#er_dieukhoan").html("* Bạn chưa đồng ý với điều khoản của TiếngAnh123 .<br> -  Để đăng ký tài khoản bắt buộc phải đồng ý với những điều khoản này !")
        }    
    })

    // Comment
    $("#sendcms").focus(function(){        
        $('#show_error_msg').text("")
        if($(this).attr("rel") != "true")
        {
            $(this).attr("rel","true")
            $(this).val("")
            $(this).css("color","#383434")
        }
    })
    //cal init comment
    init_comment();

    $("#ubaPlayer").ubaPlayer({
        codecs: [{name:"MP3", codec: 'audio/mpeg;'}],
        isPaid:true,	
        playStartCallback: PlayingAudioHide,
        stopCallback: stopAudioHide	

    });	
    isIOS = DetectIos();		
    console.log(isIOS);

    //Popup
    //if close button is clicked
    $('.window .close').click(function () {
        $('#mask').fadeOut(500);
        $('.window').fadeOut(500);
    });
    $("#boxes a").click(function(){
        $('#mask').fadeOut(500);
        $('.window').fadeOut(500);
    })        
    //if mask is clicked
    $('#mask').click(function () {
        $(this).fadeOut(1000);
        $('.window').fadeOut(1000);
    });
    
    //Login mang xa hoi
        $(".openid").click(function(){
        var identity = $(this).attr("identity");
        var url = base_urlroot +'ajax/openid/index?login&identity='+identity;
        var _width = 900;
        var Xpos = ((screen.availWidth - _width)/2);
        var _height = 500;
        var Ypos =((screen.availHeight - _height)/2);                
        vWin = window.open(url,"CM_OpenID","width=" + _width + ",height=" + _height + ",resizable,scrollbars=yes,status=1");        
        tWin();
    });
    $("a#icon-fb").click(function(){
        var url = base_urlroot +'fb';
        var _width = 900;
        var Xpos = ((screen.availWidth - _width)/2);
        var _height = 500;
        var Ypos =((screen.availHeight - _height)/2);                
        vWin = window.open(url,"CM_OpenID","width=" + _width + ",height=" + _height + ",resizable,scrollbars=yes,status=1");        
        tWin(); 
    })
    $('input#sharefeedfb').click(function(){
        if($(this).is(':checked')){          
           var params = {
                'check' : 'true'  
            };
            $.ajax({
                type: "GET",
                url: base_urlroot + 'fb/checkSession.php',
                data: params,
                dataType: "html",
                async:    false,
                success: function(rs) {
                    if(rs == '<script>window.close();</script>')
                        return false; 
                    if(rs != 'is-login'){
                        window.open(rs,"_blank","width=900,height=500,resizable,scrollbars=yes,status=1");         
                     } 
                }
            });
        }         
    })
    $('.to_box div[class=""]:odd').css({'background':'#EFF8FA','width':'100%','float':'left'})
})

function getCook(cookiename) 
{
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+/,"").replace("=","") : "");
}
function toPos(ElementTo)
{
    var postCm = $(ElementTo).offset()
    $('html, body').animate({scrollTop:postCm.top},300);
}

//Init comment
function init_comment(){ 
    //Disable form comment input
    var is_comm_input = $('#is_comment_form').html();    
    if(is_comm_input == 'no')
        $('#form_comment_area').remove();

    //For admin action
    $(".lik_info_box_ct").hover(function(){
        $(this).find(".scm_ctrl").css("visibility","visible")
        },function(){
            $(this).find(".scm_ctrl").css("visibility","hidden")
    })
}

/* Show button download for lesson */
function show_button_download(){  
    if($('#download_1').length==1){	
        var i=1;
        var str_re='<div class="vd_download_name">DOWNLOAD BÀI HỌC NÀY :</div>';
        var non_vip='';
        var vip='';
        var text='';
        var arr_link=[];
        var icon_downd='vd_ico1';  
        $("span:contains(Download)").hide();				

        while($('#download_'+i).length==1){ 
            text=$('#download_'+i).text();		
            arr_link=text.split("|");
            if(arr_link[0].indexOf('MP3')>=0 || arr_link[0].indexOf('mp3')>=0){
                icon_downd='vd_ico2';
            }
            if(arr_link[1].indexOf('PDF')>=0 || arr_link[1].indexOf('pdf')>=0){
                icon_downd='vd_ico3';
            }
            non_vip+='<a href="" onclick="popup(\'http://data.thuviengiaoduc.org/file/dungchung/download_vip.htm\')" onmouseout=hideticker(this) onMouseOver="showmessage_danhngon(\'Tải video, audio, hay lời dịch về máy - Chỉ dành cho thành viên VIP\',this)"><div class="vd_dl_icon">'+arr_link[0]+'<div class="vd_ico_dl '+icon_downd+'"></div></div></a>';
            vip+='<a href="'+arr_link[1]+'" target=_blank><div class="vd_dl_icon">'+arr_link[0]+'<div class="vd_ico_dl '+icon_downd+'"></div></div></a>';
            $('#download_'+i).remove();
            i++;
        }
        if (!paidmember()){
            str_re+=non_vip;       	  
        } else {
            str_re+= vip; 
        }   
        $('.vd_download').html(str_re);
    }
}
function addAudioLong(element,i,isIOS){
    var file_play = $(element).attr("media-url");        
    var is_paid=$(element).attr("is_paid");
    var player_type=$(element).attr("player_type");
    if(is_paid){
        file_play=getLinkVIP(file_play,'mp3');           
    }
    var prefix = 'v2_audio_player';
    var class_id = 'v2_audio_player';
    var time_now = new Date().getTime();
    if($(element).hasClass("jquery_jplayer_home")){
        prefix = 'v2_player_home_';
        class_id = 'jquery_jplayer_home';
    }else if($(element).hasClass('jquery_jplayer_long')){
        prefix = 'v2_player_lesson_';
        class_id = 'jquery_jplayer_long';
    }else if($(element).hasClass('jquery_jplayer_lesson')){
        prefix = 'v2_player_comment_';
        class_id = 'jquery_jplayer_lesson';
    }        
    //Check element show?
    //console.log(prefix+i+':'+$(element).is(":visible"));
    if(!$(element).is(":visible")){
        return;
    }
    //Check added audio?
    if($(element).attr('add_audio')){
        return;
    }
    if(player_type){
        isIOS=true;
    }else{
        isIOS = DetectIos();
    }
    prefix += time_now;

    if(!isIOS){
        $(element).attr("id",prefix + i);
        $(element).after('<script language="javascript"> PKL_AddPlayer({ target: "' + prefix + i + '",id: "' + prefix + i + '", media: "' + file_play + '", timeformat: "1" } );</script>');
    }else{
        $(element).after('<div id="' + prefix + i +'" class="jp_audio_long"><div class="jp-gui ui-widget ui-widget-content ui-corner-all adl_box"><ul><li class="jp-play ui-state-default ui-corner-all adl_play"><a href="javascript:;" class="jp-play ui-icon ui-icon-play adl_play_in" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all adl_pause"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause adl_play_in" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider adl_slider"></div><div class="jp-current-time  counttime adl_time"></div><div class="jp-clearboth"></div></div></div>');    
        var myPlayer = $(element),
        myPlayerData,
        fixFlash_mp4,
        fixFlash_mp4_id,
        ignore_timeupdate, 
        options = {
            ready: function (event) {
                if(event.jPlayer.status.noVolume) {
                    $(".jp-gui").addClass("jp-no-volume");
                }
                fixFlash_mp4 = event.jPlayer.flash.used && /mp3/.test(event.jPlayer.options.supplied);
                $(this).jPlayer("setMedia", {
                    mp3: file_play
                });
                $(".adl_slider").find("a").addClass("adl_icon");
                $(".adl_slider").find("div").addClass("adl_sl");
            },
            play: function(event) { // To avoid both jPlayers playing together.                
                $(this).jPlayer("pauseOthers");                            
            },
            /*load : function(event){
            console.log("error");    
            },
            warning  : function(event){
            console.log("warning ");            
            },
            loadstart : function(event){
            console.log("loadstart");    
            },
            abort : function(event){
            console.log("abort");                
            },
            loadeddata : function(event){
            console.log("loadeddata");    
            },
            waiting : function(event){
            console.log("waiting");    
            },
            playing : function(event){
            console.log("playing");    
            },
            canplay : function(event){
            console.log("canplay");    
            },
            ended  : function(event){
            console.log("ended ");    
            },
            emptied : function(event){
            console.log("emptied");            
            },
            */                                        
            timeupdate: function(event) {
                if(!ignore_timeupdate) {
                    myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
                }
            },
            solution:"flash, html",    
            swfPath:"/static/js/audioPlayer/jplayer/js/Jplayer.swf",                
            supplied: "mp3",
            cssSelectorAncestor: "#" + prefix + i,
            wmode: "window"
        },
        myControl = {
            progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
            volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
        };

        myPlayer.jPlayer(options);
        myPlayerData = myPlayer.data("jPlayer");
        $('.jp-gui ul li').hover(
            function() { $(this).addClass('ui-state-hover'); },
            function() { $(this).removeClass('ui-state-hover'); }
        );
        myControl.progress.slider({
            animate: "fast",
            max: 100,
            range: "min",
            step: 0.1,
            value : 0,
            slide: function(event, ui) {
                var sp = myPlayerData.status.seekPercent;
                if(sp > 0) {
                    if(fixFlash_mp4) {
                        ignore_timeupdate = true;
                        clearTimeout(fixFlash_mp4_id);
                        fixFlash_mp4_id = setTimeout(function() {
                            ignore_timeupdate = false;
                            },1000);
                    }
                    myPlayer.jPlayer("playHead", ui.value * (100 / sp));
                } else {
                    setTimeout(function() {
                        myControl.progress.slider("value", 0);
                        }, 0);
                }
            }
        });
    }

    //Danh dau phan tu da add audio
    $(element).attr('add_audio', true);
}
function addAudioLong_toeic(cmd,i,filename,pathFile){    
    $(cmd).after('<div class="jplayer_common" >Audio '+(i+1)+':</div><div id="jp_container_long'+i+'" class="jplayer_common"><div class="jp-gui ui-widget ui-widget-content ui-corner-all adl_box"><ul><li class="jp_player_stt jp-play ui-state-default ui-corner-all adl_play"><a href="javascript:;" class="ui-icon ui-icon-play adl_play_in" tabindex="1" title="play">play</a></li><li class="jp-pause ui-state-default ui-corner-all adl_pause"><a href="javascript:;" class="jp-pause ui-icon ui-icon-pause adl_play_in" tabindex="1" title="pause">pause</a></li></ul><div class="jp-progress-slider adl_slider"></div><div class="jp-current-time  counttime adl_time"></div><div class="jp-clearboth"></div></div></div>');    

    var myPlayer = $(cmd),
    myPlayerData,
    fixFlash_mp4,
    fixFlash_mp4_id,
    ignore_timeupdate, 
    options = {
        ready: function (event) {
            if(event.jPlayer.status.noVolume) {
                $(".jp-gui").addClass("jp-no-volume");
            }
            fixFlash_mp4 = event.jPlayer.flash.used && /mp3/.test(event.jPlayer.options.supplied);
            $(this).jPlayer("setMedia", {
                mp3: pathFile+'/'+filename
            });
            $(".adl_slider").find("a").addClass("adl_icon");
            $(".adl_slider").find("div").addClass("adl_sl");
        },            
        play: function(event) { // To avoid both jPlayers playing together.
            $(this).jPlayer("pauseOthers"); 
            $(this).addClass('jplayer_playing');
        },
        width:"150px",
        height:"40px",
        playing : function(event){

            //   console.log(this);
        },
        /*    load : function(event){
        console.log("error");    
        },
        warning  : function(event){
        console.log("warning ");            
        },
        loadstart : function(event){
        console.log("loadstart");    
        },
        abort : function(event){
        console.log("abort");                
        },
        loadeddata : function(event){
        console.log("loadeddata");    
        },
        waiting : function(event){
        console.log("waiting");    
        },
        playing : function(event){
        console.log("playing");    
        },
        canplay : function(event){
        console.log("canplay");    
        },
        ended  : function(event){
        console.log("ended ");    
        },
        emptied : function(event){
        console.log("emptied");            
        },

        */

        timeupdate: function(event) {
            if(!ignore_timeupdate) {
                myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
            }
        },
        solution:"flash, html",
        swfPath:"/static/js/audioPlayer/jplayer/js/Jplayer.swf",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_long"+i,
        wmode: "window"
    },
    myControl = {
        progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
        volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
    };
    myPlayer.jPlayer(options);
    myPlayerData = myPlayer.data("jPlayer");
    $('.jp-gui ul li').hover(
        function() { $(this).addClass('ui-state-hover'); },
        function() { $(this).removeClass('ui-state-hover'); }
    );
    myControl.progress.slider({
        animate: "fast",
        max: 100,
        range: "min",
        step: 0.1,
        value : 0,
        slide: function(event, ui) {
            var sp = myPlayerData.status.seekPercent;
            if(sp > 0) {
                if(fixFlash_mp4) {
                    ignore_timeupdate = true;
                    clearTimeout(fixFlash_mp4_id);
                    fixFlash_mp4_id = setTimeout(function() {
                        ignore_timeupdate = false;
                        },1000);
                }
                myPlayer.jPlayer("playHead", ui.value * (100 / sp));
            } else {
                setTimeout(function() {
                    myControl.progress.slider("value", 0);
                    }, 0);
            }
        }
    });

}
//Check IE
if($.browser.msie){
    $(window).load(function(){
        //Show audio player cho type home (tpl)
        $('.jquery_jplayer_home').each(function(i){                    
            addAudioLong(this,i,isIOS);	
        });

        //Show audio player cho phan comment (function showmp3)
        $('.jquery_jplayer_comment').each(function(i){                    
            addAudioLong(this,i,isIOS);	
        });
        // show audio bai học
        $('.jquery_jplayer_long').each(function(i){		
            addAudioLong(this,i,isIOS);					
        });
    });
}else{
    $(document).ready(function(){
        //Show audio player cho type home (tpl)
        $('.jquery_jplayer_home').each(function(i){                    
            addAudioLong(this,i,isIOS);	
        });

        //Show audio player cho phan comment (function showmp3)
        $('.jquery_jplayer_comment').each(function(i){                   
            addAudioLong(this,i,isIOS);	
        });
    });
}
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

//
function loadSocial() {
    if ($(".fb-like").length == 0) return;
    $('#fblike').attr('data-href',document.location.href);

    //Facebook
    if (typeof (FB) != 'undefined') {
        FB.init({ status: true, cookie: true, xfbml: true });
    } else {
        $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
            FB.init({ status: true, cookie: true, xfbml: true });
        });
    }
}