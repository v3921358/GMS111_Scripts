/*
	名字:	玩具城
	地圖:	天空露台&amp;lt;5&gt;
	描述:	220011000
*/

function enter(pi) {
	if (pi.getQuestStatus(22583) == 1) {  //完成任务条件
		if (pi.getPlayerCount(922030011) == 0) { 
			pi.warp(922030010,1);  //天台
			pi.resetMap(922030011);   //地图刷新
			pi.forceCompleteQuest(22583);
			pi.showInstruction("暂未修复此任务，任务完成", 150, 5);
		} else {
			pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
			}
	} else if (pi.getQuestStatus(22584) == 1) {
		if (pi.getPlayerCount(922030020) == 0 && pi.getPlayerCount(922030022) == 0) {
			pi.warp(922030020,1);  //天台
			pi.resetMap(922030022);   //地图刷新
		} else {
			pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
			}
	} else {
		pi.warp(220011001,1);  //天空晒台
}
}