/*
	名字:	最后的任务
	地圖:	进阶扎昆的祭台
	描述:	280030001
*/

function act() {
	rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnChaosZakum(-10, -215);
	rm.mapMessage("混沌紮庫姆被火焰之眼的力量召喚.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}
