/*
	����:	ľ�������
	�؈D:	�����
	����:	104000000
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
		qm.sendSimple("(ľ���e������·������ˎ��)������   \r\n\r\n#b#L0# ����ð��@�����o�s����������ʲ�N#k");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4032423,1);
		qm.dispose();
}
}
