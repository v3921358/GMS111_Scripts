/*
	名字:	废都地铁
	地圖:	2号线第2区间
	描述:	103020410
*/

function enter(pi) {
	if (pi.getQuestStatus(2866) == 1) {
		pi.warp(910310200,1);  //2号线第3区间
		pi.resetMap(910310200);   //地图刷新
	} else {
		pi.warp(103020420,1);  //2号线第3区间
}
}