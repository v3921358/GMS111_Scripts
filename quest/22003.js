/*
	����:	�ͱ㵱
	�؈D:	����
	����:	100030101
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
		qm.sendAcceptDecline("ȥ�r��������#b�ְ�#k���ˎ��㮔���T����ʹ���#b#m100030300##k�İְ� #b#v4032448:##t4032448##k���^ȥ��");
	if (status == 1){
		if (!qm.haveItem(4032448))
		qm.gainItem(4032448, 1);
		qm.sendNextPrev("������#h0#��Ȼ�ǂ��Ժ���~ ���N���̏�#b��������һֱ����߅#k�ߡ��ְֶ��ӑ�ԓ���I�ˣ���Ą���Ҫ�졣");
		}
	if (status == 2)
		qm.sendPrev("�����С�İѱ㮔Ū���ˣ�Ҫ���̻ؼҡ��ҕ��َ����һ����");
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/5/0", 1);
		qm.dispose();
}
}