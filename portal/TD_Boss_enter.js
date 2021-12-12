/*
	名字:	未来之城
	地圖:	2099年深夜港口仓库
	描述:	240070202
*/

function enter(pi) {
	if (pi.getMapId() == 240070202 && pi.getPlayerCount(240070203) == 0 && pi.getQuestStatus(3725) != 1) {
		pi.playPortalSE();
		pi.warpParty(240070203, 1);    //2099年深夜港口码头
	} else if (pi.getMapId() == 240070202 && pi.getPlayerCount(240070203) == 0 && pi.getQuestStatus(3725) == 1) {
		pi.playPortalSE();
		pi.resetMap(240070203);   //地图刷新
		pi.warpParty(240070203, 1);    //2099年深夜港口码头
		pi.spawnMobOnMap(7220005,1,570,392,240070203);//召唤怪物
	} else if (pi.getMapId() == 240070302 && pi.getPlayerCount(240070303) == 0 ) {    //2215年遭到攻击的城区商业街
		pi.playPortalSE();
		pi.resetMap(240070303);   //地图刷新
		pi.warpParty(240070303, 1);    //2215年遭到攻击的城区中心
	} else if (pi.getMapId() == 240070402 && pi.getPlayerCount(240070403) == 0) {      //2216年变成废墟的城市工地
		pi.playPortalSE();
		pi.resetMap(240070403);   //地图刷新
		pi.warpParty(240070403, 1);   //2216年变成废墟的城市地标
	} else if (pi.getMapId() == 240070502 && pi.getPlayerCount(240070503) == 0) {  //2230年危险的塔紧急出口
		pi.playPortalSE();
		pi.resetMap(240070503);   //地图刷新
		pi.warpParty(240070503, 1);   //2230年危险的塔画室
	} else if (pi.getMapId() == 240070602 && pi.getPlayerCount(240070603) == 0) {  //2503年天空战舰B区
		pi.playPortalSE();
		pi.resetMap(240070603);   //地图刷新
		pi.warpParty(240070603, 1);   //2503年天空战舰船尾
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}