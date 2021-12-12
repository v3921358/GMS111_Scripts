/*
	名字:	达尔米
	地圖:	回村路
	描述:	910010300
*/

function start() {
	cm.sendYesNo("返回射手村公园！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(100000200);
		}
	cm.dispose();
}
