/*
	����:	�����������
	�؈D:	��һ����
	����:	105030000
*/

function start() {
	cm.sendYesNo("����ȥ��繭�����ޟ����᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���e�������еĺõط�");
	} else {
		cm.warp(910500000,0);
		}
	cm.dispose();
}