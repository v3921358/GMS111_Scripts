/*
	名字:	骑士团要塞
	地圖:	骑士团第1区域
	描述:	271030100
*/

function enter(pi) {
	if (pi.isQuestFinished(31125)) {//判断是否完成任务
		pi.warp(271030000, 1);  //要塞入口
	} else {
		pi.warp(271030010, 2);  //要塞入口
}
}