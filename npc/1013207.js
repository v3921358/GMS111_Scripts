/*
	名字:	坤
	地圖:	临时港口
	描述:	914100000
*/

function start() {
	cm.sendYesNo("你想要回明珠港嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("這裡的景色多不錯！ 哈哈！");
	} else {
		cm.warp(200090090,0);
		}
	cm.dispose();
}
