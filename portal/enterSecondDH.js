/*
	名字:	女皇之路
	地圖:	演武场入口
	描述:	130020000
*/

function enter(pi) {
	if (pi.getQuestStatus(20201) == 1 || 
		pi.getQuestStatus(20202) == 1 ||
		pi.getQuestStatus(20203) == 1 ||
		pi.getQuestStatus(20204) == 1 ||
		pi.getQuestStatus(20205) == 1) {
		pi.warp(913001000, 0);   //第二演武场
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}