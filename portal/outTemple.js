/*
	名字:	时间神殿
	地圖:	神殿入口
	描述:	270000100
*/

function enter(pi) {
	pi.useItem(2210016);   //变龙
	pi.playPortalSE();
	pi.warp(200090510, 0);  //时间神殿边界
	return true;
}