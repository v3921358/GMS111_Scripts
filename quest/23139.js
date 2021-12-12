/*
	名字:	搜集解毒草
	地圖:	反抗者本部
	描述:	310010000
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
	if (qm.getQuestStatus(23139) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23139) == 1) {
		qm.sendYesNo("#b#v4033093:##t4033093##k找回來拉？做得非常好！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3200 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(3200);
		qm.dispose();
}
}
