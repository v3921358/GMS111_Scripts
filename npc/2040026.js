/*
	����:	�����������ʯ
	�؈D:	�����32��
	����:	221021200
*/

function start() {
	if (!cm.haveItem(4001020)) {
		cm.sendOk("��Ҫ����#v4001020:#�������������ʯ��");
	} else {
		var chat = "���Ƿ�Ҫʹ��#v4001020:# ���͵� #b";
		chat += "\r\n#L0#�ۊW˹�� (70��)";
		chat += "\r\n#L1#�ۊW˹�� (1��)";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.gainItem(4001020,-1);
		cm.warp(221022100, 0);
		break;
	case 1:
		cm.gainItem(4001020,-1);
		cm.warp(221020000, 0);
		}
	cm.dispose();
}