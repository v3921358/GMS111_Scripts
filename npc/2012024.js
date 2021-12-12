/*
	名字:	意奈特
	地圖:	前往＜阿里安特＞的船所在的机场
	描述:	200000152
*/

function start() {
	cm.sendYesNo("你隨時都可以離開這裡，不過想要再進來需要重新買票，你還想離開嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("祝你本次旅途愉快，請耐心等待，我們馬上就要準備啟航！");
	} else {
		cm.warp(200000151,0);
		}
	cm.dispose();
}