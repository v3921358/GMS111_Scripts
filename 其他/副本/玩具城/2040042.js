/*
	名字:	天蓝气球
	地圖:	废弃的塔&amp;lt;第4阶段&gt;
	描述:	922010700
*/

function start() {
	var eim = cm.getEventInstance();
	var stage4status = eim.getProperty("stage4status");

	if (stage4status == null) {
		if (cm.isLeader()) { // Leader
		var stage4leader = eim.getProperty("stage4leader");
	if (stage4leader == "done") {

		if (cm.haveItem(4001022, 4)) { // Clear stage
			cm.sendOk("順利過關，通往<第五階段>的門已經開啟。");
			cm.removeAll(4001022);
			clear(4, eim, cm);
			cm.givePartyExp(3360);
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("過關要求：集齊4張#v4001022:##r#t4001022##k。");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b遺棄之塔#k<第四階段> ：過關要求：集齊4張#v4001022:##r#t4001022##k 由組長交給我即可過關。");
			eim.setProperty("stage4leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendOk("#b遺棄之塔#k<第四階段> ：過關要求：集齊4張#v4001022:##r#t4001022##k 由組長交給我即可過關。");
			cm.dispose();
			}
		} else {
			cm.sendOk("順利過關，通往<第五階段>的門已經開啟。");
			cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}