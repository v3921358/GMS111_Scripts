/*
	名字:	彩虹岛
	地圖:	冒险家修炼场入口
	描述:	1010000
*/

function enter(pi) {
	if (pi.getQuestStatus(1041) == 1) {
		pi.warp(1010100, 4);   //冒险家修炼场1
	} else if (pi.getQuestStatus(1042) == 1) {
		pi.warp(1010200, 4);   //冒险家修炼场2
	} else if (pi.getQuestStatus(1043) == 1) {
		pi.warp(1010300, 4);   //冒险家修炼场3
	} else if (pi.getQuestStatus(1044) == 1) {
		pi.warp(1010400, 4);   //冒险家修炼场4
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}