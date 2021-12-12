/*
	名字:	Bing Force
	地圖:	502029000
	描述:	502029000
*/

function start() {
	cm.sendYesNo("我想離開這裡！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(100000000, 0);
		}
	cm.dispose();
}