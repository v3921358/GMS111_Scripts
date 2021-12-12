/*
	名字:	女皇之路
	地圖:	圣地
	描述:	130000000
*/

function enter(pi) {
	if (pi.getQuestStatus(20754) == 1) {
		pi.warp(913060000,2); //光之精灵之地
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}