/*
	����:	��������
	�؈D:	ð�յ���ӪԱ
	����:
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
		qm.sendNext("��ã�ð�U�ҡ� ������ϵ�㣬������������V�㡣���y�����X��ÿ���˶����w�������᣿");
	if (status == 1)
		qm.sendNextPrev("��������������ʡ� ������������w�С���Ҫ�����������w����ԓ�ж�ã�");
	if (status == 2)
		qm.sendNextPrev("��ʲ�NͻȻ�f�@Щ�� �Ǻǣ�����п����������w�ķ���������dȤ�᣿");
	if (status == 3)
		qm.sendNextPrev("�������w�ǳ����Ρ� ֻҪ��#b�w�C#k���l�������������w�� �����e���ҵ��w�C��  �f���w�ІTλ�����������#b�̹يW��#k�ڳ����w�C��");
	if (status == 4)
		qm.sendAcceptDecline("��#b���y�u���}�ء���� �˹̹����߳ǡ����e���ء����ꡢ��ľ��#k������������Ҋ���̹يW����ȥҊҊ���ɡ�");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}
