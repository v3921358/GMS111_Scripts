/*
	名字:	Elevator Computer
	地圖:	Alien Base Elevator
	描述:	610040300
*/

function start() {
	if (cm.haveItem(4033192, 1)) {
		cm.sendYesNo("已到达外星人物质克隆器。你现在要出去吗？");
	} else {
		cm.sendOk("缺少#b#v4033192:##z4033192##k，无法激活。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033192, -1);
		cm.warp(610040800,0);
		}
	cm.dispose();
}
