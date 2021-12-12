/*
	名字:	卡帕莱特协会会长的考试
	地圖:	玛加提亚
	描述:	261000000
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
	if (qm.getQuestStatus(3301) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3301) == 1) {
		qm.sendYesNo("我想要的#v4020005:#寶石收集到了麼？");
		}
		}
	if (status == 1){
	if (qm.haveItem(4020005)) {
		qm.sendOk("嗯……很不錯，正是我想要的#v4020005:# \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	} else {
		qm.sendOk("我需要兩個#v4020005:#……別跟我開玩笑……");
		qm.dispose();
		}
		}
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4020005, -2);
		qm.gainExp(3000);
		qm.dispose();
}
}