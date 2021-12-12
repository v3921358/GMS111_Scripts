/*
	名字:	制作红珠玉
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(21302) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21303) == 2) {
		qm.sendNext("啊！ 這、這是……你終於想起製作#t4032312#的方法了？ 啊啊……這就是為什麼你再笨再健忘，我也依然對你不離不棄……哎呀，現在不是說這些的時候！ 快把寶石給我！ ");
		}
		}
	if (status == 1)
		qm.sendPrev("好了，#t4032312#的力量應該可以恢復了，你的能力也需要再喚醒一些。 現在你的等級升高了不少，可以被喚醒的能力也更多了！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142131#  #t1142131# ");
	if (status == 2){
		if(!qm.canHold(1142131, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.removeAll(4032312);
		qm.gainItem(1142131,1);
		qm.changeJob(2111);
		qm.dispose();
}
}