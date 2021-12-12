/*
	名字:	消失的骑士
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("(講述了尋找#b#p1103000##k所發生的一切經過)",3);
	if (status == 1)
		qm.sendNextPrev("情况真是這樣的嗎？ #b#p1103000##k打算繼續他的旅程？ 那不可能，在此之前，有進一步的訓示要他詳細說明任務的進展的情况。");
	if (status == 2)
		qm.sendAcceptDecline("我有不好的预感！現在你快返回#b#m924010000##k，再仔细探明下，看看还有其它的发现吗？如果那裡真的沒有其它東西，再次回来報告。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100000 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(100000);
		qm.dispose();
}
}