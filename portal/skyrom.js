/*
	名字:	阿里安特
	地圖:	阿里安特宫殿&amp;lt;走廊&gt
	描述:	260000302
*/

function enter(pi) {
	if (pi.getQuestStatus(3935) == 1) {  //完成任务条件
	if (pi.getPlayerCount(926000010) == 0) { 
		pi.resetMap(926000010);   //地图刷新
		pi.warp(926000010, 0);  //王妃的宝物仓库
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}
