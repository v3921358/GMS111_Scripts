/*
	名字:	神殿的深处
	地圖:	神的黄昏
	描述:	270050100
*/

function act() {
	rm.killAllMob();
	rm.spawnMonster(8820008);           //召唤品宾克
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
}
}