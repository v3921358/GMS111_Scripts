/*
	名字:	狼的进化
	地圖:	群狼原野
	描述:	140010210
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("喚醒它吧！主人！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("哦，你的這只好朋友狼。。。你看，我感覺到在他的毛皮後面隱藏著某種力量。那是等待被喚醒的力量?");
	if (status == 1)
		qm.sendAcceptDecline("如果你想徹底擁有這股力量，就必須具備足够的能力才能喚醒它，你是否有這個决心？");
	if (status == 2)
		qm.sendPrev("現在的你應該有這個資格可以嘗試一下突破這個瓶頸，我也會幫助你的。");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendYesNo("主人！！ 請讓開，讓你看看瑪哈的强大威力!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1902018# 1 #t1902018#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(1902017, -1);
		qm.gainItem(1902018, 1);
		qm.dispose();
}
}