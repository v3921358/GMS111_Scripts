/*
	����:	�����
	�؈D:	�ڶ����䳡
	����:	913001000
*/

function start() {
	cm.sendYesNo("��ʿ�ȼ�����ȫ�������ˣ�Ҫ�Ұ����ͳ�ȥ��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�������ҪһЩ�r�g��");
	} else {
		cm.warp(130020000, 0);
		}
	cm.dispose();
}