/*
	名字:	黑暗时间神殿
	地圖:	黑魔法师房间前面回廊
	描述:	272010200
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272010100, 2);  //时间神殿回廊2
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}