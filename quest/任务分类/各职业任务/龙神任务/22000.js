/*
	����:	��ֵ���
	�؈D:	����
	����:	100030101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 7) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("˯�úÆᣬ#b#h0##k��");
	if (status == 1)
		qm.sendNextPrevS("#b�š�����Ҳ˯�úÆ᣿");
	if (status == 2)
		qm.sendNextPrev("����... �����������ƺ��]��˯�úܺá�������������Z¡¡�W늽��ӵľ��ʡ����@�ӆ᣿");
	if (status == 3)
		qm.sendNextPrevS("#b���ǣ�������������������һ����ֵĉ���");
	if (status == 4)
		qm.sendNextPrev("��ֵĉ���������ʲ�N����");
	if (status == 5)
		qm.sendNextPrevS("#b���ǰ���");
	if (status == 6)
		qm.sendNextPrevS("#b(�f�������F����Ҋ���ĉ���)");
	if (status == 7)
		qm.sendAcceptDecline("�ǺǺǺǣ����᣿��ĺÅ�����߀�Û]��ץȥ�Ե��� ��Ȥ�ĉ�Ҳ���Ժ�#p1013101#������ԓ���ܰ���");
	if (status == 8)
		qm.sendPrev("#b#p1013101##k�����ȥ�o�CȮ�ԣ�ǰ�� #b#m100030102##k�ˡ���ļ��e�����߾��ܿ����ˡ�");
	if (status == 9){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/1/0", 1);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendSimple("ร������ˣ�#h0#���۾����N�к���Ȧ�ģ��㶼�]˯�᣿\r\n\r\n#b#L0#���f��������ֵĉ���ʲ�N���أ����������F�ĉ�᣿");
	if (status == 1)
		qm.sendPrev("�۹�����~ ���᣿�Ǻ܅���������Ү�����ǉ��e��]�г��Fһ�b���᣿ ��������~\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/2/0", 1);
		qm.gainExp(20);
		qm.dispose();
}
}