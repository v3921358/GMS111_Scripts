/*
	名字:	米哈尔
	地圖:	提姆之林
	描述:	913002200
*/

function start() {
	cm.sendNext("Oh... Did I just found something? Then there's only one way out! Let's fight like a #rBlack Wing#k should");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(cm.getMapId(), 1104100);
		cm.spawnMob(9001009, 263, 88); // Transforming
		}
	cm.dispose();
}