/*
	����:	÷��
	�؈D:	רҵ������ׯ
	����:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
		cm.sendYesNo("���_��Ҫ�����Ʒ�u���᣿�㌢ʧȥ�����Ʒ�u�����/�ȼ���");
	} else {
		cm.sendYesNo("����W�Ʒ�u���᣿");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
			cm.sendOk("���ѽ����s�Ʒ���I������");
			cm.teachSkill(92030000, 0, 0);
		} else {
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
			cm.sendOk("�㲻�܌W�����������u����������ѽ���������g�򟒽��g��������]�В�V�g��");
			cm.dispose();
		} else {
			cm.sendOk("���ѽ��W�����Ʒ�u����");
			cm.teachSkill(92030000, 0x1000000, 0); //00 00 00 01
			}
			}
			}
		cm.dispose();
}