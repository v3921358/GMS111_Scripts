/*
	����:	���|
	�؈D:	רҵ������ׯ
	����:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendYesNo("���_��Ҫ�������᣿�㌢ʧȥ������콛�/�ȼ���");
	} else {
		cm.sendYesNo("����W���F���᣿");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
			cm.sendOk("���ѽ����s��쌣�I������");
			cm.teachSkill(92020000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
			cm.sendOk("�㲻�܌W���������죬������ѽ������o����ˇ�򟒽��g��������]�В�V��");
			cm.dispose();
		} else {
			cm.sendOk("���ѽ��W����쌣�I������");
			cm.teachSkill(92020000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}