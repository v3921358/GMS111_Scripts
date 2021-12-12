/*
	名字:	红色气球
	地圖:	废弃的塔&amp;lt;第1阶段&gt;
	描述:	922010100
*/

function start() {
	if (cm == null)
        	return;

	var eim = cm.getEventInstance();

	if (eim == null)
	return;

	var stage1status = eim.getProperty("stage1status");

	if (stage1status == null) {
		if (cm.isLeader()) { // Leader
		var stage1leader = eim.getProperty("stage1leader");
	if (stage1leader == "done") {

		if (cm.haveItem(4001022, 20)) { // Clear stage
			cm.sendOk("順利過關，通往<第二階段>的門已經開啟。");
			cm.removeAll(4001022);
			clear(1, eim, cm);
			cm.givePartyExp(2100, eim.getPlayers());
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("過關要求：請集齊20張 #v4001022:##r#t4001022##k 。");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b遺棄之塔#k<第一階段>  過關要求：請集齊20張 #v4001022:##r#t4001022##k 由組長交給我即可過關。");
			eim.setProperty("stage1leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendNext("#b遺棄之塔#k<第一階段>   過關要求：請集齊20張 #v4001022:##r#t4001022##k  由組長交給我即可過關。");
			cm.dispose();
			}
		} else {
			cm.sendOk("順利過關，通往<第二階段>的門已經開啟。");
			cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}