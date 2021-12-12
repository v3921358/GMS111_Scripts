/*
	名字:	潘喜
	地圖:	潘喜的测试空间1
	描述:	910100110
*/

function start() {
	cm.sendYesNo("喵！你打算從這裡出去了嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("快點！ 多打點怪物！ 喵！！@");
	} else {
		cm.warp(101030000,0);
		}
	cm.dispose();
}