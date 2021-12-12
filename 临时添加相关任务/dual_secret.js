/*
	名字:	废弃都市
	地圖:	废都爵士酒吧
	描述:	103000003
*/

function enter(pi) {
	if (pi.isQuestActive(2369)) {
		pi.getMap(910350100).resetFully();//地图刷新
		pi.warp(910350100, 1);   //废都后街
		pi.spawnMobOnMap(9001019,5,-129,148,910350100);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]墙上有个洞");
}
}