/*
	����:	����
	�؈D:	Σ�յ�׽�Բ�
	����:	931000001
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (cm.getInfoQuest(23999).indexOf("exp1=1") != -1) {
		cm.sendOk("�ҵ����Y�������ˆ᣿ ���������؄e���㣬���м����҆᣿");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendNext("���� ���l�F�ˣ�");
	if (status == 1)
		cm.sendNextPrev("�衭������㵽�V܇�e�棬�����^�M��ȥ��");
	if (status == 2)
		cm.sendPrev("�ҵ����Y�������ˆ᣿ ���������؄e���㣬���м����҆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
	if (status == 3){
		cm.gainExp(5);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp1=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp1=1");
			}
			cm.dispose();
}
}