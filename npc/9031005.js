/*
	����:	������
	�؈D:	רҵ������ׯ
	����:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendYesNo("���_��Ҫ���������g�᣿�㌢ʧȥ���П����g���/�ȼ���");
	} else {
		cm.sendYesNo("����W�����g�᣿");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("���ѽ����s�����g������");
			cm.teachSkill(92040000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92000000) <= 0) {
			cm.sendOk("�㲻�܌W������������g��������ѽ��������������ˇ��������]�в�ˎ��");
			cm.dispose();
		} else {
			cm.sendOk("���ѽ��W���˟����g������");
			cm.teachSkill(92040000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}