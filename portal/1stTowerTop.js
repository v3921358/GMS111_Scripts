/*
	名字:	狮子王之城
	地圖:	第一座塔
	描述:	211060200
*/

function enter(pi) {
	if (pi.getQuestStatus(3164) == 1 && pi.getPlayerCount(211060201) == 0) {
		pi.warp(211060201,1);  //第一座塔楼
		pi.resetMap(211060201);   //地图刷新
		pi.spawnMonster(8210010,1);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}