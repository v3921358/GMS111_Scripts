/*
	名字:	追随遗忘的记忆
	地圖:	射手村
	描述:	100000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("啊！！！ 原來是#b#h0##k。 沒想到很久之後還能看到你。 我很高興看到曾經是青澀的新手的你成為了出色的龍神。 看到很久不見但還記得我的你，我的心裡充滿了溫暖。 ");
	if (status == 1)
		qm.sendAcceptDecline("你是在尋找遺忘的記憶嗎？ 想起來那已經是很久很久以前的事了，事隔多年，真是讓人懷念啊。 這樣吧。 你再去#b旁觀者#k吧。 相信他會幫助你。 那麼再見…");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceStartQuest(7081,1);
		qm.dispose();
}
}