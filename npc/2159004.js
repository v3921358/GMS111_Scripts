/*
	����:	���￨
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
	if (cm.getInfoQuest(23999).indexOf("exp2=1") != -1) {
		cm.sendOk("�ҵ��s�������ˆ᣿ ���ஔ�y�Ұɣ� �����ҵĵط�ȫ���ҿ�ࡣ�");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendNext("���l�F�ˆ᣿ ���������Ҷ�ĵط�̫���ױ��ҵ��ˆ᣿");
	if (status == 1)
		cm.sendPrev("�ҵ��s�������ˆ᣿ ���ஔ�y�Ұɣ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
	if (status == 2){
		cm.gainExp(5);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp2=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp2=1");
			}
			cm.dispose();
}
}