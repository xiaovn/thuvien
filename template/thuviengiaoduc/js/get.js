 var clfpt;
 $(function(){ 
    $.ajax({
          url: $('#clptjson').attr('link'),
          type: "POST",
          dataType: 'json',
          async: false,
          success: function(ms){
            console.log(ms);
            clfpt = ms;
            //public            
            $('.clfpnq').text(ms["name"]);
            $('#clfpitq, #clfprtq').text(ms["lesson"].length);
            $('#clfpismax, #clfprsmax').text(ms["max_score"]);
            $('#clfpip, #clfprp').text(ms["min_percent"]+"%");
            $('#clfpismin, #clfprsmin').text(ms["min_score"]);
            //introduction            
            $('#clfpitt').text(ms["introduction"].title_page);
            $('#clfpitn').text(ms["introduction"].tutorial);            
            $('#clfpiav').append('<img src="'+ms["introduction"].avata+'"/>');
            //task
            var $num = 0;
            $.each(ms["lesson"],function(index,value){
                $num++;
                var $html= '<div class="clfpts" id="clfpt'+index+'">'+                        
                               '<div class="ab clfpttrq">'+$num+'. '+value["question"]+'</div>'+
                               '<div class="ab clfptsl clfptsll"><img class="clfptimg" src="'+value["linkImg1"]+'"/></div>'+
                               '<div class="ab clfptsl clfptslr"><img class="clfptimg" src="'+value["linkImg2"]+'"/></div>'+
                               '<div class="ab clfptwa"><div class="ab clfpta" id="clfpta'+index+'" src="'+value["linkAudio"]+'.mp3"></div></div>'+                        
                           '</div>';
                $('#clfpat').append($html);                
                var $row_outline = '<div class="clfpowrow" id="clfporow'+index+'">'+ 
                                        '<div class="clfporow">'+
                                            '<div class="clfpon">'+$num+'.</div>'+
                                            '<div class="clfpoq">'+value["question"]+'</div>'+
                                            '<div class="clfpors"></div>'+
                                            '<div class="clfposc">10</div>'+
                                        '</div>'+
                                   '</div>';
               $('#clfpotb').append($row_outline);               
            })
             $('#clfp').createAudio(ms["audio_correct"], '_Acorrect');   
             $('#clfp').createAudio(ms["audio_incorrect"], '_Aincorrect');
             $('#clfp').createAudio("/file/learn/child/dungchung/lib_new_en/goldenkids", '_Aclfpgks');             
          },
          complete: function(ms){  
            $('.clfpts').each(function(index,ele){
                var $this = $(this);
                if(clfpt["lesson"][index].correct == 1){
                    $this.find('.clfptsll').attr('cr',true);
                }else{
                    $this.find('.clfptslr').attr('cr',true);
                }
                $this.find('.clfpta').gJPlayS({theme: "seekbar",index: 'clfpta'+index});                
            }).promise().done(function(){
                $(document).trigger('clfpt_complete');
            })            
          },
          error: function(er){
            console.log(er.responseText);
          }
     });      
}) 