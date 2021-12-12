/*
	名字:	骑士团要塞
	地圖:	要塞入口
	描述:	271030000
*/

function enter(pi) {
	if (pi.isQuestFinished(31125)) {//判断是否完成任务
		pi.warp(271030100, 4);
	} else {
		pi.playerMessage(5, '要塞的警戒强化了，无法入场。');  //31124 任务
}
}