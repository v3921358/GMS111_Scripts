/*
	����:	������������
	�؈D:
	����:	����
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��Ӛ�ˡ� ���ˣ� �҂���ȥ���аɣ�ֱ�������p����#o2220100#�r��ֹ���޾���");
	if (status == 1)
		qm.sendAcceptDecline(" �f�@�������ޟ��������Ǿ��w������҂����������߀��ȥ��#b#p1012003##k��������");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}