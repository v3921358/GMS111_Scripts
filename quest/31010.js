/*
	����:	����Ƕ���
	�؈D:	��������
	����:	200100010
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
	if (qm.getQuestStatus(31010) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31010) == 1) {
		qm.sendOk("����������е�Ҏģ߀Ҫ�󣿶���һЩ���Ì����Č�����Ҫ���ص׵Ĝʂ���С�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(5000);
		qm.dispose();
}
}