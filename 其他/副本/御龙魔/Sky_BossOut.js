/*
	名字:	240080800
	地圖:	240080800
	描述:	240080800
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	if (pi.canHold(4001401, 1) ) {
		pi.gainItem(4001401, 1);
		pi.addTrait("will", 40);
		pi.addTrait("charisma", 10);
		pi.gainExp((pi.getPlayer().getNeededExp() / 100) *99);
		pi.warp(240080050);
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]無法收納物品，請清理背包空間");
		}
	} else {
		pi.playerMessage(-7,"[Portal]請將BOSS擊殺即可領取獎勵離開");
}
}
