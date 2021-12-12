/*
	名字:	黑暗圣地
	地圖:	圣地岔路
	描述:	271000300
*/

function enter(pi) {
	if (pi.haveItem(4032922)) {
		pi.warp(271030000, 1);  //要塞入口
	} else {
		pi.warp(271030010, 1);  //要塞入口
}
}