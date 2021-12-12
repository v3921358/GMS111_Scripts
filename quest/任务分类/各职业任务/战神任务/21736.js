/*
	名字:	调查天空之城
	地圖:	特鲁的情报商店
	描述:	104000004
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
		qm.sendNext("好久不見了，英雄大人。期間等級升了不少啊？看來努力修煉了啊，勤奮啊，像英雄的出色的表現啊。#b#p1201000##k是不是很高興？");
	if (status == 1)
		qm.sendNextPrev("啊，現在不是說這個的時候。情報收集範圍只在維多利亞島覺得不足，為了擴大開始調查了艾納斯大陸。最初是#b#m200000000##k但找對了。");
	if (status == 2)
		qm.sendAcceptDecline("艾納斯大陸的#m200000000#地區發生了奇怪的事情。 雖然不是什麼人偶師所為，但古怪的感覺似乎與黑色之翼的風格如出一轍。 請去#m200000000#看看。");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}