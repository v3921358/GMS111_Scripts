/*
	����:	���¶�˹̹������
	�؈D:	���¶�˹̹
	����:	310000000
*/

function start() {
	if (cm.isQuestActive(23005) && cm.haveItem(4032783)) {
		cm.sendYesNo("����Ѻ������������԰��ϣ�");
	} else {
		cm.sendOk("���ǰ��¶�˹̹�����г������԰壬�κ��˶���������������");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.forceStartQuest(23006, "1");
		cm.gainItem(4032783, -1);
		cm.playerMessage(-1, "�������������԰��ϡ�");
		}
	cm.dispose();
}