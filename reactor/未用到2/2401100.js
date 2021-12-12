/*
	名字:	生命之穴
	地圖:	进阶暗黑龙王洞穴
	描述:	240060201
*/

function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810130, 71, 260);
    rm.mapMessage("山洞搖晃著，嘎嘎作響，混亂的尖角尾巴被召喚出來.");
	//rm.scheduleWarp(43200, 240000000);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}