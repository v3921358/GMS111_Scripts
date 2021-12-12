/*
	名字:	骑士团要塞
	地圖:	要塞入口
	描述:	271030000
*/

function enter(pi) {
	if (pi.haveItem(4032922)) {
		pi.warp(271030100, 4);
	} else {
		pi.playerMessage(-7,"[Portal]需要持有冒险骑士团徽章才能进入");
}
}