/*
	����:	׷�������ļ���
	�؈D:	���ִ�
	����:	100000000
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
		qm.sendNext("�������� ԭ����#b#h0##k�� �]�뵽�ܾ�֮��߀�ܿ����㡣 �Һܸ��d�������������������ֵ���ɞ��˳�ɫ������ �����ܾò�Ҋ��߀ӛ���ҵ��㣬�ҵ����e��M�˜�ů�� ");
	if (status == 1)
		qm.sendAcceptDecline("�����ڌ����z����ӛ���᣿ ���������ѽ��Ǻܾúܾ���ǰ�����ˣ��¸����꣬����׌�ˑ���� �@�Ӱɡ� ����ȥ#b���^��#k�ɡ� �������������㡣 ���N��Ҋ��");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceStartQuest(7081,1);
		qm.dispose();
}
}