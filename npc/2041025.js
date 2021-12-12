/*
	名字:	机械装置
	地圖:	时间塔的本源
	描述:	220080001
*/

function start() {
	cm.sendYesNo("嘟嘟。。。嘟嘟。。。你可以通過我逃到一個更安全的地方。嘟嘟。。。嘟嘟。。。你想離開這個地方嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("嘟嘟。。。嘟嘟。。。");
	} else {
		cm.warp(220080000,5);
		}
	cm.dispose();
}
