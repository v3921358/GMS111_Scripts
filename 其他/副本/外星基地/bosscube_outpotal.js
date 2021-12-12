/*
	名字:	502030011
	地圖:	502030011
	描述:	502030011
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(502029000,0);
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}