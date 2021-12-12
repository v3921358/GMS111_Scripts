/*
	名字:	反抗者本部
	地圖:	训练室入口
	描述:	310010010
*/

function enter(pi) {
	if (pi.getQuestStatus(23238) == 1) {
		pi.warp(931050200,1);    //训练房间仓库
		pi.resetMap(931050200);   //地图刷新
		pi.spawnMobOnMap(9300456,1,400, -4,931050200);//召唤怪物
	} else{
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}
