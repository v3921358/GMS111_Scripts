/*
	����:	ŵ��
	�؈D:	רҵ������ׯ
	����:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendSimple("\r\n#b#L0#������V(�㌢ʧȥ���В�V���/�ȼ�)#l\r\n#L1#100�K#v4011010:#����#v2028067:##l");
	} else {
		cm.sendSimple("\r\n#b#L0#�W����V#l\r\n#L1#100�K#v4011010:#����#v2028067:##l");
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("Ո�ȷ������/����u��/�����g��");
		} else if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
			cm.sendOk("�㲻�܌W���������V��������ѽ��в�ˎ�ˡ�");
		} else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
			cm.sendOk("���ѽ����s��V���I������");
			cm.teachSkill(92010000, 0, 0);
		} else {
			cm.sendOk("���ѽ��W����V���I������");
			cm.teachSkill(92010000, 0x1000000, 0); //00 00 00 01
			if (cm.canHold(1512000,1)) {
			cm.gainItem(1512000,1);
			}
			}
			break;
	case 1:
		if (!cm.haveItem(4011010, 100)) {
			cm.sendOk("����Ҫ100�K#v4011010:#�Vʯ��Ƭ��");
		} else if (!cm.canHold(2028067, 1)) {
			cm.sendOk("Ո�v��һЩ���g��");
		} else {
			cm.sendOk("�x�x�㌦��V���I��ؕ�I��");
			cm.gainItem(2028067, 1);
			cm.gainItem(4011010, -100);
			}
			}
		cm.dispose();
}