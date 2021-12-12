/*
	名字:	伊卡尔特
	地圖:	提鲁之林
	描述:	913002300
*/

function start() {
	cm.sendNext("Oh... Did I just found something? Then there's only one way out! Let's fight like a #rBlack Wing#k should!");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(cm.getMapId(), cm.getNpc());
		cm.spawnMonster(9001009,1); // Transforming
		}
	cm.dispose();
}