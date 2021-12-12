/*
	名字:	克鲁特
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

var status; = -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage1status = eim.getProperty("stage1status");

	if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	var stage1leader = eim.getProperty("stage1leader");
	if (stage1leader == "done") {


	if (cm.haveItem(4001007, 30)) { // Clear stage
		cm.sendNext("通往下一階段的門已開啟。");
		eim.setProperty("1stageclear",1);
		cm.removeAll(4001007);
		clear(1, eim, cm);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendOk("很抱歉！我需要30張#v4001007:##b#t4001007##k:  現時持有數：#r#c4001007#。");
		}
		cm.dispose();
	} else {
		cm.sendOk("第一次同行<1號門>，我是你們的考核官，請嚴格完成我所給予的任務，否則將無法通過考驗，在這裡你們可能會遇見很多兇狠的鱷魚，請打倒兇狠的鱷魚，並收集#v4001007:##b#t4001007##k，整個隊伍只需由組長交給我30張，就可以進入下一階段。");
		eim.setProperty("stage1leader", "done");
		cm.dispose();
		}
	} else { // Members
		cm.sendOk("第一次同行<1號門>，我是你們的考核官，請嚴格完成我所給予的任務，否則將無法通過考驗，在這裡你們可能會遇見很多兇狠的鱷魚，請打倒兇狠的鱷魚，並收集#v4001007:##b#t4001007##k，整個隊伍只需由組長交給我30張，就可以進入下一階段。");
		cm.dispose();
		}
	} else {
		cm.sendOk("通往下一階段的門已開啟。");
		cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}