/*
	����:	��ɭ
	�؈D:	������ͷ
	����:	120020400
*/

function start() {
	if (cm.getChar().getMapId() != 120020400 ) {
		cm.sendYesNo("���뷵��#m120020400#��");
	} else {
		var chat = "���뵽�⸽���ĺ���ι�һ����\r\n#b";
		chat += "\r\n#L0##m912050000#��800���ţ�";
		chat += "\r\n#L1##m912050001#��900���ţ�";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getChar().getMapId() != 120020400 ) {
		cm.warp(120020400);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getMeso() < 800) {
			cm.sendOk("�š�����_�J���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
		} else {
			cm.gainMeso(-800);
			cm.warp(912050000,0);
			break;
			}
	case 1:
		if (cm.getMeso() < 800) {
			cm.sendOk("�š�����_�J���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
		} else {
			cm.gainMeso(-800);
			cm.warp(912050001,0);
			break;
			}
			}
		cm.dispose();
}