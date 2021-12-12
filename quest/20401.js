/*
	名字:	打猎僵尸
	地圖:	冰峰雪域
	描述:	211000000
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
		qm.sendAcceptDecline("我最後一次見到#b#p1103000##k時，他最近正在調查#b#m211041100##k高地上僵屍數量激增的情况。 你應該親自去看看，是否能找到任何可能會發現他行迹的線索。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}