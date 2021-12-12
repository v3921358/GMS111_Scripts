/*
	名字:	阿们
	地圖:	扎昆的祭台
	描述:	280030000
*/

function start() {
	cm.sendYesNo("如果你現在離開，你必須重新開始。你確定要離開嗎?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(211042200,0);
		}
	cm.dispose();
}