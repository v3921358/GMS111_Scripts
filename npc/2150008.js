/*
	����:	�칷
	�؈D:	���¶�˹̹��ʱ����
	����:	310000010
*/

function start() {
	var chat = "�����x�_��� �˹̹���������؅^ȥ�᣿�@�e�Ĵ��_���S�����������֮�ǡ��M����800���š�����ȥ���e��\r\n#b";
	chat += "\r\n#L0#�S������";
	chat += "\r\n#L1#���֮��";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (cm.getMeso() < 800) {
		cm.sendOk("�š�����_�J���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
	} else {
		if (selection == 0){
			cm.gainMeso(-800);
			cm.warp(200090710, 0);
			}
		if (selection == 1){
			cm.gainMeso(-800);
			cm.warp(200090610, 0);
			}
			}
		cm.dispose();
}