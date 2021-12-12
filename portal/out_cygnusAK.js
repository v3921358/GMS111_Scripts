/*
	名字:	次元缝隙
	地圖:	黑暗祭坛
	描述:	272030400
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272030300, 3);  //黑暗祭坛入口
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}