/*
	����:	����֮Ѩ
	�؈D:	���װ���������Ѩ
	����:	240060201
*/

function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810130, 71, 260);
    rm.mapMessage("ɽ���u�������¸���푣���y�ļ��β�ͱ��ن�����.");
	//rm.scheduleWarp(43200, 240000000);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}