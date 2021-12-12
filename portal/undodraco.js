/*
	名字:	飞行中
	地圖:	神木村之界
	描述:	200090500
*/

function enter(pi) {
	pi.cancelItem(2210016);   //变龙
	pi.playPortalSE();
	pi.warp(240000110, 0);  //码头&amp;lt;前往天空之城&gt
	return true;
}