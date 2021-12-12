/*
	名字:	仍未结束的修炼
	地圖:	圣地
	描述:	130000000
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
		qm.sendAcceptDecline("#b#h0##k，這段時間學習很多技能了嗎？應該相當熟悉了吧…所以現在要學習#b新的技能了嗎？");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}