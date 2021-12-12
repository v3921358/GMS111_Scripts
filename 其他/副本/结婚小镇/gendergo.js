/*
	名字:	结婚小镇
	地圖:	670010200
	描述:	670010200
*/

function enter(pi) {
	if (pi.getPlayerStat("GENDER") == 0) {
		pi.warpS(670010200, "male01");
	} else {
		pi.warpS(670010200, "female01");
}
}