/*
	����:	˹����
	�؈D:	רҵ������ׯ 
	����:	910001000
*/

function start() {
	if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendSimple("\r\n#b#L0#���s��ˎ(�㌢ʧȥ���в�ˎ���/�ȼ�)#l\r\n#L1#100��#v4022023:#����#v2028066:##l");
	} else {
		cm.sendSimple("\r\n#b#L0#�W����ˎ#l\r\n#L1#100��#v4022023:#����#v2028066:##l");
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
			cm.sendOk("Ո�ȷ������/����u��/�����g��");
		} else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
			cm.sendOk("�㲻�܌W���������ˎ��������ѽ����˒�V��");
		} else if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
			cm.sendOk("���ѽ����s��ˎ���I������");
			cm.teachSkill(92000000, 0, 0);
		} else {
			cm.sendOk("���ѽ��W����ˎ���I������");
			cm.teachSkill(92000000, 0x1000000, 0); //00 00 00 01
			if (cm.canHold(1502000,1)) {
			cm.gainItem(1502000,1);
			}
			}
			break;
	case 1:
		if (!cm.haveItem(4022023, 100)) {
			cm.sendOk("����Ҫ100��#v4022023:#��ˎ��");
		} else if (!cm.canHold(2028066, 1)) {
			cm.sendOk("Ո�v��һЩ���g��");
		} else {
			cm.sendOk("�x�x�㌦��ˎ��ؕ�I��");
			cm.gainItem(2028066, 1);
			cm.gainItem(4022023, -100);
			} 
			}
		cm.dispose();
}