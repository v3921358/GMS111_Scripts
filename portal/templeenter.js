/*
	名字:	飞行中
	地圖:	时间神殿边界
	描述:	200090510
*/

function enter(pi) {
	pi.cancelItem(2210016);    //变龙
	pi.playPortalSE();
	pi.warp(270000100, "out00");  //神殿入口
	return true;
}