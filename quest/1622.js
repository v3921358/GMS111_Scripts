/*
	����:	[ʮ������]л����������
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
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
	if (qm.getQuestStatus(1622) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1622) == 1) {
		qm.sendNext("���N�����㣬�Ҳ�̫ϲ�g�c����һ������");
		}
		}
	if (status == 1)
		qm.sendPrev("��Ҳ�]�k��������#b#p9120218##k�f���@߅��Ҫ��æ���Ҳ��^��f���{�顣\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.dispose();
}
}