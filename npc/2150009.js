/*
	����:	�칷
	�؈D:	��ͷ&amp;lt;�������¶�˹̹&gt;
	����:	200000170
*/

function start() {
	cm.sendYesNo("���뵽��� �˹̹ȥ���M����800���š�����ȥ��Ԓ���Ϳ��c�ςz��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�����㲻̫ϲ�g��İ���ĵط�ȥ���С�");
		cm.dispose();
	} else {
	if(cm.getPlayer().getMeso() >= 800) {
		cm.warp(200090600, 0);
		cm.gainMeso(-800);
	} else {
		cm.sendOk("�š�����_���Լ���#b800#k���ņ᣿Ո����_�����_�Jһ���¡������Ԓ������ȥ���X���R�ɡ�");
		}
	cm.dispose();
}
}