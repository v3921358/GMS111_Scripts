/*
	名字:	冰雪岛
	地圖:	里恩修炼场入口
	描述:	140010100
*/

function enter(pi) {
	if (pi.getQuestStatus(21701) == 1) {
		pi.warp(914010000, 1);  //修炼场1
	} else if (pi.getQuestStatus(21702) == 1) {
		pi.warp(914010100, 1);  //修炼场2
	} else if (pi.getQuestStatus(21703) == 1) {
		pi.warp(914010200, 1); //修炼场3
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}