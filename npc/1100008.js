/*
	����:	��³
	�؈D:	��ͷ&amp;lt;����ʥ��&gt;
	����:	200000161
*/

function start() {
	cm.sendYesNo("�@�Ҵ��A���_���}�أ����e����F��Ů��ϣ�{˹��ס�ču������㌦�Tʿ���dȤ������ȥ���e�����������N�ӣ����뵽�}��ȥ�᣿�Ƅӕr�g��s��#b2���#k���M����#b2000����#k.");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���ܺã�������ȥ�����[Ҳ���e����");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 2000) {
		cm.warp(200090020, 0);
		cm.gainMeso(-2000);
	} else {
		cm.sendOk("���S��y���ė��Ų�����");
		}
	cm.dispose();
}
}
