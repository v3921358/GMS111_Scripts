/*
	����:	�޽ܺ�ƻ��
	�؈D:	С��ţ
	����:	20000
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
		qm.sendNext("�ˣ����N�ˆ᣿ �����_�ܣ����Խ���һЩ���õ�֪�R");
	if (status == 1)
		qm.sendNextPrev("�㆖�Ҟ�ʲ�N���@�᣿ ��������#r����Ҫ�̌���Щ���M��֮�Y��ð�U�߂���");
	if (status == 2)
		qm.sendAcceptDecline("���ԡ�..׌�҂������c��Ȥ��~��");
	if (status == 3){
		if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
		}
		qm.sendPrev("Ո��#b#v2010007:##t2010007##k����Ȼ��\r\n�ҵȵȕ��o��#r����С�Y��#k�� Ո�ձ����°��� ʹ�������׃�ø����ѡ� ���_���ęڣ�������һ���O���ܺ��εģ���һ���I�P��#bI#k������ร�");
		}
	if (status == 4){
		qm.forceStartQuest();
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
	if (status == 0) {
	if (qm.getPlayerStat("HP") < 50) {
		qm.sendOk("��߀�]���ҽo����O���Ե������s������ف����Ұɡ�");
		qm.dispose();
	} else {
		qm.sendOk("�㿴���ǲ��Ǻܺ��Σ� ��������҂ȵęڱ����O��#b���I#k�� �������� �������ɣ� ร�ÿ��һ�Εr�g��Ѫ���͕��֏��ˡ� �mȻ�ܻ��r�g�����ú��\�õ�Ԓ���Ԏ������ٵġ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n#i2010000# 3 #t2010000#\r\n#i2010009# 3 #t2010009# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(2010000, 3);
		qm.gainItem(2010009, 3);
		qm.gainExp(10);
		qm.dispose();
}
}