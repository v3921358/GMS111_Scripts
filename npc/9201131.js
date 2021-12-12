/*
	名字:	魔鬼入口
	地圖:	幽灵蘑菇森林
	描述:	100020400
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032492)) {
		cm.sendYesNo("你準備好進入#b#m677000002##k嗎？");
	} else {
		cm.sendOk("进入#b#m677000002##k需要携带#i4032492:##b#t4032492##k，且等级不超过40级。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000002,0);  //沃勒福蜿蜒小道
		}
	cm.dispose();
}
