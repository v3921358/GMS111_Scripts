/*
	����:	аĦ˹�һصļ���
	�؈D:	аĦ˹�ķ���
	����:	211000002
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
		qm.sendNext("�ϴ�������ҵ�����ӛ�������ҵĴ�æ�� �F����֪����һЩ���Լ����P���¡� �����ҵľ���߀�Ǻܲ������� �F�ھ����mȻ������������֪��ʲ�N�r���֕�ʧ���� �����ӛ���ϵă��ݣ��Լ����[�s������������ǌ��ĵ�Ԓ����ԓ���зǳ�Σ�U������l���� ����Ҫ��Ď����� ������ң����ѡ�");
	if (status == 1)
		qm.sendAcceptDecline("�󡭡����ѣ� ʲ�N�r���аĦ˹׃�������˰��� ��߀��֪��аĦ˹�������ʲ�N�ء� �����������᣿ �������ӣ��Еr�g��Ԓ����ȥҊҊ#bаĦ˹��#k��");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}