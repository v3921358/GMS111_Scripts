/*
	����:	��һ������
	�؈D:	ѵ�������
	����:	310010010
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23240) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23240) == 1) {
		qm.sendNext("#h0#�����������á��Ҹ���������ߵ�����\r\n��Ȼ���Ϊ�˷����ߣ������Ժ�ᾭ������ġ�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("���ˣ�Ҫ�Ұѵ�һ����������������Ѿ���Ϊ�˷�����ѵ�������Ҳ������̫�ѵ�����ġ�׼�����˵Ļ��������˵��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23129, "1");
		qm.gainExp(200);
		qm.dispose();
}
}
