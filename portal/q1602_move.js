/*
	名字:	秘密地图
	地圖:	维修中的列车
	描述:	931050400
*/

function enter(pi) {
	if (pi.getQuestStatus(1602) == 1) {
		pi.warp(931050402,1);
		pi.getMap(931050402).resetFully();//地图刷新
	} else {
		pi.warp(931050402,1); //空月台
}
}