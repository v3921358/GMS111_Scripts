/*
	名字:	冰封谷
	地圖:	万年冰河洞穴
	描述:	921120300
*/

function act() {
	rm.getReactor().forceTrigger();
	rm.getReactor().delayedDestroyReactor(1000);
	rm.mapMessage("Rex has been summoned.");
	rm.spawnMonster(9300281);
}