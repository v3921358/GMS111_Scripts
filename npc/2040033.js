/*
	名字:	奈勒
	地圖:	玩具城宠物训练场
	描述:	220000006
*/

function start() {
	cm.sendOk("能跳到這裡心情一定很不錯吧！歡迎下次還來看我！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.useItem(2022070);  // 管理者的祝福
		cm.gainClosenessAll(4);
		cm.warp(220000006);
		}
	cm.dispose();
}
