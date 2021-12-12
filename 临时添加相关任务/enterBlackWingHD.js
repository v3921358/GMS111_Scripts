/*
	名字:	干路
	地圖:	矿石效率
	描述:	310040210
*/

function enter(pi) {
	if (pi.getQuestStatus(1041) == 1) {
		pi.warp(931000630, 1);    //格里梅尔实验室入口
	} else if (pi.getQuestStatus(20741) == 1) {
		pi.forceStartQuest(20743,"1");
		pi.warp(931000650, 1);    //格里梅尔实验室入口
	} else {
		pi.warp(931050720, 1);    //实验室内部
}
}
