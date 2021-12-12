/*
	名字:	妖精森林
	地圖:	埃欧雷
	描述:	101050000
*/

function enter(pi) {
	if (pi.getQuestStatus(24077) == 1) {       // 2 代表完成
		pi.warp(910150230, 1);  //被占领的精灵森林
	} else{
		pi.warp(101050100,2);  //发光洞穴路
}
}
