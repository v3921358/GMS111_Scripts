/*
	����:	��ϲ
	�؈D:	��ϲ�Ĳ��Կռ�1
	����:	910100110
*/

function start() {
	cm.sendYesNo("�����������@�e��ȥ�ˆ᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���c�� ����c��� ������@");
	} else {
		cm.warp(101030000,0);
		}
	cm.dispose();
}