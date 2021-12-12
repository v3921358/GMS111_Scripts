/*
	名字:	女皇之路
	地圖:	演武场入口
	描述:	第一演武场
*/

function enter(pi) {
	if (pi.getQuestStatus(20701) == 1) {
		pi.warp(913000000, 1);   //第一演武场
	} else if (pi.getQuestStatus(20702) == 1) {
		pi.warp(913000100, 1);   //第一演武场
	} else if (pi.getQuestStatus(20703) == 1) {
		pi.warp(913000200, 1);   //第一演武场
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}