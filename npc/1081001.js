/*
	名字:	派申
	地圖:	海边瓜棚
	描述:	120030000
*/

function start() {
	cm.sendYesNo("想马上就回到明珠港吗？只需要1000枫币，我就可以送你过去！");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("等你考慮好再來找我吧！");
		cm.dispose();
	} else {
	if (cm.getPlayer().getMeso() >= 1000) {
		cm.gainMeso(-1000);
		cm.warp(104000000,0);
}
	cm.dispose();
}
}