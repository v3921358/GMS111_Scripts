/*
	名字:	远征队的标识
	地圖:	暗黑龙王洞穴入口
	描述:	240050400
*/

var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 80) {
		cm.sendOk("#e<探險：暗黑龍王>#n\r\n\r\n\r\n需要80等級以上才能挑戰暗黑龍王。");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
		cm.sendOk("#e<探險：暗黑龍王>#n\r\n\r\n\r\n 只能在1、2、3、4頻道挑戰。");
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("HorntailBattle");

	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	var eim_status = em.getProperty("state");
	var marr = cm.getQuestRecord(160100);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {

	var squadAvailability = cm.getSquadAvailability("Horntail");
	if (squadAvailability == -1) {
	status = 0;
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的12小時裏妳已經挑戰過暗黑龍王，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("#e<探險：暗黑龍王>#n\r\n\r\n\r\n現在可以申請暗黑龍王探險隊，你想成為探險隊隊長嗎？");

	} else if (squadAvailability == 1) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的12小時裏妳已經挑戰過暗黑龍王，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
		// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("Horntail");
	if (type == -1) {
		cm.sendOk("本次探險已結束，請重新註冊。");
		cm.dispose();
		}
	if (type == 0) {
		var memberType = cm.isSquadMember("Horntail");
		if (memberType == 2) {
			cm.sendOk("妳已在限制名單，不能再參加本次探險。");
			cm.dispose();
			}
		if (memberType == 1) {
			status = 5;
			cm.sendSimple("#e<探險：暗黑龍王>#n\r\n\r\n\r\n#b#L0#登記探險隊#l \r\n#b#L1#離開探險隊#l \r\n#b#L2#查看隊員資訊#l");
			}
		if (memberType == -1) {
			cm.sendOk("本次探險已結束，請重新註冊。");
			cm.dispose();
		} else {
			status = 5;
			cm.sendSimple("#e<探險：暗黑龍王>#n\r\n\r\n\r\n#b#L0#登記探險隊#l \r\n#b#L1#離開探險隊#l \r\n#b#L2#查看隊員資訊#l");
			}
		} else { // Is leader
			status = 10;
			cm.sendSimple("#e<探險：暗黑龍王>#n\r\n\r\n\r\n#b#L0#檢查隊員資訊 #l \r\n#b#L1#調整隊員清單#l \r\n#b#L2#限制隊員清單#l \r\n#r#L3#進入探險地圖#l");
			// TODO viewing!
			}
		} else {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
			if (squd != null) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的12小時裏妳已經挑戰過暗黑龍王，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("探險進行中，請嘗試其它頻道。\r\n" + squd.getNextPlayer());
			status = 3;
		} else {
			cm.sendOk("探險進行中，請嘗試其它頻道。");
			cm.safeDispose();
			}
		} else {
			cm.sendYesNo("現在是否要重新返回探險隊所在場地?");
			status = 2;
			}
			}
		} else {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
			if (squd != null) {
		if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的12小時裏妳已經挑戰過暗黑龍王，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
			cm.dispose();
			return;
			}
			cm.sendYesNo("探險進行中，請嘗試其它頻道。\r\n" + squd.getNextPlayer());
			status = 3;
			} else {
			cm.sendOk("探險進行中，請嘗試其它頻道。");
			cm.safeDispose();
			}
		} else {
			cm.sendYesNo("現在是否要重新返回探險隊所在場地?");
			status = 2;
}
}
}

function action(mode, type, selection) {
	switch (status) {
	case 0:
		if (mode == 1) {
			if (cm.registerSquad("Horntail", 5, " 已經成為了<暗黑龍王>探險隊隊長，如果你想嘗試本次探險，請重新與我對話申請登記探險.否則你將無法參與本次探險。")) {
				cm.sendOk("已經成為<暗黑龍王>探險隊隊長，請在5分鐘內召集好探險隊隊員進行探險.否則將會自動註銷本次探險資格。");
			} else {
				cm.sendOk("未知錯誤，請稍後再嘗試。");
				}
				}
				cm.dispose();
				break;
	case 2:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("未知錯誤，請稍後再嘗試。");
			}
			cm.safeDispose();
			break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Horntail");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("申請暗黑龍王探險隊成功。");
				}
				}
				cm.dispose();
				break;
	case 5:
		if (selection == 0) { // join
			var ba = cm.addMember("Horntail", true);
			if (ba == 2) {
				cm.sendOk("探險隊員已經達到30名，請稍後再嘗試。");
				}
			if (ba == 1) {
				cm.sendOk("申請加入探險隊成功，請做好探險準備。");
			} else {
				cm.sendOk("已經加入了探險隊，請做好探險準備。");
				}
				}
		if (selection == 1) {// withdraw
			var baa = cm.addMember("Horntail", false);
			if (baa == 1) {
				cm.sendOk("離開探險隊成功。");
			} else {
				cm.sendOk("妳已經離開探險隊。");
				}
				}
		if (selection == 2) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("由於未知的錯誤，操作失敗。");
				}
				}
				cm.dispose();
				break;
	case 10:
		if (mode == 1) {
			if (selection == 0) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("由於未知的錯誤，操作失敗。");
				}
				cm.dispose();
				}
			if (selection == 1) {
				status = 11;
			if (!cm.getSquadList("Horntail", 1)) {
				cm.sendOk("由於未知的錯誤，操作失敗。");
				cm.dispose();
				}
				}
			if (selection == 2) {
				status = 12;
			if (!cm.getSquadList("Horntail", 2)) {
				cm.sendOk("由於未知的錯誤，操作失敗。");
				cm.dispose();
				}
				}
			if (selection == 3) { // get insode
			if (cm.getSquad("Horntail") != null) {
				var dd = cm.getEventManager("HorntailBattle");
				dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
			} else {
				cm.sendOk("由於未知的錯誤，操作失敗。");
				}
				cm.dispose();
				}
			} else {
				cm.dispose();
				}
				break;
	case 11:
		cm.banMember("Horntail", selection);
		cm.dispose();
		break;
	case 12:
		if (selection != -1) {
		cm.acceptMember("Horntail", selection);
		}
		cm.dispose();
		break;
}
}