/*
	名字:	魔法密林
	地圖:	魔法密林
	描述:	101000000
*/

function enter(pi) {
	if (pi.getQuestStatus(20718) == 1) {    //当前任务条件
		pi.warp(910110000, 1); //魔法图书馆
	} else {
		pi.warp(101000003, 8);  //魔法密林图书馆
}
}