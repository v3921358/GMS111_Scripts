/*
	名字:	试图逃脱
	地圖:	电站大厅
	描述:	310050000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23951) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23951) == 1) {
		qm.sendNext("有什麼事嗎？");
		}
		}
	if (status == 1)
		qm.sendNextPrev("嗯，這個……那個，沒有職位更高的人了嗎？");
	if (status == 2)
		qm.sendNextPrev("你是在嘲笑我是兔子嗎？ 就算是兔子，我的地位也比你高！ 快點用敬語，冷靜地把準確的情况告訴我！");
	if (status == 3)
		qm.sendNextPrev("裡面發現了被破壞的#o6150000#！ 有入侵者！");
	if (status == 4)
		qm.sendYesNo("你說什麼？ 怎麼現在才說？ 我們趕緊去看看！ 跟著我！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 99395 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainItem(4000608, -30);
		qm.gainExp(99395);
		qm.warp(310050200, 1);
		qm.dispose();
}
}
