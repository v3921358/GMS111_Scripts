/*
	����:	���յķ�Ӧ
	�؈D:	���
	����:	140000000
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
		qm.sendNext("");
	if (status == 1)
		qm.sendNextPrev("");
	if (status == 2)
		qm.sendPrev("");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}