/*
	����:	��������
	�؈D:	������Ϣ��
	����:	101050010
*/

function start() {
	if (cm.getPlayer().getJob() == 2300) {
		cm.sendYesNo("Ҫȥ��`����ľ��``Ҋ��᣿");
	} else {
		cm.sendOk("�������L�١�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�ҵć������ȴ�����ٴΚw��");
	} else {
		cm.warp(910150100,0);
		}
	cm.dispose();
}
