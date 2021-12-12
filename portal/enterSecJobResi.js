/*
	名字:	黑色之翼领地
	地圖:	埃德尔斯坦
	描述:	310000000
*/

function enter(pi) {
	if (pi.getQuestStatus(23121) == 1) {
	if (pi.getPlayerCount(931000420) == 0) {
		pi.resetMap(931000420);   //地图刷新
		pi.warp(931000420, 1);   //危险！临时机场
	} else {
		pi.playerMessage("Being searched by someone else. Better come back later.");
	}
	} else if (pi.getQuestStatus(23023) == 1 || pi.getQuestStatus(23024) == 1 || pi.getQuestStatus(23025) == 1) {
		if (pi.getPlayerCount(931000100) == 0) {
		pi.resetMap(931000100);   //地图刷新
		pi.spawnNpc(2159100, -157, -23);//召唤npc
		pi.warp(931000100, 1);   //2次转职
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else if (pi.getQuestStatus(23141) == 1) {
		pi.warp(931000600, 1); 
	} else {
		pi.warp(310000010, 1);  //埃德尔斯坦临时机场
}
}