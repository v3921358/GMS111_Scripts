/*
	名字:	诺特勒斯
	地圖:	寝室
	描述:	912060500
*/

function enter(pi) {
	if (pi.getQuestStatus(2570) == 1) {
		pi.warp(120000100,"bi01");
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}