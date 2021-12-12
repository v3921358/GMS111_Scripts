/*
	名字:	莎翁小镇
	地圖:	玛加提亚
	描述:	261000000
*/

function enter(pi) {
	if (pi.getQuestStatus(23270) == 1) {
		pi.warp(926150000,1);  //卡帕莱特协会
	} else if (pi.isQuestFinished(23270) && !pi.isQuestFinished(23271)) {
		pi.warp(926150020,1);  //卡帕莱特协会
	} else if (pi.getQuestStatus(23271) == 1) {
		pi.warp(926150020,1);  //卡帕莱特协会
	} else {
		pi.warp(261000020,3);  //卡帕莱特协会
}
}