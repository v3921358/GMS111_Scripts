/*
	名字:	石人寺院
	地圖:	1阶段 : 石人寺院1
	描述:	952000000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warpParty(pi.getMapId() + 100,0); //next
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}