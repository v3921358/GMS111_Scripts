/*
	����:	Elevator Computer
	�؈D:	Alien Base Elevator
	����:	610040300
*/

function start() {
	if (cm.haveItem(4033192, 1)) {
		cm.sendYesNo("�ѵ������������ʿ�¡����������Ҫ��ȥ��");
	} else {
		cm.sendOk("ȱ��#b#v4033192:##z4033192##k���޷����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033192, -1);
		cm.warp(610040800,0);
		}
	cm.dispose();
}
