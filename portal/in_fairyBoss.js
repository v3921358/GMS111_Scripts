/*
	名字:	艾琳森林
	地圖:	蝴蝶精森林2
	描述:	300030300
*/

function enter(pi) {
	if (pi.getPlayerCount(300030310) == 0) {
		pi.resetMap(300030310);   //地图刷新
		pi.warpParty(300030310, 1);  //女王藏身处     pi.openNpc(2133005);   取消npc
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}