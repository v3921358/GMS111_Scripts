/*
	����:	��Ҷ�ǳ��⳵
	�؈D:	��Ҷ��-��������
	����:	600000000
*/

function start() {
	if (cm.getMapId() == 600000000) {
		cm.sendYesNo("ֻ��Ҫ#b1000 ����#k�Ϳ��Ե�#b�[��լۡ�ⲿ#k��");
	} else {
		cm.sendYesNo("ֻ��Ҫ#b1000 ����#k�Ϳ��Ե�#b���~��#k��");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMeso() < 1000) {
			cm.sendOk("Ո�_�J�ǲ����� "+1000+" ���š�");
		} else {
			cm.gainMeso(-1000);
		if (cm.getMapId() == 600000000) {
			cm.warp(682000000, 1);
		} else {
			cm.warp(600000000, 0);
			}
			}
			}
		cm.dispose();
}
