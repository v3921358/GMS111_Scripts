/*
	����:	˫����
	�؈D:	ȼ�յķ���
	����:	272000310
*/

function start() {
	if (cm.isQuestActive(31174) && cm.haveItem(4033082)) {
		cm.sendOk("#b(ͻȻ�_ʼ�l�⣬�p���`�ı������׃���ˡ� �@�Ӿ����ˆ᣿)#k");
	} else {
		cm.sendOk("#�܂��е��p���`��׌���úû֏ͣ�#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033082, -1);
		cm.forceStartQuest(31186,"1");
		}
	cm.dispose();
}
