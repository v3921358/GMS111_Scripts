/*
	����:	����·
	�؈D:	ʥ�ط���������
	����:	104020120
*/

function start() {
	cm.sendYesNo("�@�Ҵ��_�����؍u��#b�}��#k���r�g��s��#b1���#k���M����#b1000#k���ţ���Ҫ֧���M�ó˴��᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���ǂ�ꖹ➢�M���~��΢�L������ˮ�ġ������ġ���ס����F��Ů�ʵĵط���");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 1000) {
		cm.warp(200090030, 0);   //������-ʥ��
		cm.gainMeso(-1000);
	} else {
		cm.sendOk("��Ҳ��������^ȥ���������S��y���ė��Ų�����");
		}
	cm.dispose();
}
}