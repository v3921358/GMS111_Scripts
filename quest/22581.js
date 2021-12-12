/*
	名字:	在接到秘密团体的第三个任务之前
	地圖:
	描述:	黑色影子
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
		qm.sendAcceptDecline("前兩次任務你的優异表現，讓組織提供了不少便利，現在的你足够有資格繼續邁進，想不想要更深入瞭解我們這個秘密團體。");
	if (status == 1)
		qm.sendPrev("那就來#b#m220000300##k的#b#m922030000##k。 我在那裡等著你。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}