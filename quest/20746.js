/*
	名字:	帮手
	地圖:	圣地
	描述:	130000000
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
	if (qm.getQuestStatus(20746) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20746) == 1) {
		qm.sendOk("騎士團的成員？是#b#p1101002##k派你過來的嗎？ 如果你想瞭解這裡的情况，就必須要先協助我的調查，希望你能做好這件事情！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}