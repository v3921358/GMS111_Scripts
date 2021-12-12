/*
	名字:	过去的神木村
	地圖:	燃烧的废墟4
	描述:	272000410
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272000310, 2);  //燃烧的废墟
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}