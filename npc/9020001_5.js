/*
	名字:	克鲁特
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

var status = -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage3status = eim.getProperty("stage3status");

	if (stage3status == null) {
		if (cm.isLeader()) { // Leader
		var stage3leader = eim.getProperty("stage3leader");
	if (stage3leader == "done") {

	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		clear(1, eim, cm);
		cm.warpParty(910340600, 0);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendNext("請檢查地圖上是否還存在怪物，否則無法通過。");
		}
		cm.dispose();
	} else {
		cm.sendOk("第一次同行<5號門>階段，消灭BOSS，然後組隊長再和我講話，就可以順利通關。");
		eim.setProperty("stage3leader","done");
		cm.dispose();
		}
	} else { // Members
		cm.sendNext("第一次同行<5號門>階段，消灭BOSS，然後組隊長再和我講話，就可以順利通關。");
		cm.dispose();
		}
	} else {
		cm.sendNext("通往下一階段的門已開啟。");
		cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status","clear");
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}