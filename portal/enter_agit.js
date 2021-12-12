/*
	名字:	天空中的克里赛
	地圖:	克里塞入口
	描述:	200100000
*/

function enter(pi) {
	if (pi.isQuestFinished(31001)) {  //完成任务条件
		pi.warp(200100010, 0);  //克里塞村
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}