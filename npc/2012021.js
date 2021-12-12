/*
	名字:	娜米
	地圖:	码头&amp;lt;开往神木村&gt;
	描述:	200000131
*/

function start() {
	cabin = cm.getEventManager("Cabin");
		if (cabin == null) {
			cm.sendOk("班機正在準備中。");
			cm.dispose();
		} else if (!cm.haveItem(4031331)) {
			cm.sendOk("你沒有攜帶 #v4031331:#我不能讓你登船，你可以在售票處購買！");
			cm.dispose();
		} else if (cabin.getProperty("entry").equals("true")) {
			cm.sendYesNo("尊貴的顧客，班機已經靠港，請問你確定現在要登船嗎？");
		} else if (cabin.getProperty("entry").equals("false") && cabin.getProperty("docked").equals("true")) {
			cm.sendOk("對不起！船已經起航，你得等待下一次入港。");
			cm.dispose();
		} else {
			cm.sendOk("請耐心等待，要注意班機的時間，檢票在起航前一分鐘停止收票，所以請務必準時到達。");
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("班機的起航時間可不會等你。");
	} else {
		cm.gainItem(4031331, -1);
		cm.warp(200000132, 0);
		}
	cm.dispose();
}