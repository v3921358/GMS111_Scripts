/*
	����:	�ܿ˶�
	�؈D:	��ʦ֮��
	����:	610030010
*/

function start() {
	cm.sendYesNo("��Ҫȥ���ҵĴ�����");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(610030020,0);
		cm.removeAll(4001256);
		cm.removeAll(4001257);
		cm.removeAll(4001258);
		cm.removeAll(4001259);
		cm.removeAll(4001260);
		}
	cm.dispose();
}