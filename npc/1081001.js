/*
	����:	����
	�؈D:	���߹���
	����:	120030000
*/

function start() {
	cm.sendYesNo("�����Ͼͻص��������ֻ��Ҫ1000��ң��ҾͿ��������ȥ��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���㿼�]���ف����Ұɣ�");
		cm.dispose();
	} else {
	if (cm.getPlayer().getMeso() >= 1000) {
		cm.gainMeso(-1000);
		cm.warp(104000000,0);
}
	cm.dispose();
}
}