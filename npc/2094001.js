/*
	����:	�ٲ���
	�؈D:	���ĸ�л
	����:	925100600
*/

function start() {
	var chat = "���ѡ�� \r\n#b";
	chat += "\r\n#L0#�x�_�@�e";
	chat += "\r\n#L1#���Q#v1002571:##t1002571#";
	chat += "\r\n#L2#�M�A#v1002572:##t1002572#";
	chat += "\r\n#L3#�M�A#v1002573:##t1002573#";
	chat += "\r\n#L4#�M�A#v1002574:##t1002574#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.removeAll(4001117);
		cm.removeAll(4001120);
		cm.removeAll(4001121);
		cm.removeAll(4001122);
		cm.warp(251010404, 0);
		break;
	case 1:
		if (!cm.canHold(1002571)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001455, 20)) { //TODO JUMP
			cm.gainItem(1002571,1);
			cm.gainItem(4001455, -20);
			cm.sendOk("���Q�ɹ���Ո�ú����#v1002571:#");
		} else {
			cm.sendOk("���Q#v1002571:#��Ҫ20��#v4001455:##b#t4001455##k��");
			}
			break;
	case 2:
		if (!cm.canHold(1002572,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(1002571) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002571,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002572, 1);
			cm.sendOk("�M�A�ɹ���Ո�ú����#v1002572:#");
		} else {
			cm.sendOk("�M�A#v1002572:#��Ҫһ��#v1002571:#+20��#v4001455:##b#t4001455##k��");
			}
			break;
	case 3:
		if (!cm.canHold(1002573,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(1002572) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002572,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002573, 1);
			cm.sendOk("�M�A�ɹ���Ո�ú����#v1002573:#");
		} else {
			cm.sendOk("�M�A#v1002573:#��Ҫһ��#v1002572:#+20��#v4001455:##b#t4001455##k��");
			}
			break;
	case 4:
		if (!cm.canHold(1002574,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(1002573) && cm.haveItem(4001455, 20)) {
			cm.gainItem(1002573,-1);
			cm.gainItem(4001455, -20);
			cm.gainItem(1002574, 1);
			cm.sendOk("�M�A�ɹ���Ո�ú����#v1002574:#");
		} else {
			cm.sendOk("�M�A#v1002574:#��Ҫһ��#v1002573:#+20��#v4001455:##b#t4001455##k��");
			}
			}
		cm.dispose();
}