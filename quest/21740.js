/*
	����:	�����ߵ����֮�Ƿ�ӡʯ
	�؈D:	��³���鱨�̵�
	����:	104000004
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
		qm.sendNext("��؁��ˣ�Ӣ�ۡ� ��#m200000000#�������k�����N�ӣ� �_���Ǻͺ�ɫ֮�����P�ɣ� ��ʲ�N�����@�N���أ� �f��  ��");
	if (status == 1)
		qm.sendNextPrevS("#b���v�����P#m200000000#�ķ�ӡʯ�����顣��#k");
	if (status == 2)
		qm.sendNextPrev("�š�#m200000000#Ҳ�з�ӡʯ�������@���Ǻ���Ҫ��һ����� �m�f�������˺ܿ�ϧ���������ҵ������ڹ��㡣 �]�뵽��ɫ֮���@�����Ђ������");
	if (status == 3)
		qm.sendNextPrevS("��������");
	if (status == 4)
		qm.sendNextPrev("�������� ���������@�ӡ�#p1201000#�@���ֽ��x������#b�¼���#k�� ��ȥ#b#m140000000#ҊҊ#p1201000#��#k�������B#m200000000#����ϢҲһ�����^ȥ��");
	if (status == 5)
		qm.sendPrev("#b#p1201000##kҲ���¼������P�ˣ����Ҍ��Ӣ�����������^���ǂ�������]���˱�#p1201000#���t�⣬���ԑ�ԓ������#p1201000#��ͨ������������Ҳ����������");
	if (status == 6){
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
		qm.sendNext("�����ܾò�Ҋ�ˡ�#b#h0##k�� �@�Εr�g�ޟ���߀�ðɣ� �����Ұl�F���µļ��������؁��ء�����؁�����Ǖr��");
	if (status == 1)
		qm.sendNextPrevS("#b����#p1201000#�v�����P���֮�Ƿ�ӡʯ�����顣��#k");
	if (status == 2)
		qm.sendNextPrev("���֮�Ƿ�ӡʯ������ԭ����ˣ��@�¿��Կ϶���ɫ֮���Ŀ�˹�Ȼ�Ƿ�ӡʯ�����ҷ�ӡʯ��ֹһ���� �@��һ������Ҫ�����");
	if (status == 3)
		qm.sendNextPrevS("#b�����^��ӡʯ�������ˡ���");
	if (status == 4)
		qm.sendNextPrev("��ɫ֮��ĺ���֮ǰ���ѽ��_ʼ���ʂ��ˡ� �@�N�����҂��ܵõ�#t4032323#���ѽ����f���ˡ� �F�ڌ�����ԣ��W�����ܸ���Ҫ��");
	if (status == 5)
		qm.sendPrev("�F������Ҫ�ľ���׌������׃��ǿ������ �P춷�ӡʯ�����Һ����������Pע���أ�������߀�ǌ���Ӗ���ɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7604 exp");
	if (status == 6){
		qm.forceCompleteQuest();
		qm.gainExp(7604);
		qm.dispose();
}
}