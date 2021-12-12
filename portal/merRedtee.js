/*
	名字:	玩具城
	地圖:	时间之路&amp;lt;2&gt;
	描述:	220040100
*/

function enter(pi) {
	if (pi.getQuestStatus(24084) == 1) {
		pi.warp(922030100,1);  //红茶的陷阱
		pi.resetMap(922030100);   //地图刷新
		pi.spawnMobOnMap(9300432,1,-135, 492,922030100);//召唤怪物
	} else{
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}
