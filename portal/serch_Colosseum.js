/*
	名字:	天空中的克里塞
	地圖:	角斗场入口
	描述:	200101000
*/

function enter(pi) {
	if (pi.isQuestFinished(31010)) {  //完成任务条件
		pi.warp(200101100, 1);  //角斗场走廊1
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}