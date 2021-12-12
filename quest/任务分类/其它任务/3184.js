/*
	名字:	斯卡德的委托
	地圖:	冰峰雪域
	描述:	211000000
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
	if (qm.getQuestStatus(3184) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3184) == 1) {
		qm.sendYesNo("我讓你幫收集的#b#v4000051:##t4000051##k和#b#v4000052:##t4000052##k的尾巴都夠數了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4000051, -10);
		qm.gainItem(4000052, -10);
		qm.gainExp(5000);
		qm.dispose();
}
}
