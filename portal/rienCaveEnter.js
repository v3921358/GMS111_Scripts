/*
	名字:	冰雪岛
	地圖:	冰封原野
	描述:	140010200
*/

function enter(pi) {
	if (pi.isQuestFinished(21302)) {
		pi.warp(140010210,1);  //群狼原野
	} else{
		pi.warp(140030000,1);  //镜洞
}
}
