/*
	����:	�����
	�؈D:	�Ѻʹ�
	����:	801000000
*/

function start() {
	cm.sendYesNo("�����M���Æ᣿��̫���� "+300+" ���š�");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("��Ո�����ف��ˡ�");
		}
	if (mode == 1) {
		if (cm.getMeso() < 300) {
			cm.sendOk("Ո�_�J�ǲ����� "+300+" ���š�");
		} else {
			cm.gainMeso(-300);

		if (cm.getPlayerStat("GENDER") == 0) {
			cm.warp(801000100);
		} else {
			cm.warp(801000200);
			}
			}
			}
		cm.dispose();
}