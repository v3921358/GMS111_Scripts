/*
	����:	���ĸ������ʯ
	�؈D:	�����1��
	����:	221020000
*/

function start() {
	if (cm.haveItem(4001020)) {
		cm.sendYesNo("���Ƿ�Ҫʹ��#v4001020:# ���͵�#m221021200# �أ�");
	} else {
		cm.sendOk("����Ҫ��#v4001020:# �ſ��Ԇ��ӡ�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4001020, -1);
		cm.warp(221021200, 3);
		}
	cm.dispose();
}