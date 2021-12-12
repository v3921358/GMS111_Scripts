/*
	名字:	奇怪的约翰
	地圖:	明珠港
	描述:	104000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("這件事情我不方便去做，所以請你幫助我。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("嘿！！！ 你能幫我個忙嗎？#b#p20000##k近來似乎有點奇怪。");
	if (status == 1)
		qm.sendNext("直到最近，他還經常對自己的關節炎愁眉苦臉，發牢騷，但他突然變得非常高興，滿臉笑容。");
	if (status == 2)
		qm.sendNextPrev("我感覺那個#p1204033#背後有個秘密。 你能偷偷地看看旁邊的木箱嗎#b#p1204033#？");
	if (status == 3)
		qm.sendPrev("你知道#p1204033#在哪裡，對嗎？ 他在右邊。 一直往前走，直到你看到#p20000#在哪裡，然後穿過懸掛的鯊魚和章魚，你就會看到#b#p1002103##k。#b#p1204033##k應該就在他旁邊。");
	if (status == 4){
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
		qm.sendOkS("#b箱子裡面只是一些普通用品，你也不必大驚小怪的！！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp",3);
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(100);
		qm.dispose();
}
}