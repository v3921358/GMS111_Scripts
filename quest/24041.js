/*
	名字:	诅咒的影响
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
		qm.sendNext("左手可以动……",1033110);
	if (status == 1)
		qm.sendNextPrev("右手也没问题……",1033110);
	if (status == 2)
		qm.sendNextPrev("腿也没事。",1033110);
	if (status == 3)
		qm.sendPrev("伤全都好了。只是等级……呃呃呃……好想哭……",1033110);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}