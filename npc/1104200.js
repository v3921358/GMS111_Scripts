/*
	����:	���µ���ʿ
	�؈D:	��ħŮ�Ķ�Ѩ
	����:	924010100
*/

function start() {
	if (cm.getPlayerCount(913030000) == 0) {
		cm.sendYesNo("�죡 �r�g�����ˣ�������������ħ�������}�أ���ȥ��ֹ�����l����һ�У�");
	} else {
		cm.sendOk("�����������c�����Tʿ���Y�С�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���y����ӛ���Լ���؟���چ᣿");
	} else {
		cm.warp(913030000, 0);
		cm.spawnNpc(1104002,-430, 88);
		}
	cm.dispose();
}