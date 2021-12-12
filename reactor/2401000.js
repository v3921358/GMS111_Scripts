/*
	名字:	生命之穴
	地圖:	暗黑龙王洞穴
	描述:	240060200
*/

function act() {
	rm.changeMusic("Bgm14/HonTale");
	rm.spawnMonster(8810026, 71, 260);
	rm.mapMessage("山洞搖晃，嘎嘎作響，暗黑龍王被召喚.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}