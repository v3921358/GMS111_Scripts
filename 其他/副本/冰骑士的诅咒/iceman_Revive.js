/*
	名字:	冰峰原野
	地圖:	932000400
	描述:	932000400
*/

function enter(pi) {
	if (pi.getPlayer().getEventInstance() != null) {
	if (pi.canHold(4001529, 1)) { //TODO JUMP
		pi.gainExp_PQ(70, 1.0);
		pi.gainNX(1000);
		pi.gainItem(4001529, 1);
		pi.warp(932000000,0);  //冰封原野入口
	} else {
		pi.playerMessage(-7,"[Portal]無法收納物品，請清理背包空間");
}
}
}