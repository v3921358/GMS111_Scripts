/*
	名字:	过去的神木村
	地圖:	燃烧的神木村3
	描述:	272000300
*/

function enter(pi) {
	if (pi.isQuestFinished(31171)) {  //完成任务
		pi.warp(272000310,1); //燃烧的废墟
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}