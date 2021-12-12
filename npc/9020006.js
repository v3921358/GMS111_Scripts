/*
	名字:	关在城里的冒险家
	地圖:	教导官的房间
	描述:	921160700
*/

function start() {
	if (cm.getMapId() / 100 == 9211607) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.canHold(4001534, 1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else {
			cm.gainExp_PQ(200, 1.5);
			cm.gainItem(4001534, 1);
			cm.gainNX(2000);
			cm.warp(921160000,0);
			}
		} else {
			cm.sendOk("我被它囚禁在这里，請先消滅 Ani！");
			}
			}
		cm.dispose();
}