/*
	名字:	妖精森林
	地圖:	国王休息处
	描述:	101050010
*/

function enter(pi) {
	if (pi.getQuestStatus(24040) == 1) {
		pi.warp(101050000,7);//埃欧雷
		pi.forceStartQuest(24093,"1");
	} else {
		pi.warp(101050000,7);//埃欧雷
}
}