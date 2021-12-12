/*
	名字:	勒贝尔托4世
	地圖:	結婚小鎮
	描述:	680000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
		cm.dispose();
		}
	status--;
	}
	if (cm.getMapId() != 680000210) {
		cm.sendOk("如果你想有一個婚禮，請與我說話的幫手。");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendYesNo("你想要結婚了？");
	if (status == 1) {
		var marr = cm.getQuestRecord(160001);
		var data = marr.getCustomData();
		if (data == null) {
			marr.setCustomData("0");
			data = "0";
			}
		if (data.equals("1")) {
		if (cm.getPlayer().getMarriageId() <= 0) {
			cm.sendOk("一些錯誤已經發生了：你不是從事與任何人。");
			cm.dispose();
			return;
			}
		var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
		if (chr == null) {
			cm.sendOk("確保你的情侶在地圖上。");
			cm.dispose();
			return;
			}
		marr.setCustomData("2_");
			cm.setQuestRecord(chr, 160001, "2_");
			cm.doWeddingEffect(chr);
		} else if (data.equals("2_") || data.equals("2")) {
		if (cm.getPlayer().getMarriageId() <= 0) {
			cm.sendOk("一些錯誤已經發生了：你不是從事與任何人。");
			cm.dispose();
			return;
			}
		var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
			if (chr == null) {
			cm.sendOk("確保你的情侶在地圖上。");
			cm.dispose();
			return;
			}
			cm.setQuestRecord(cm.getPlayer(), 160001, "3");
			cm.setQuestRecord(chr, 160001, "3");
		var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
			if (dat > 10) {
			cm.warpMap(680000300, 0);
		} else {
			cm.setQuestRecord(chr, 160002, "0");
			cm.setQuestRecord(cm.getPlayer(), 160002, "0");
			cm.warpMap(680000300, 0);
			}
		} else {
			cm.sendOk("看到這對新人祝福他們。");
			}
		cm.dispose();
}
}