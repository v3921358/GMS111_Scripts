/*
	����:	����
	�؈D:	ũ������
	����:	100030300
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
		qm.sendNext("�ţ� ��ʲ�N�ᣬС���c�� �ց�Ͱְ֎ֻ�᣿ ��.....��ȥ��Ӗ��#o1210111#�� ��ѽ�� �]�܂��ɣ�");
	if (status == 1)
		qm.sendAcceptDecline("�Ǿͺá� �����@�ӕ���Σ�U��������ҪС�ġ� �������ˡ����������á� ���܎Ͱְ���һ�ˆ᣿");
	if (status == 2)
		qm.sendNext("���#o1210111#��������͑�ԓ���^ȥ��#t4032453#���ܲ��ܰ��r���^ȥ�ˡ� ��ȥ�o#b#m100000000##k��#b#p1012003##k���^ȥ�ɡ�");
	if (status == 3)
		qm.sendPrev("���Žo������Y�ѽ��f�ú������ˣ���ֻҪ�і|�����^ȥ���С� ���푪ԓ��ȥ�ģ������ܑ���Σ�U����������׌��ȥ��ԓҲ�]���}�ˡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i4032455# 1 #t4032455#");
	if (status == 4){
		if(!qm.haveItem(4032455, 1)) qm.gainItem(4032455, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}