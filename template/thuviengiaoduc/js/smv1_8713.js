//Note http://www.schillmania.com/projects/soundmanager2/doc/
/*    
Call play:
      soundManager.play('id'); //Simple      
      soundManager.getSoundById("_Abg").play({
              multiShot: false,
               // start position
              from: 500,
              // end position
              to: 1200,
              whileloading: function(){},
              whileplaying: function(){},
              onfinish: function() {},              
              onstop: function() {
                soundManager._writeDebug('sound stopped at position ' + this.position);// note that the "to" target may be over-shot by 200+ msec, depending on polling and other factors.
              }
        });//optional
Stop:
    soundManager.stopAll(); //Stop all
    soundManager.stop('id'); //Simple
    soundManager.getSoundById("_Abg").stop({})//optional
Pause:
    soundManager.pauseAll(); //Pause all
    soundManager.pause('id'); //Simple
    soundManager.getSoundById("_Abg").pause({})//optional             
*/
soundManager.setup({
      url: '/file/learn/child/dungchung/lib_new_en/smg/swf/',
      debugMode: false,
      useHTML5Audio: true,
      preferFlash: false,
      multiShot: false,
      flashVersion: 9
})
function _fnmsc(_link,_id){          
      soundManager.onready(function() {
        soundManager.createSound({            
          id: _id,
          url: _link+'.mp3',        
          onstop: function() {
            $(document).trigger(this.id+"_stop");
          },
          onfinish: function(){
            $(document).trigger(this.id+"_finish");
          }  
        })
      })
}