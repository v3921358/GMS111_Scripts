/*
	名字:	闪耀的水晶
	地圖:	次元的世界
	描述:	910540500
*/

function start() {
	cm.sendAcceptDecline("(你可以通過雪原聖地的神聖的石頭再次進來，你確定要出去嗎？)");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你可能需要一些時間。");
	} else {
		cm.warp(211040401, 0);  //雪原圣地
		}
	cm.dispose();
}