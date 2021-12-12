/*
	名字:	林车长
	地圖:	废弃的地铁站
	描述:	910320000
*/

function start() {
	if (cm.getMapId() == 910320001) {
		cm.warp(910320000, 0);
		cm.dispose();
	} else if (cm.getMapId() == 910330001) {
		if (!cm.canHold(4001321, 1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else {
			cm.gainItem(4001321, 1);
			cm.warp(910320000, 0);
			}
			cm.dispose();
		} else if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
			cm.sendYesNo("你想要離開？？");
		} else {
			var chat = "您好，我是#p1052115# 有什麼可以幫忙的嗎？？#b";
			chat += "\r\n#L0#進去挑戰";
			chat += "\r\n#L1#火車訓練 999";
			chat += "\r\n#L2#領取勳章 <#i1142141#>";
			cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
		cm.warp(910320000, 0);
		cm.dispose();
		}
		}
	switch (selection) {
	case 0:
		if (cm.getPlayer().getLevel() < 25 || cm.getPlayer().getLevel() > 35 || !cm.isLeader()) {
			cm.sendOk("你需要等級25-35之內，並找隊長找我。");
		} else {
		if (!cm.start_PyramidSubway(-1)) {
			cm.sendOk("任務正在執行中，請嘗試其它頻道。");
			}
			}
			break;
	case 1:
		if (cm.haveItem(4001321)) {
		if (cm.bonus_PyramidSubway(-1)) {
			cm.gainItem(4001321, -1);
		} else {
			cm.sendOk("任務正在執行中，請嘗試其它頻道。");
			}
		} else {
			cm.sendOk("你沒有#b#t4001321##k。");
			}
			break;
	case 2:
		var record = cm.getQuestRecord(7662);
		var data = record.getCustomData();
		if (data == null) {
			record.setCustomData("0");
			data = record.getCustomData();
			}
			var mons = parseInt(data);
		if (mons < 10000) {
			cm.sendOk("至少要殺死1萬隻怪物，目前 : " + mons);
		} else if (cm.canHold(1142141) && !cm.haveItem(1142141)) {
			cm.gainItem(1142141, 1);
			cm.forceStartQuest(29931);
			cm.forceCompleteQuest(29931);
		} else {
			cm.sendOk("無法收納物品，請清理背包空間。");
			}
			}
			cm.dispose();
}