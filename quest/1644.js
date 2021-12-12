/*
	名字:	称号 - 见习十字猎人
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
		qm.sendAcceptDecline("雖然首先要進行見習，但還是祝賀你成為降魔十字旅團的成員。 授予你#b<見習十字獵人>#k的稱號。");
	if (status == 1)
		qm.sendPrev("祝賀你成為降魔十字旅團的成員，授予#h0#你#b<見習十字獵人>#k的稱號。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142351:#   #t1142351#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142351,1);
		qm.dispose();
}
}