/*
	名字:	席勒
	地圖:	人迹罕至的岩山
	描述:	931000020
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0){
	if (cm.getMapId() == 931000020) {
		cm.sendNext("哼。 好小子，膽敢給我逃跑？");
	} else {
		cm.dispose();
		}
		}
	if (status == 1)
		cm.sendNextPrevS("#b啊！ 被發現了！");
	if (status == 2)
		cm.sendNextPrev("不要掙扎了快投降吧。 實驗者想要去哪裡…咦？ 後面那個小子，你不是實驗者嘛？ 你是什麼？ 村莊的人？");
	if (status == 3)
		cm.sendNextPrevS("#b怎麼樣！ 我是埃德爾斯坦的居民！");
	if (status == 4)
		cm.sendNextPrev("…小鬼頭們，說了幾次叫你們不要靠近礦山，聽不懂是吧？ 笨居民…沒辦法，不能讓你回到村莊亂說有關實驗室的事情。 要把你抓起來。");
	if (status == 5)
		cm.sendNextPrevS("#b什麼？ 誰說要乖乖地給你抓？");
	if (status == 6)
		cm.sendNextPrev("不知好歹…看你可以囂張到什麼時後？");
	if (status == 7)
		cm.sendNextPrevS("#b（該怎麼辦？ 好像打不贏！）#k");
	if (status == 8)
		cm.sendNextPrev("我要建議格裏梅爾給你做更强的實驗。 呼呼…乖乖的投降吧！");
	if (status == 9)
		cm.sendNextPrev("住手！", 2159010);
	if (status == 10){
		cm.dispose();
		cm.warp(931000021, 1);
}
}