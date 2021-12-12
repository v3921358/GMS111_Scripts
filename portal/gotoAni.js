/*
	名字:	狮子王之城
	地圖:	第五座塔
	描述:	211061000
*/

function enter(pi) {
	if (pi.getQuestStatus(3142) == 1) {
	if (pi.getPlayerCount(211061100) == 0) {
		pi.resetMap(211061100);   //地图刷新
		pi.warpParty(211061100,1);  //阿尼的牢房
		pi.spawnMobOnMap(8210013,1,117,-580,211061100);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任務");
}
}
