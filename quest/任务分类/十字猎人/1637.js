/*
	名字:	[十字猎人]业务报告
	地圖:	神木村
	描述:	240000000
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
		qm.sendAcceptDecline("時空門肯定和黑魔法師有關係。 他通過操縱時空門吸取怪物們的氣息！ 但是為什麼要這樣呢？ 難道是為了給冒險島世界製造混亂嗎？ 不管怎樣，趕緊把這一情況報告給#b格萊特#k吧。 我還要再調查幾個地方，所以你先回#b#m310000000##k報告吧。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendAcceptDecline("在神木村發現了什麼嗎？還是繼續先找個安靜的地方在說。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 164200 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.warp(931050500,0);
		qm.gainExp(164200);
		qm.dispose();
}
}
