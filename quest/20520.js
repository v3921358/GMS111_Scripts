/*
	����:	��ʿ��Ʒζ
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ѽ�����50���ˣ��s߀�����Nµµ�o��᣿ �@�N�ߵĵȼ�߀�Ãɗl����·�����Tʿ��ƷζҲ̫������˰ɣ�");
	if (status == 1)
		qm.sendNextPrev("���Ʒζ��Ε��Ҳ��ܣ��@����ȥ��Ԓ��׌Ů�ʵ����u���ă��R���� �������صظ��V��һ���µ��YӍ�� �Ǿ���#b�����T��#k���P���YӍ�� �㑪ԓ�����dȤ�ɣ�");
	if (status == 2)
		qm.sendAcceptDecline("ð�U�Tʿ�F���Tʿ���Ќ��õ������T���� ����㌦�T�����dȤ��Ԓ��Ո��#b#m130000000##k�� �ҕ����V�����P���YӍ��");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}