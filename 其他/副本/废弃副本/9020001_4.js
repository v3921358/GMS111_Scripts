/*
	名字:	克鲁特
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

var status	= -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage2status = eim.getProperty("stage2status");

	if (stage2status == null) {
		if (cm.isLeader()) { // Leader
		var stage2leader = eim.getProperty("stage2leader");
	if (stage2leader == "done") {

	if (cm.haveItem(4001008, 19)) { // Clear stage
		eim.setProperty("4stageclear",1);
		cm.sendNext("通往下一階段的門已開啟。");
		cm.removeAll(4001008);
		cm.resetMap(910340500);   //地图刷新
		cm.spawnMobOnMap(9300003,1,-568, -443,910340500);
		cm.spawnMobOnMap(9300003,1,471, -439,910340500);
		cm.spawnMobOnMap(9300003,2,0, -430,910340600);
		clear(1, eim, cm);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendNext("很抱歉！我需要19張#v4001008:##b#t4001008##k:  現時持有數：#r#c4001008#。");
		}
		cm.dispose();
	} else {
		cm.sendOk("第一次同行<4號門> 周围有很多凶猛的怪物，請消滅所有怪物，並收集#v4001008:##b#t4001008##k，整個隊伍只需由組長交給我19張，就可以進入下一階段。");
		eim.setProperty("stage2leader","done");
		cm.dispose();
		}
	} else { // Members
		cm.sendNext("第一次同行<4號門> 周围有很多凶猛的怪物，請消滅所有怪物，並收集#v4001008:##b#t4001008##k，整個隊伍只需由組長交給我19張，就可以進入下一階段。");
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