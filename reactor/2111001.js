/*
	名字:	神秘岛
	地圖:	扎昆的祭台
	描述:	280030000
*/

function act() {
	rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);                    //召唤扎昆
	rm.mapMessage("紮庫姆被火焰之眼的力量召喚.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}
