/*
	����:	����
	�؈D:	���ۿ�
	����:	140020300
*/

function start() {
	if (cm.haveItem(4032338)) {
		cm.sendYesNo("����ȥ�������𣿼�Ȼ����#v4032338:#,����ҿ�����������ȥ��");
	} else {
		var chat = "�����x�_������������؅^ȥ�᣿�@�e�Ĵ��_�������������Ⱥ�Ͽ��#b";
		chat += "\r\n#L0#������ (800)����";
		chat += "\r\n#L1#���Ⱥ�Ͽ(800)����";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.haveItem(4032338)) {
		cm.warp(200090070,0);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getMeso() > 800) {
			cm.warp(200090070,0);
			cm.gainMeso(-800);
		} else {
			cm.sendOk("�š�����_�J���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
			}
			break;
	case 1:
		if (cm.getMeso() > 800) {
			cm.warp(141000100,0);
			cm.gainMeso(-800);
		} else {
			cm.sendOk("�š�����_�J���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
			}
			}
		cm.dispose();
}