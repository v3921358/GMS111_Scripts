/*
	名字:	[十字猎人]谢丽尔的提议
	地圖:	降魔十字旅团据点
	描述:	931050500
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 1) {
		qm.sendOk("你不是在說未來冒險島變成什麼樣子都不關你的事吧？ 你回去再想一想吧。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("你可能會對這件事感到震驚，但是你是否要效力於冒險島世界呢？\r\n#L0##b世界的和平？ 你這是指什麼？#l\n#k");
	if (status == 1)
		qm.sendAcceptDecline("我暫時不和你說詳細的事情，但是，至今我的行為古怪是為了考驗你的能力和未來的發展。 最後我發現你是一個不可多得的天才，你有沒有想過用你的才能保護世界呢？");
	if (status == 2){
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
		qm.sendYesNo("你就是我要等的那位新人？ 歡迎光臨！ 詳細情况找個安靜的地方再說吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.warp(931050500,0);
		qm.gainExp(10000);
		qm.dispose();
}
}