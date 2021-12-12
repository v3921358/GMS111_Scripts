/*
	名字:	第一个任务的结果
	地圖:	天空之城
	描述:	200000000
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
		qm.sendNext("嗯？ 你找我有什麼事嗎？ 那種悲壯的表情……嗯？#m200000000#的植物有沒有迅速生長？ 咦？ 你是怎麼知道的？ 你是從哪裡聽到的嗎？");
	if (status == 1)
		qm.sendNextPrev("是的，發生過那種事。#b由於#o4230105#突然變大，我們遇到了很大的麻煩#k。 還好有個路過的冒險家（那人身上還感覺到一種非凡的力量）幫助調查並解决了這件事，現在已經沒有問題了。");
	if (status == 2)
		qm.sendPrev("你怎麼這副表情？ 事情已經解决了，用不著擔心了……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(28135);
		qm.dispose();
}
}