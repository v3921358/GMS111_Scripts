/*
	����:	С��
	�؈D:	Σ�յ�׽�Բ�
	����:	931000001
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (cm.getInfoQuest(23999).indexOf("exp4=1") != -1) {
		cm.sendOk("�������������ˣ����Ե��ǹ��ɣ�");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendOk("�أ��������ˣ����⽿С���������ҵõ������ǲ���Ŷ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
	if (status == 1){
		cm.gainExp(3);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp4=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp4=1");
			}
		cm.dispose();
}
}