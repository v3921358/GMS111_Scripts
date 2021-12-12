/*
	名字:	称号 - 十字猎人大师
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
		qm.sendAcceptDecline("十分感謝你至今為止出色的完成了降魔十字旅團的任務。 包括我在內的降魔十字旅團成員都看到了#h0#你的活躍。 您才是真正的#b<十字獵人大師>#k。");
	if (status == 1)
		qm.sendPrev("授予#h0#你#b<十字獵人大師>#k的稱號。 期待你以後更加活躍的表現。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142354:#   #t1142354#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142354,1);
		qm.dispose();
}
}