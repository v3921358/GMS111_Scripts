/*
	名字:	[十字猎人]武陵的十字猎人
	地圖:	降魔十字旅团据点
	描述:	931050500
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1624) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1624) == 1) {
		qm.sendAcceptDecline("#b#p9120218##k說你會來協助我的工作，時空門的情况你有進去過，應該比我要瞭解得多。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 13000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(13000);
		qm.dispose();
}
}