/*
	名字:	杰克恩
	地圖:	大师之厅
	描述:	610030010
*/

function start() {
	cm.sendYesNo("你要去密室的大厅？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(610030020,0);
		cm.removeAll(4001256);
		cm.removeAll(4001257);
		cm.removeAll(4001258);
		cm.removeAll(4001259);
		cm.removeAll(4001260);
		}
	cm.dispose();
}