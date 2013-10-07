var time_play = '2:0';
var src = link_game_tieng_anh_qua_phim+'picgame/';
//['tem frame', so luong anh]
var canh_1 = ['canh_1',3];
var canh_2 = ['canh_2',3];
var canh_3 = ['canh_3',3];
var canh_4 = ['canh_4',3];
var canh_5 = ['canh_5',3];

var list_question = [canh_1,canh_2,canh_3,canh_4,canh_5];

gameElement = new createGame(); 
/*---------------------------------------------------*/


createGame.prototype.complete = function(){
	$(gameElement).trigger('congraturation');
	};