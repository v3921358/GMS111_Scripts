/*
	名字:	决心
	地圖:
	描述:
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
		qm.sendNext("虽然这个回答有点没诚意，但是也许他说的是对的。",1033110);
	if (status == 1)
		qm.sendNextPrev("对我而言，和黑魔法师的激战就像是昨天的事情一样，但是对其他人来说，只不过是发生在几百年前，只有在历史书中才能看到的事情而已……",1033110);
	if (status == 2)
		qm.sendNextPrev("用来保护冒险岛世界的力量全部失去了。连对付#o0210100#都手忙脚乱的我，也许比普通村民都弱。",1033110);
	if (status == 3)
		qm.sendNextPrev("情况和以前不同了。之前我的身边有可靠的同伴，但现在什么人都没有……没有人……",1033110);
	if (status == 4)
		qm.sendNextPrev("但是……但是！就算是这样，我也必须站起来。因为我是国王，是因为黑魔法师的诅咒而困在冰里的百姓们的国王……",1033110);
	if (status == 5)
		qm.sendNextPrev("#b国王的词典里没有放弃两个字。#k",1033110);
	if (status == 6)
		qm.sendPrev("必须……把想要放弃的念头放弃。",1033110);
	if (status == 7){
		qm.forceStartQuest();
		qm.dispose();
}
}