/*
	����:	�����Ӣ��3ת
	�؈D:
	����:
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
		qm.sendYesNo("��������֮��˫���顭�����Ѿ��߱����ʸ����������ù���֮����", 1033210);
	if (status == 1){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.changeJob(2312);
		qm.dispose();
}
}