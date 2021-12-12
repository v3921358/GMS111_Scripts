/*
	名字:	魔鬼入口
	地圖:	大岩石路
	描述:	102020300
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032491)) {
		cm.sendYesNo("你準備好進入#b#m677000004##k嗎？");
	} else {
		cm.sendOk("进入#b#m677000004##k需要携带#v4032491:##b#t4032491##k，且等级不超过40级。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000004,0);
		}
	cm.dispose();
}