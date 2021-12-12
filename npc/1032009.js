/*
	名字:	船员 普林
	地圖:	开往天空之城&amp;lt;出发前&gt;
	描述:	104020111
*/

function start() {
	cm.sendYesNo("你隨時都可以離開這裡，不過想要再進來需要重新買票，你還想離開嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("祝你本次旅途愉快，請耐心等待，我們馬上就要準備啟航！");
	} else {
		cm.warp(104020110, 0);
		}
	cm.dispose();
}