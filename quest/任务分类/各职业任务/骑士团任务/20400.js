/*
	����:	׷����ʿ�Ĺ켣
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("���ǵġ����@�N���f��׌���@���Ќ��������f���@���Tʿ�F�ēpʧ�ء�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�þò�Ҋ���@�Εr�g�����׃���ˡ�Ŀǰ�ʼ��Tʿ�F��ԓ�]�б���������Tʿ�ɡ�����Tʿ�F�LҲ�������мܲ�ס��...�f�ĵ��˞�ֹ���M�����}�ɡ�");
	if (status == 1)
		qm.sendNextPrev("�@���µ��΄ա���������ǰ�ռ������#r��ɫ���#k�ĳɆT��������D��Ů�ʲ������mȻ�Tʿ�F���ϼ��Tʿ#b#p1103000##k�ѽ���ȡ�Є��Է�δȻ�����Ǒ{���Լ�߀�Ǖ������y��");
	if (status == 2)
		qm.sendAcceptDecline("���y�u߀�У������؍u���B�Tʿ�F�����T����̫�t��ĵط��������Ҫ֧Ԯ�� ����ȥ֧Ԯ#p1103000#�᣿ ������һ�κ��҂�ϵ����#b#m211000000##k������ȥ���e����#p1103000#��");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}