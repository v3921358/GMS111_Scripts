/*
	����:	�ࡤ�װ�
	�؈D:	�Ӽ���
	����:	211070100
*/

function start() {
	cm.sendAcceptDecline("�ゃ�ǁ���ҵ���ʿ�᣿�������Ƿ��ڷ����˵ģ����������l����������҂��_���˴˵�Ŀ�ģ��͛]�б�Ҫ�f�ġ���.\r\n���c���ゃ�@Щɵ��!");
}

function action(mode, type, selection) {
	if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.removeNpc(cm.getMapId(), 2161000);
		cm.spawnMob(8840010, 0, -181);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
		}
		}
	cm.dispose();
}