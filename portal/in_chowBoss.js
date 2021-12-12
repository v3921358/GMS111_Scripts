/*
	名字:	艾琳森林
	地圖:	岩山洞穴
	描述:	300010410
*/

function enter(pi) {
	if (pi.getPlayerCount(300010420) == 0) { 
		pi.resetMap(300010420);   //地图刷新
		pi.warpParty(300010420, 1);  //洞穴深处
		//pi.spawnMobOnMap(5250004,1,409,93,300010420);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}
