/*
	名字:	[十字猎人]另一个空间
	地圖:	奇怪的通道
	描述:	931050410
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
		qm.sendAcceptDecline("住在#e#r天空之城#m200050000##k#n的#b#p2032001##k邀請旅行者到自己家。似乎有什麼詭計，去找#p2032001#看看情况吧！");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}