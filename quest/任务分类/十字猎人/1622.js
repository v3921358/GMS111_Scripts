/*
	名字:	[十字猎人]谢丽尔的提议
	地圖:	降魔十字旅团据点
	描述:	931050500
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1622) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1622) == 1) {
		qm.sendNext("怎麼又是你，我不太喜歡與新人一起工作。");
		}
		}
	if (status == 1)
		qm.sendPrev("我也沒辦法啊，是#b#p9120218##k說你這邊需要幫忙，我才過來協助調查。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.dispose();
}
}