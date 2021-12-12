/*
	名字:	Aldpl
	地圖:	阴森世界
	描述:	551030200
*/

function start() {
	cm.sendYesNo("如果你現在離開，你必須重新開始，你確定要離開嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(551030100,0);
		}
	cm.dispose();
}