/*
	名字:	冰雪岛
	地圖:	镜洞
	描述:	140030000
*/

function enter(pi) {
	if (pi.getQuestStatus(21201) == 1) {
		pi.warp(914021000, 1);  //大英雄铁匠铺
		pi.forceStartQuest(21203,"0");  //给予任务条件
	} else if (pi.getQuestStatus(21302) == 1) {
	if (pi.getPlayerCount(914022100) == 0 && pi.getPlayerCount(914022200) == 0) {
		pi.warp(914022100, 1);  //万仞悬崖
		pi.forceStartQuest(21203,"1");   //给予任务条件
		pi.getMap(914022100).resetFully();//地图刷新
		pi.spawnMobOnMap(9001013,1,-168,454,914022200);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}