/*
	����:	�׺���δ��������
	�؈D:	����ɽ��
	����:	100020000
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
		qm.sendNext("������Ĳ�����F���Һܸе���ο���F��������׌���Mȥ�ޟ����eԇ��һ�£������ͨ�^��򞣬�Ҿ��C�l����ʽ�M���ޟ�����ͨ���C�o�㡣");
	if (status == 1)
		qm.sendAcceptDecline("�����100ֻ#b�ޟ���Ģ����#k��\r\n#b(���δ�_��Ҫ����;�˳���Ո�����΄������½���)");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(910060100,1);
		qm.dispose();
}
}