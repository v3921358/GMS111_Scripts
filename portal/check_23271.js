/*
	名字:	闪三之路
	地圖:	红沙沙漠
	描述:	260020300
*/

function enter(pi) {
	if (pi.getQuestStatus(23271) == 1) {
		pi.warp(926030010,1);  //沙漠偏僻角落2
		pi.getMap(926030010).resetFully();//地图刷新
		pi.spawnMobOnMap(9300457,1,802,199,926030010);//召唤怪物
		pi.spawnMobOnMap(9300458,1,689,220,926030010);//召唤怪物

	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}