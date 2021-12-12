/*
	名字:	魔鬼入口
	地圖:	接近天的地方
	描述:	101020200
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032495)) {
		cm.sendYesNo("你準備好進入#b#m677000000##k嗎？");
	} else {
		cm.sendOk("进入#b#m677000000##k需要携带#v4032495:##b#t4032495##k，且等级不超过40级。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000000,0);
		}
	cm.dispose();
}





