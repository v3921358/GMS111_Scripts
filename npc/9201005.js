/*
	����:	����˿��Ů
	�؈D:	�Y��С�
	����:	680000000
*/

function start() {
	if (cm.getPlayer().getMapId() == 680000000) {
		cm.sendYesNo("��Ҫȥ�Y��Y�Æ᣿");
	} else {
		cm.sendYesNo("��Ҫ��ȥ�Y��С悆᣿");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("������˿����S�r�����^ȥ��");
		}
	if (mode == 1) {
		if (cm.getPlayer().getMapId() == 680000000) {
			cm.warp(680000200);
		} else {
			cm.warp(680000000);
			}
			}
		cm.dispose();
}