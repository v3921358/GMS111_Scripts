/*
	名字:	坎特
	地圖:	危海中心
	描述:	923040300
*/

function start() {
	if (cm.getMapId() / 100 == 9230403) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(923040400,0);
		} else {
			cm.sendOk("救救我。。救救我。。救救我！");
			}
		} else if (cm.getMapId() / 100 == 9230404) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				if (!cm.canHold(4001535, 1)) {
				cm.sendOk("無法收納物品，請清理背包空間。");
			} else {
				cm.gainExp_PQ(200, 1.5);
				cm.gainItem(4001535, 1);
				cm.gainNX(2000);
				cm.addTrait("will", 26);
				cm.addTrait("charm", 26);
				cm.warp(923040000,0);
				}
			} else {
				cm.sendOk("請消滅皮亞努斯！");
				}
				}
			cm.dispose();
}

