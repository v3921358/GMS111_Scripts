/*
	名字:	金银岛
	地圖:	六岔路口
	描述:	104020000
*/

function enter(pi) {
	if (pi.getQuestStatus(24079) == 1) {
	if (pi.getPlayerCount(910510400) == 0) {
		pi.resetMap(910510400);   //地图刷新
		pi.warp(910510400,1);  //漂浮的林中之城
		pi.spawnMobOnMap(9300431,1,650, 236,910510400);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else{
		pi.warp(105000000,6);  //林中之城
}
}
