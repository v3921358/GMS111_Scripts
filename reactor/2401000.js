/*
	����:	����֮Ѩ
	�؈D:	����������Ѩ
	����:	240060200
*/

function act() {
	rm.changeMusic("Bgm14/HonTale");
	rm.spawnMonster(8810026, 71, 260);
	rm.mapMessage("ɽ���u�Σ��¸���푣������������ن�.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}