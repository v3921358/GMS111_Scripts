/*
	名字:	埃欧雷的精灵
	地圖:	伟大精灵降临
	描述:	910150100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("哦, 精灵王 " + qm.getPlayer().getName()+" 啊！");
	if (status == 1)
		qm.sendNextPrev("你是曾经的英雄。");
	if (status == 2)
		qm.sendPrev("希望你能继续延续这份意志。");
	if (status == 3){
		qm.forceStartQuest();
		qm.gainItem(1142337,1);
		qm.dispose();
}
}