/*
	����:	���Ĵ��鱨�ռ����
	�؈D:	����֮��
	����:	105000000
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
		qm.sendNext("�mȻ��#b#m102010100##k�ҵ�����ż���ĸ����أ��������߀�ǲ�Ҫ�p�e���ӣ���ԓ��ȥ�c#b#p1002104##k�����������");
	if (status == 1)
		qm.sendAcceptDecline("Ŷ���ȵȣ��� ���������ˡ� ������߅��#b#p1061006##k�ˆ᣿ �������ā�v��Ԕ�������ʲݵ،����y�߰���ķ�̖���ܿ�����#b��Ѩ���ܴa#k��������^ȥ�м��������f��������ʲ�N�l�F��");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}