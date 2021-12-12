/*
	名字:	秘密地图
	地圖:	陷阱！实验室监狱
	描述:	931000310
*/

function enter(pi) {
	if (pi.isQuestActive(23049)) {
		pi.getMap(pi.getMapId() + 10).resetFully();    //新武器开发实验室 931000320
		pi.warp(pi.getMapId() + 10, 0);
	} else {
		pi.playerMessage(-7,"[Portal]與你的指導老師談談");
}
}