/*
	����:	ղķ˹������(3)
	�؈D:	�������
	����:	106021201
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
		qm.sendNext("�٣��x�x��o�Ҏ���#b#t4001317##k��");
	if (status == 1)
		qm.sendPrev("�Ҵ��㴩��#b#t4001317##k���@�e���ܡ�ϣ�������ЙC��߀����Ҋ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1900 exp");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(1900);
		qm.dispose();
}
}

