/*
	名字:	无法醒来的人
	地圖:	埃欧雷
	描述:	101050000
*/

var status = -1;

function start(mode, type, selection) {
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
	if (status == 0)
		qm.sendNext("长老们的纯白净化不起作用的原因，想来想去只有一个。请冷静地听我说。#r黑魔法师的封印好像已经变弱，或者已经解开#k了。");
	if (status == 1)
		qm.sendNextPrev("想想其实很简单。从国王陛下醒来的事情，可以看到黑魔法师的诅咒出现了裂痕。而且通过不断的修炼，国王的力量正在逐渐恢复。");
	if (status == 2)
		qm.sendNextPrev("那样的话，我们种族的力量也会逐渐变强。但是其他人还是没能战胜诅咒。好像被什么阻挡了一样……");
	if (status == 3)
		qm.sendNextPrev("结论只有一个。#r黑魔法师的诅咒虽然出现了裂缝，但好像正在变强#k。");
	if (status == 4)
		qm.sendNextPrev("黑魔法师的诅咒变强，说明黑魔法师的封印正在变弱，他的力量正在回到冒险岛世界……只能这么解释。");
	if (status == 5)
		qm.sendPrev("结论是，现在的…………历经了数百年时间的冒险岛世界陷入了危机之中。危机的制造者正是黑魔法师。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(1000);
		qm.dispose();
}
}