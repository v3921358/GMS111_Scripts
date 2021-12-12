/*
	名字:	雅典娜女神
	地圖:	雅典娜禁地&amp;lt;女神之祝福&gt;
	描述:	920011300
*/

function start() {
	var em = cm.getEventManager("OrbisPQ");
	if (em == null) {
	cm.dispose();
	return;
	}
	for (var i = 4001044; i < 4001064; i++) {
	cm.removeAll(i); //holy
	}
	switch(cm.getMapId()) {

	case 920010100:
		cm.givePartyExp_PQ(120, 1.0);
		cm.warpParty(920011100);
		break;
		default:
		if (!cm.canHold(4001158,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
			cm.dispose();
			return;
			}
			cm.gainItem(4001158,1);
			cm.getPlayer().endPartyQuest(1203);
			cm.gainNX(3000);
			cm.warp(200080101);
			cm.addTrait("will", 50);
			cm.addTrait("charm", 10);
			break;
			}
			cm.dispose();
}