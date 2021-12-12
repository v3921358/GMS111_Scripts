/*
	名字:	狮子王之城
	地圖:	城墙下4
	描述:	211060700
*/

function enter(pi) {
	if (pi.getQuestStatus(3143) == 1) {
		pi.getPlayer().updateQuestCustomData(3143,"1");
		pi.warp(211060800, 1);  //第四座塔
	} else {
		pi.warp(211060800, 1);  //第四座塔
}
}