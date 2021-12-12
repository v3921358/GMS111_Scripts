/*
	名字:	新叶城检票口
	地圖:	新叶城 地铁站
	描述:	600010001
*/

function start() {
	sw = cm.getEventManager("Subway");
		if (sw == null) {
			cm.sendOk("地铁正在準備中。");
			cm.dispose();
		} else if (!cm.haveItem(4031713)) {
			cm.sendOk("你沒有攜帶 #v4031713:#，沒有它我不能讓你進來。請在售票亭買票。");
			cm.dispose();
		} else if (sw.getProperty("entry").equals("true")) {
			cm.sendYesNo("尊貴的顧客，地铁已經靠站，請問你確定現在要登车嗎？");
		} else if (sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
			cm.sendOk("對不起！地铁已經起航，你得等待下一次入站。");
			cm.dispose();
		} else {
			cm.sendOk("請耐心等待，要注意地铁的時間，檢票在起航前一分鐘停止收票，所以請務必準時到達。");
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("地铁的起航時間可不會等你。");
	} else {
		cm.gainItem(4031713, -1);
		cm.warp(600010002);
		}
	cm.dispose();
}
