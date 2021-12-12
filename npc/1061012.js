/*
	名字:	无意义存在者
	地圖:	另一扇门
	描述:	105030000
*/

function start() {
	cm.sendYesNo("你想去异界弓箭手修煉場嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("哪裡可是修行的好地方");
	} else {
		cm.warp(910500000,0);
		}
	cm.dispose();
}