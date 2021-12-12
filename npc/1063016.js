/*
	名字:	奇怪的石像
	地圖:	人偶师的秘密通道
	描述:	910510100
*/

function start() {
	cm.sendYesNo("你想离开这里？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(101040311, 2);
		}
	cm.dispose();
}