/*
	名字:	玛瑙龙的蛋
	地圖:	燃烧的神木村5
	描述:	272000500
*/

function start() {
	if (cm.isQuestActive(31173) && !cm.haveItem(4033081)) {
		cm.sendOk("#b(蛋好像沒事。 請好好照看，不要讓蛋受傷。)#k");
	} else {
		cm.sendOk("#b。。玛瑙龙的蛋#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033081, 1);
		}
	cm.dispose();
}