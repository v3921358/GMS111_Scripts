/*
	����:	�����հ���
	�؈D:	�˼������Ĺ�԰
	����:	931000440
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
		qm.sendNext("�܇�����̫���o�ˡ��������˴����u���҆᣿ ��ѽ������Ȼ��͵�u���@�����^�� ��ɫ֮�����Щ��߀���Ǳ��ɡ������^�����l�� �Ҳ������@�N���釘���ģ�");
	if (status == 1)
		qm.sendNextPrevS("#b��#p2152010#��đ�Ӻ���ܴ󣬿���ȥ����һ�c�������¡���#k");
	if (status == 2)
		qm.sendNextPrev("��������ڣ����������ǲ����p��¶����ˡ� ����������ܽ�䡭�����ǵġ��������҂����O���֣�׌�����F����С� ���f�أ�");
	if (status == 3)
		qm.sendNextPrevS("#b�қ]�P�S�����^���أ� ������Ŀ�˿����㰡��# k");
	if (status == 4)
		qm.sendAcceptDecline("�ߣ������˼ҕ�����Щ�|�������᣿ �e���ġ� �������㱣�o�ң��Ҏ��ﺦ�£� ������Ƿ��������g����Ǳ�����ˡ� ���ˣ�������Ƨ�o�ĵط���һ�c��׌��ɫ֮�����");
	if (status == 5){
		qm.forceStartQuest();
		qm.playerMessage(5, '�����հ������ܳ�����ĺ�ɫ֮����˺����ڹ涨ʱ���ڲ������հ������£�');
		qm.playerMessage(-1, '���˺�ɫ֮�������հ�����');	
		qm.warp(931000441);
		qm.dispose();
}
}
