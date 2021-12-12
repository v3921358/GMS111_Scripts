/*
	名字:	隐藏地图
	地圖:	专业技术村庄 匠人街
	描述:	910001000
*/

function enter(pi) {
	if (pi.haveItem(4001480)) {
		pi.warp(910001005,0);    //新手秘密矿山
		pi.gainItem(4001480, -1);
	} else if (pi.haveItem(4001481)) {
		pi.warp(910001006, 0);   //中级者秘密矿山
		pi.gainItem(4001481, -1);
	} else if (pi.haveItem(4001482)) {
		pi.warp(910001003, 0);   //新手秘密农场
		pi.gainItem(4001482, -1);
	} else if (pi.haveItem(4001483)) {
		pi.warp(910001004, 0);    //中级者秘密农场
		pi.gainItem(4001483, -1);
	} else if (pi.isQuestActive(3197) || pi.isQuestActive(3198)) {
		pi.warp(910001002, 0);    //诺布的矿山
	} else if (pi.isQuestActive(3195) || pi.isQuestActive(3196)) {
		pi.warp(910001001, 0);    //斯塔切的药草田
	} else {
		pi.playerMessage(-7,"[Portal]需要持有入場卷，才能進入此傳送點");
}
}
