/*
	����:	��żʦ������
	�؈D:	��������
	����:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("�]��đ�����Ҋ���N�� �Ǻǣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("Ī������ǰ������#b#m101000000##k�؅^�{���ҵ��ǂ��ˣ� �K��ҵ����ˣ� �������ҵú����֪࣬���᣿");
	if (status == 1)
		qm.sendNextPrevS("#b�㵽�����l��");
	if (status == 2)
		qm.sendAcceptDecline("�ң� ����֪����Ԓ�́��ҵĶ��߰ɡ� ����ú��д���һ���� �c�����ܰ��o���������Ƅӵ��Ҽҡ� �������e���㣡");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(910510200, 0);
		qm.dispose();
}
}
