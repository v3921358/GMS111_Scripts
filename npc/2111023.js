/*
	����:	ħ��������
	�؈D:	��ħ��ʦ���о���
	����:	261040000
*/

function start() {
	if (cm.getQuestStatus(334500) == 1 && cm.getQuestStatus(334501) == 1 && cm.getQuestStatus(334502) == 1) {
	if (cm.haveItem(4031739, 1) && cm.haveItem(4031740, 1) && cm.haveItem(4031741, 1)) {
		cm.gainItem(4031739, -1);
		cm.gainItem(4031740, -1);
		cm.gainItem(4031741, -1);
		cm.getPlayer().updateQuestCustomData(3345,"4");
	} else {
		cm.sendOk("ħ�����Ҫ�Ȇ�����������ħ��ꇡ� �K�y��һ��#v4031739:#һ��#v4031740:#һ��#v4031741:#��");
		}
	cm.dispose();
}
}