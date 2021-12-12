/*
	名字:	席勒
	地圖:	2次转职
	描述:	931000100
*/

function start() {
	cm.sendYesNo("我躲在這裡居然都能被你發現，看來只能用黑色之翼的方式來解决掉你！");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("看来你只不过是个小毛孩！");
	} else {
		cm.playerMessage(-1, "击败席勒，把报告书拿到手！");
		cm.playerMessage(5, "击败席勒，把报告书拿到手！");
		cm.removeNpc(cm.getMapId(), cm.getNpc());
		cm.spawnMonster(9001031,1); // Transforming
		}
	cm.dispose();
}