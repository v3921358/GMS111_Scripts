/*
	����:	��������
	�؈D:	���������ļ�̨
	����:	280030001
*/

function act() {
	rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnChaosZakum(-10, -215);
	rm.mapMessage("���缙��ķ������֮�۵������ن�.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}
