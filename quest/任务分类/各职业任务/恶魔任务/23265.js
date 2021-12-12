/*
	名字:	成功了一半？
	地圖:	秘密广场
	描述:	310010000
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
	if (qm.getQuestStatus(23265) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23265) == 1) {
		qm.sendOk("你找到了#v4032972:#。 謝謝！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1200000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4032972, -1);
		qm.gainExp(1200000);
		//qm.warp(931050212, 0);
		qm.dispose();
}
}
