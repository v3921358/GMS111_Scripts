/*
	名字:	Amos the Strong
	地圖:	670010000
	描述:	670010000
*/

function start() {
	var marr = cm.getQuestRecord(160001);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		//原 if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
		if (cm.getPlayer().getLevel() < 40) {
			cm.sendNext("只有40級以上的已婚人士才可以跟我說話。");
			cm.dispose();
		} else {
			if (cm.haveItem(4031592)) {
				cm.sendYesNo("把你的#v4031592:##b#t4031592##k交給我，才能讓你進去。");
				return;
				}
				var apq = cm.getQuestRecord(160000);
				var data = apq.getCustomData();
			if (data == null) {
				apq.setCustomData("0");
				data = "0";
				}
				var time = parseInt(data);
			if (time + (0 * 3600000) < cm.getCurrentTime()) { //1 时间限制

			if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
				cm.gainItem(4031593, -10);
				cm.gainItem(4031592, 1);
				cm.sendOk("請拿好你的#v4031592:##b#t4031592##k。每次入場時間必須間隔3小時，從现在開始我已經記錄了你的時間。");
				apq.setCustomData("" + cm.getCurrentTime());   //记录时间
			} else {
				cm.sendOk("從附近怪物那裡給我找10把#v4031593:##b#t4031593##k,就能在我這裡兌換一張#v4031592:##b#t4031592##k。");
				}
			} else {
				cm.sendNext("Oho, it looks like you've already went in here for the past 3 hours. Come back later.");
				}
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4031592, -1);
		cm.warp(670010100,0);
		}
	cm.dispose();
}