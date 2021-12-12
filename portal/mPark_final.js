/*
	名字:	石人寺院
	地圖:	6阶段 : 隐藏的石室
	描述:	952000500
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (pi.canHold(4001529, 1)) { //TODO JUMP		
			pi.gainItem(4310020, 1);  //原 pi.givePartyItems(4310020, 1);
			pi.warpParty(951000000,0); //怪物公园
		} else {
			pi.playerMessage(-7,"[Portal]無法收納物品，請清理背包空間");
			}
		} else {
			pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}