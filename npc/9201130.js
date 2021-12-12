/*
	名字:	魔鬼入口
	地圖:	鳄鱼潭
	描述:	103030200
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032493)) {
		cm.sendYesNo("你準備好進入#b#m677000008##k嗎？");
	} else {
		cm.sendOk("进入#b#m677000008##k需要携带#v4032493:##b#t4032493##k，且等级不超过40级。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000008,0);  //沃勒福蜿蜒小道
		}
	cm.dispose();
}
