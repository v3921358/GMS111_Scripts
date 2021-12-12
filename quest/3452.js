/*
	名字:	机器章鱼是外星生物？
	地圖:	司令室
	描述:	221000300
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
	if (qm.getQuestStatus(3452) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3452) == 1) {
		qm.sendOk("謝謝你帶過來的#i4000099:#，對我接下去的研究很有幫助。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/5/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  7500 exp");
		}
		}
	if (status == 2){
		qm.forceCompleteQuest();
		qm.removeAll(4000099);
		qm.gainExp(7500);
		qm.dispose();
}
}