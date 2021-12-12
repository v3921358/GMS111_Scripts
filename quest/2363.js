/*
	名字:	暗影双刀 - 觉醒的时刻
	地圖:	雪姬的房间
	描述:	103050101
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
	if (qm.getPlayer().getLevel() <= 20) {
		qm.sendNext("请20级以后再来找我吧。");
		cm.dispose();
	} else {
		qm.forceCompleteQuest();
		qm.changeJob(430);
		qm.gainItem(4032616, -1);
		qm.gainItem(1342000, 1);
		qm.forceCompleteQuest();
		qm.sendNext("从现在开始，你就是#b#e见习刀客#n#k了。你应该为此感到自豪。");
		}
		}
	if (status == 1)
		qm.sendPrev("你用的新武器也发放给你了，比之前的武器应该好用得多，希望你能好好使用。");
	if (status == 2){
		qm.dispose();
}
}
