/*
	����:	��ӡ��Ժ���
	�؈D:	�¼�������
	����:	250020100
*/

function start() {
	if (cm.isQuestActive(21747)) {
		cm.sendOk("��ʂ�ֺ�ɫ֮��������ˆ᣿���Ҍ���������^ȥ��");
	} else {
		cm.sendOk("��Ҫ�y������ֻ�Ǹ����ӡ�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getPlayerCount(925040100) == 0) {
		cm.warp(925040100,1);
		cm.getMap(925040100).resetFully();//��ͼˢ��
		cm.spawnMonster(9300351,831,51);
	} else {
		cm.sendOk("�������������ִ������");
		}
	cm.dispose();
}
}