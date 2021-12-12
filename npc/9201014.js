/*
	名字:	菲尔拉
	地圖:	結婚小鎮
	描述:	680000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
		cm.dispose();
	return;
	}
	if (status == 0) {
	if (cm.getPlayer().getMarriageId() > 0) {
		cm.sendSimple("怎麼了，看起來很傷心....\r\n#b#L0#我想要離婚。#l\r\n#L1#我想要從我裝備欄刪除我的戒指。#l#k");
	} else {
		cm.sendSimple("嗨，我可以為您做什麼？？ \r\n#L1#我想要從我裝備欄刪除我的戒指。#l#k");
		}
		}
	if (status == 1) {
		if (selection == 0) {
			cm.sendYesNo("離婚？你確定嗎？你想離婚？這不是玩笑吧...？");
		} else {
			var selStr = "你想要刪除什麼戒指，讓我看看。";
			var found = false;
			for (var i = 1112300; i < 1112312; i++) {
			if (cm.haveItem(i)) {
				found = true;
				selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
				}
				}
				for (var i = 2240004; i < 2240016; i++) {
			if (cm.haveItem(i)) {
				found = true;
				selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
				}
				}
			if (!found) {
				cm.sendOk("身上沒有任何戒指。");
				cm.dispose();
			} else {
				cm.sendSimple(selStr);
				}
				}
				}
	if (status == 2) {
		if (selection == -1) {
			var cPlayer = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getMarriageId());
		if (cPlayer == null) {
			cm.sendNext("請確定你的伴侶在線上。");
		} else {
			cPlayer.dropMessage(1, "你的伴侶想要跟你離婚。");
			cPlayer.setMarriageId(0);
			cm.setQuestRecord(cPlayer, 160001, "0");
			cm.setQuestRecord(cm.getPlayer(), 160001, "0");
			cm.setQuestRecord(cPlayer, 160002, "0");
			cm.setQuestRecord(cm.getPlayer(), 160002, "0");
			cm.getPlayer().setMarriageId(0);
			for (var i = 1112300; i < 1112312; i++) {
			cm.gainItem(i, -1);
			}
			cm.sendNext("成功離婚了。");
			}
		} else {
			if (selection >= 1112300 && selection < 1112312) {
			cm.gainItem(selection, -1);
			cm.sendOk("你成功移除了戒指。");
		} else if (selection >= 2240004 && selection < 2240016) {
			cm.gainItem(selection, -1);
			cm.sendOk("你的訂婚戒指已被刪除。");
			}
			}
		cm.dispose();
}
}