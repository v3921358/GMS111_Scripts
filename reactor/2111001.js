/*
	����:	���ص�
	�؈D:	�����ļ�̨
	����:	280030000
*/

function act() {
	rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);                    //�ٻ�����
	rm.mapMessage("����ķ������֮�۵������ن�.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}
