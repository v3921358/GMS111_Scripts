/*
	����:	���Խ�ʬ
	�؈D:	����ѩ��
	����:	211000000
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
		qm.sendAcceptDecline("������һ��Ҋ��#b#p1103000##k�r������������{��#b#m211041100##k�ߵ��Ͻ��Ɣ�������������� �㑪ԓ�H��ȥ�������Ƿ����ҵ��κο��ܕ��l�F���м��ľ�����");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}