/*
	����:	�Ͱ�ѩ�˵�����
	�؈D:	��������
	����:	914022100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��衫#p1203001#���y�^��#p1203001#�����⡣#p1203001#����ޡ�������衫");
	if (status == 1)
		qm.sendNextPrevS("#b�������N�ˣ�");
	if (status == 2)
		qm.sendNextPrev("#p1203001#�����ˌ�ʯ#v4032339:#��# b���O��һ�ӵļt��ʯ#k�� �Y��#rС͵#k�s�ь�ʯ�o͵���ˡ�#p1203001#��ʯ�]�ˡ�#p1203001#���y�^����..");
	if (status == 3)
		qm.sendNextPrevS("#b���fС͵͵���˼t��ʯ?");
	if (status == 4)
		qm.sendAcceptDecline("���� ����һ�#p1203001#��ʯ�� ��Ҫ���܎����һ�#p1203001#��ʯ���ҕ��úô��x��ġ� Ҫ�ǎ���ץ��С͵����Ҳ�����x��ġ�");
	if (status == 5)
		qm.sendPrev("С͵���ǂ�����ȥ�ˡ� �ǂ������ǡ�������������֣�������������֡���#b��߅#k�� ����߅ȥ����ץ��С͵��");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}