/*
	����:	��³
	�؈D:	���
	����:	130000210
*/

function start() {
	cm.sendYesNo("�_�����؍u#b���֮��#k�Ĵ��R�Ͼ�Ҫ�𺽣�·�̴����#b2���#k���M����#b2000#k���ţ���Ҫ֧���M�ó˴��᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���N�� ��߀����Ҫ�����}�؆᣿ ������ȥ������ف�ɡ�");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 2000) {
		cm.warp(200090021, 0);   
		cm.gainMeso(-2000);
	} else {
		cm.sendOk("���S��y���ė��Ų�����");
		}
	cm.dispose();
}
}
