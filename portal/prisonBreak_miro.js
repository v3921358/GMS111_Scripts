/*
	名字:	秘密地图
	地圖:	黑暗之塔1
	描述:	921160300
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
	var cleared = java.lang.Math.random() > 0.9;
	if (cleared) {
		pi.warpParty(921160400);  //通往中央监狱的秘密门
	} else {
		pi.warp(921160300 + ((Math.floor(java.lang.Math.random() * 6) | 0) * 10), 0);  //黑暗之塔1
		}
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}