/*
	����:	���ץ�����������
	�؈D:	ŵ����˹�ڲ�
	����:	120000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("�@���Ǟ����҂����I���� ��ɞ麣�I��������ʲ�N��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�š� �����Ǹ㲻������ ");
	if (status == 1)
		qm.sendNextPrev("����ǰ������֮��׽������ֵ�����s��֪��������ʲ�N�� �ǂ���ɢ�l������Ě�Ϣ����ԓ����ƽ��֮� �����M���{���M�й�����һ�¾͕���ʧ�������ڛ]ʲ�N������ �����ҵ��������m�ϡ�\r\n");
	if (status == 2)
		qm.sendAcceptDecline("���� ���ԇԇ���N�ӣ� ��������ԒҲ�S߀�����У� ��Σ� �벻��ԇһ�£�");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}