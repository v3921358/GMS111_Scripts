/*
	����:	׷�������ļ���
	�؈D:	��ħ����
	����:	��ħ����
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
		qm.sendNext("���뱻�������ļ��䣬�ҵ������������ů.",2153006);
	if (status == 1)
		qm.sendPrev("���������Ѿ��Ǻܾúܾ���ǰ�����ˣ��¸����꣬�������˻����",2153006);
	if (status == 2){
		qm.forceStartQuest();
		qm.forceStartQuest(7081,1);
		qm.dispose();
}
}