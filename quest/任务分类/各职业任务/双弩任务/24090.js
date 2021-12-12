/*
	名字:	寻找孩子2
	地圖:	电站大厅
	描述:	310050000
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
	if (qm.getQuestStatus(24090) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24090) == 1) {
		qm.sendNext("#b(摇了摇昏过去的孩子的身体。不知道怎么回事，黑魔法师的诅咒已经解开了。身体也变温暖了……好像在呼吸。只是失去意识了吗？马上回村里去吧。)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.warp(310000000, 0);
		qm.dispose();
}
}
