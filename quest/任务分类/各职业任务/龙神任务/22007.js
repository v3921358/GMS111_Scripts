/*
	����:	�ռ���
	�؈D:	ǰԺ
	����:	100030102
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
	if (qm.getQuestStatus(22007) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22007) == 1) {
		qm.sendYesNo("Ŷ��#b#v4032451:##t4032451##k�Á��ˆ᣿ ��ѵ��o�Ұɡ� �ҁ�������������");
		}
		}
	if (status == 1)
		qm.sendPrev("�������� ��֪���@���׿����Á��ʲ�N������\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/9/0" , 1);
		qm.gainItem(4032451, -1);
		qm.gainExp(360);
		qm.dispose();
}
}
