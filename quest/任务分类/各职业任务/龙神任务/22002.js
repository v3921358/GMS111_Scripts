/*
	����:	�����������
	�؈D:	ǰԺ
	����:	100030102
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
		qm.sendNext("����o#p1013102#���ˆ᣿���N#b#h0##k��Ҳ�����͡�����������#v2022620:##t2022620#�����ó����ˡ����H������㲻��æ�Ö|���o#p1013102#�ԣ�����Ҳ������׌�����͡�");
	if (status == 1)
		qm.sendAcceptDecline("���ҕ��o��#b������#k�ԣ�����֮��ȥ�ҋ�������������Ҫ����������");
	if (status == 2)
		qm.sendPrevS("#b(���f��Ԓ����֮�ȳ��� #t2022620#�ٻؼ�ȥ��)#k \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2022620# 1 #t2022620#",3);
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/3/0", 1);
		qm.gainItem(2022620, 1);
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
		qm.sendAcceptDecline("���^����ˆ᣿#h0#�����N���Ԏ͋���һ��æ�� ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1003028# #t1003028# 1�� \r\n#i2022621# #t2022621# 5�� \r\n#i2022622# #t2022622# 5�� \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/4/0", 1);
		qm.gainItem(1003028, 1);
		qm.gainItem(2022621, 5);
		qm.gainItem(2022622, 5);
		qm.gainExp(60);
		qm.dispose();
}
}