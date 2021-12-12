/*
	名字:	魔鬼入口
	地圖:	蓝丝带海岸
	描述:	120020300
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032494)) {
		cm.sendYesNo("你準備好進入#b#m677000006##k嗎？");
	} else {
		cm.sendOk("进入#b#m677000006##k需要携带#v4032494:##b#t4032494##k，且等级不超过40级。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000006,0);
		}
	cm.dispose();
}
