/*
	名字:	尤塔家
	地圖:	前院
	描述:	100030102
*/

function enter(pi) {
	if (pi.isQuestActive(22008)) {
		pi.warp(100030103, "west00");  //后院
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}