/*
	名字:	又一块封印石的情报
	地圖:	弓箭手培训中心
	描述:	100000201
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
		qm.sendNext("#b#h0##k……#b#h0##k，我就知道一定會再見到你的。 因為你是個信守諾言的人。 我相信你什麼時候一定會來找我的，所以一直在等著你……");
	if (status == 1)
		qm.sendNextPrevS("#b（#p2131000#幸福地笑了。）#k");
	if (status == 2)
		qm.sendNextPrev("那時沒能給你的信，終於可以交給你了。 過了這麼長時間，信已經很舊了……但應該還可以看。");
	if (status == 3)
		qm.sendNextPrev("我雖然很想和你多說會兒話，但現在我擔任轉職官的功能工作，所以沒有時間。 你以後再來找我吧。");
	if (status == 4)
		qm.sendNextPrev("能幫上你的忙，我感到很高興。 我的朋友…");
	if (status == 5)
		qm.sendPrevS("#b（從#p2131000#那裡收到了信……信裏是什麼內容呢？和#p1002104#一起看看吧。）#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4032328# 1 #t4032328#",3);
	if (status == 6){
		if(!qm.canHold(4032328, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(4032328, 1)) qm.gainItem(4032328, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}