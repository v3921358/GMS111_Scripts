/*
	����:	��ʿ��Ʒ��
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
		qm.sendNext("���N���@�ӡ����㵽��100�����T��߀����ͨ#t1902005#�᣿ ����Ę���t�ˡ� ���X���@���ܱ��ָ߼��Tʿ��Ʒζ�᣿");
	if (status == 1)
		qm.sendNextPrev("����ÿ���˶��������f�����@�N�О���oŮ�ʵ����u���Ӱ푡� ϣ�����Ů�����룬�������_���Єӡ� ��ȥҊҊ#b#p1102002##k���������V��#b��ǿ���T��#k�����顣 ");
	if (status == 2)
		qm.sendAcceptDecline("��ԓ��������#p1102002#��λ�ðɣ����� ���������˰ɣ� ������B#t1902005#��������#b#m130010220##k��");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}