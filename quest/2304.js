/*
	名字:	危机中的蘑菇王国
	地圖:	航海室
	描述:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0  ||  status == 3) {
		qm.sendOk("如果你考慮好了，請隨時來找我。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("現在你的强大了許多，我有一件事情想找你幫忙，你是否願意聽聽？");
	if (status == 1)
		qm.sendNext("故事發生在蘑菇王國，具體的事情我也不太清楚。 但是好像很緊急。");
	if (status == 2)
		qm.sendNextPrev("我不知道事情的細節，所以想找你幫幫忙，你可能會節省更多的時間幫助蘑菇王國，我送你一封信，請你把它交給門衛。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
	if (status == 3)
		qm.sendYesNo("如果你現在想去蘑菇城堡的話，我可以送你去。 你確定要去嗎？");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(4032375, 1);
		qm.warp(106020000, 0);
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
		qm.sendNext("嗯……這個從轉職教官那裡得來的#v4032375:#嗎？");
	if (status == 1)
		qm.sendPrev("好吧，既然你有轉職教官的推薦信，我想你是一個很棒的人，很抱歉我沒有自我介紹，我是包圍蘑菇城堡的衛兵，正如你所看到的，這裡是我們暫時的藏身之地，我們的情况很糟糕，儘管如此，歡迎你來到蘑菇王國！");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2311,"1");
		qm.gainItem(4032375, -1);
		qm.dispose();
}
}