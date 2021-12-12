/*
	名字:	人造人 A
	地圖:	玛加提亚
	描述:	261000000
*/

function start() {
	cm.sendYesNo("我想是一個人，一個有著溫暖的心臟……這樣也許我可以牽她的手，不幸的是，現在這是不可能的，我在等我的雪玫瑰開花，你願意去看看嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("雪玫瑰無比的美麗，可以送給心愛的人。");
	} else {
		cm.warp(926120300,0);
		}
	cm.dispose();
}