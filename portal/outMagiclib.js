/*
	名字:	隐藏地图
	地圖:	魔法图书馆
	描述:	910110000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(101000000, 7); //魔法密林
	} else{
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}
