/*
	名字:	过去的神木村
	地圖:	燃烧的废墟4
	描述:	272000410
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272000500, 1);  //燃烧的神木村5
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}