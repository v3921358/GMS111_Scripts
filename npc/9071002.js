/*
	����:	÷��
	�؈D:	���﹫԰
	����:	951000000
*/

function start() {
	var chat = "Welcome to  #b#m951000000##k\r\n#b";
	chat += "\r\n#L0#���Q#v4001514:##t4001514#";
	chat += "\r\n#L1#���Q#v4001516:##t4001516#";
	chat += "\r\n#L2#���Q#v4001522:##t4001522#";
	chat += "\r\n#L3#ُ�I#v4001514:##t4001514#";
	chat += "\r\n#L4#ُ�I#v4001516:##t4001516#";
	chat += "\r\n#L5#ُ�I#v4001522:##t4001522#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.canHold(4001514,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001513,10)) {
			cm.gainItem(4001514,1);
			cm.gainItem(4001513, -10);
			cm.sendOk("Ո�úÊ���#v4001514:#�ڴ��´ι��R��");
		} else {
			cm.sendOk("#v4001514:#���ȯ����Ҫ10��#v4001513:##b#t4001513##k");
			}
			break;
	case 1:
		if (!cm.canHold(4001516,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001515,10)) {
			cm.gainItem(4001516,1);
			cm.gainItem(4001515, -10);
			cm.sendOk("Ո�úÊ���#v4001516:#�ڴ��´ι��R��");
		} else {
			cm.sendOk("#v4001516:#���ȯ����Ҫ10��#v4001515:##b#t4001515##k");
			}
			break;
	case 2:
		if (!cm.canHold(4001522,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.haveItem(4001521,10)) {
			cm.gainItem(4001522,1);
			cm.gainItem(4001521, -10);
			cm.sendOk("Ո�úÊ���#v4001522:#�ڴ��´ι��R��");
		} else {
			cm.sendOk("#v4001522:#���ȯ����Ҫ10��#v4001521:##b#t4001521##k");
			}
			break;
	case 3:
		if (cm.getMeso() < 100000 || !cm.canHold(4001514,1)){
			cm.sendOk("Ո�鿴�Ƿ����㹻�ė��Ż��� ETC ���ѝM��");
		} else {
			cm.gainItem(4001514,1);
			cm.gainMeso(-100000);
			cm.sendOk("�x�x����ڴ�����´ι��R��");
			}
			break;
	case 4:
		if (cm.getMeso() < 200000 || !cm.canHold(4001516,1)){
			cm.sendOk("Ո�鿴�Ƿ����㹻�ė��Ż��� ETC ���ѝM��");
		} else {
			cm.gainItem(4001516,1);
			cm.gainMeso(-200000);
			cm.sendOk("�x�x����ڴ�����´ι��R��");
			}
			break;
	case 5:
		if (cm.getMeso() < 300000 || !cm.canHold(4001522,1)){
			cm.sendOk("Ո�鿴�Ƿ����㹻�ė��Ż��� ETC ���ѝM��");
		} else {
			cm.gainItem(4001522,1);
			cm.gainMeso(-300000);
			cm.sendOk("�x�x����ڴ�����´ι��R��");
			}
			}
		cm.dispose();
}