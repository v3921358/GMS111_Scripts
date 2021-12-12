/*
	名字:	称号 - 专业十字猎人
	地圖:	埃德尔斯坦
	描述:	310000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("真令人吃驚。#h0#你能這麼出色的完成任務……特授予#h0#你#b<專業十字獵人>#k稱號。");
	if (status == 1)
		qm.sendPrev("祝賀你成為#b<專業十字獵人>#k。 希望你能為了下一個任務而變得更加强大。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142353:#   #t1142353#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142353,1);
		qm.dispose();
}
}