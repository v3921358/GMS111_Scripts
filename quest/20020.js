/*
	名字:	5条岔路
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
		qm.sendNext("你已經達到了10級，說明你很努力。 很好。 你現在已經超出了初心者的境界，我認可你有正式成為修煉騎士的資格。 但在這之前，我想先問你一個問題。 你想選擇哪條騎士之路呢？");
	if (status == 1)
		qm.sendNextPrev("騎士之路不止一條。 在前面等待著你的，一共有五條路……選擇哪條路是你的自由。 但至少不要讓自己後悔。");
	if (status == 2)
		qm.sendAcceptDecline("我現在讓你再瞭解一下每個職業的特色，使你更明確選擇自己所將要發展的道路，想清楚之後，就去選擇心儀的#b騎士導師#k吧！");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest(20100);
		qm.warp(913040100, 0);
		qm.dispose();
}
}