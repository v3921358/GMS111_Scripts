/*
	名字:	无影
	地圖:	蝙蝠怪的墓地
	描述:	105100300
*/

function start() {
	cm.sendYesNo("如果你現在離開，你必須重新開始，你確定要離開嗎?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(105100100);
		}
	cm.dispose();
}