/*
	����:	����Ģ����Ѫ
	�؈D:	������ɽ
	����:	102020400
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24097) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24097) == 1) {
		qm.sendNext("����Ǳ���Ģ����Ѫ����");
		}
		}
	if (status == 1)
		qm.sendPrev("����ʲô������ʿ���Ҹ��㶫��������ûʲô�ø���İ��������������һ�������Ȱɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(700);
		qm.dispose();
}
}