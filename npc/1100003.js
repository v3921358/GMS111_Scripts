/*
	����:	����·
	�؈D:	���
	����:	130000210
*/

function start() {
	cm.sendYesNo("�����x�_�}�أ�ǰ�������؅^�᣿ ������Ҍ����ˡ��@�Ҵ��_�����y�u��#b ����·��# k�� �r�g��s��#b 1 ���# k�� �M����#b1000#k ���ţ���Ҫ֧���M�ó˴��᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���������}��߀����Ҫ�k��������ȥ���y�u���ف����Ұɡ�");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 1000) {
		cm.warp(200090031, 0);   
		cm.gainMeso(-1000);
	} else {
		cm.sendOk("ι���ȵȡ� ����X���񲻹������M����#b1000#k���š���");
		}
	cm.dispose();
}
}