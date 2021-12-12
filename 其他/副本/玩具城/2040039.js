/*
	名字:	绿黄气球
	地圖:	废弃的塔&amp;lt;第2阶段&gt;
	描述:	922010200
*/

function start() {
	var eim = cm.getEventInstance();
	var stage2status = eim.getProperty("stage2status");

	if (stage2status == null) {
		if (cm.isLeader()) { // Leader
		var stage2leader = eim.getProperty("stage2leader");
	if (stage2leader == "done") {

		if (cm.haveItem(4001022, 14)) { // Clear stage
			cm.sendOk("順利過關，通往<第三階段>的門已經開啟。");
			cm.removeAll(4001022);
			clear(2, eim, cm);
			cm.givePartyExp(2520);
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("過關要求：14張#v4001022:##r#t4001022##k。");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b遺棄之塔#k<第二階段> ：過關要求：請集齊14張#v4001022:##r#t4001022##k 由組長交給我即可過關。");
			eim.setProperty("stage2leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendOk("#b遺棄之塔#k<第二階段> ：過關要求：請集齊14張#v4001022:##r#t4001022##k 由組長交給我即可過關。");
			cm.dispose();
			}
		} else {
			cm.sendOk("順利過關，通往<第三階段>的門已經開啟。");
			cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}