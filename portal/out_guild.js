/*
	名字:	神秘岛
	地圖:	家族中心(英雄公馆)
	描述:	200000301
*/

function enter(pi) {
	var savedMapId = pi.getSavedLocation("CHRISTMAS");
	savedMapId = (savedMapId > 0 ? savedMapId : 200000300);  //没有标记地图的返回
		pi.clearSavedLocation("CHRISTMAS");    //返回标记地图
		pi.warp(savedMapId); // pi.warp(200000300,11);  //遗忘的山丘
		return true;
}