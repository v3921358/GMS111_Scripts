/*
	����:	��ȱ�ٵ�ҩ��
	�؈D:	�ٲ���
	����:	251000000
*/

var status = -1;

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
	if (qm.getQuestStatus(3833) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3833) == 1) {
		qm.sendYesNo("�@��������Ҫ��#b#t04000294##k���ǳ����x��#b#h0##k�� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(7000);
		qm.dispose();
}
}