/*
	名字:	封印的确认
	地圖:	长老公馆
	描述:	211000001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("什麼？ 你的腦袋是不是有問題？ 竟然相信邪摩斯的話，要直接去確認？\r\n#L0##b不，不是相信……只是覺得他太可憐了……如果放著不管，他一定會在妄想的折磨下死掉的。#l\n#k");
	if (status == 1)
		qm.sendAcceptDecline("可憐？！ 你！ 一點都不瞭解邪摩斯！！\ r\n不，等等。 雖然我為你在邪摩斯身上浪費時間而感到遺憾……不過如果你堅持要去，去看看也可以。 但是絕對不能碰封印，知道了嗎？");
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
		qm.sendOk("我剛剛有過去#b#m921121000##k去看了一下#p2022008#的情况，它還是依然被封印在哪裡。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(7000);
		qm.dispose();
}
}
