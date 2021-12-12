/*
	名字:	无影
	地圖:	寺院地下
	描述:	105100100
*/

var status = -1;

var balrogMode; // false = easy, true = hard

function action(mode, type, selection) {
	switch (status) {
	case -1:
		status = 0;
	switch (cm.getChannelNumber()) {
	case 2:
		balrogMode = true;
		cm.sendNext("#e<探險：巴爾羅格>#n\r\n\r\n\r\n當前所在的頻道可用於#b普通難度巴爾羅格探險隊#k. 如果您想探險其它模式，請選擇正確的頻道. \n\r #b#i3994116# 頻道.2 / 等級50及以上 / 6 ~ 15 個玩家 \n#b#i3994115# 其餘的頻道 / 等級50 ~ 70 / 3 ~ 6 個玩家.");
		break;
		default:
		balrogMode = false;
		cm.sendNext("#e<探險：巴爾羅格>#n\r\n\r\n\r\n當前所在的頻道可用於#b簡單難度巴爾羅格探險隊#k. 如果您想探險其它模式，請選擇正確的頻道. \n\r #b#i3994116# 頻道.2 / 等級50及以上 / 6 ~ 15 個玩家 \n#b#i3994115# T其餘的頻道 / 等級50 ~ 70 / 3 ~ 6 個玩家.");
		break;
		}
		break;
	case 0:
		var em = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");

	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.safeDispose();
		return;
		}

	if (cm.getParty() != null) {
		var prop = em.getProperty("state");
		var marr = cm.getQuestRecord(balrogMode ? 160106 : 160105);
		var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("BossBalrog");
	if (squadAvailability == -1) {
		status = 1;
	if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("在過去的6小時裏妳已經挑戰過巴爾羅格，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
		}
		cm.sendYesNo("#e<探險：巴爾羅格>#n\r\n\r\n\r\n現在可以申請巴爾羅格探險隊，你想成為探險隊隊長嗎？");

		} else if (squadAvailability == 1) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("在過去的6小時裏妳已經挑戰過巴爾羅格，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
		}
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("BossBalrog");
		if (type == -1) {
			cm.sendOk("本次探險已結束，請重新註冊。");
			cm.safeDispose();
		} else if (type == 0) {
			var memberType = cm.isSquadMember("BossBalrog");
		if (memberType == 2) {
			cm.sendOk("妳已在限制名單，不能再參加本次探險。");
			cm.safeDispose();
		} else if (memberType == 1) {
			status = 5;
			cm.sendSimple("#e<探險：巴爾羅格>#n\r\n\r\n\r\n#b#L0#查看隊員資訊#l \r\n#b#L1#登記探險隊#l \r\n#b#L2#離開探險隊#l");
		} else if (memberType == -1) {
			cm.sendOk("本次探險已結束，請重新註冊。");
			cm.safeDispose();
		} else {
			status = 5;
			cm.sendSimple("#e<探險：巴爾羅格>#n\r\n\r\n\r\n#b#L0#查看隊員資訊#l \r\n#b#L1#登記探險隊#l \r\n#b#L2#離開探險隊#l");
			}
		} else { // Is leader
			status = 10;
			cm.sendSimple("#e<探險：巴爾羅格>#n\r\n\r\n\r\n#b#L0#檢查隊員資訊#l \r\n#b#L1#調整隊員清單#l \r\n#b#L2#限制隊員清單#l \r\n#r#L3#進入探險地圖#l");
		// TODO viewing!
			}
		} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		if (eim == null) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的6小時裏妳已經挑戰過巴爾羅格，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
			cm.sendYesNo("現在是否要重新返回探險隊所在場地？");
			status = 2;
			}
			}
		} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		if (eim == null) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null) {
		if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
			cm.sendOk("在過去的6小時裏妳已經挑戰過巴爾羅格，剩餘冷卻時間: " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
			cm.sendYesNo("現在是否要重新返回探險隊所在場地？");
			status = 2;
			}
			}
		} else {
			cm.sendPrev("你需要擁有自己的小隊才能開啟本次探險。");
			cm.safeDispose();
			}
			break;
	case 1:
		if (mode == 1) {
		if (!balrogMode) { // Easy Mode
			var lvl = cm.getPlayerStat("LVL");
		if (lvl >= 50 && lvl <= 70) {
		if (cm.registerSquad("BossBalrog", 5, " 已經成為<巴爾羅格>探險隊隊長，如果你想嘗試本次探險，請重新與我對話申請登記探險.否則你將無法參與本次探險。")) {
			cm.sendOk("已經成為<巴爾羅格>探險隊隊長，請在5分鐘內召集好探險隊隊員進行探險.否則將會自動註銷本次探險資格。");
		} else {
			cm.sendOk("未知錯誤，請稍後再嘗試。");
			}
		} else {
			cm.sendNext("請調整本次探險隊隊員清單，使所有隊員都具備探險資格。");
			}
		} else { // Normal Mode
			if (cm.registerSquad("BossBalrog", 5, " 已經成為<巴爾羅格>探險隊隊長，如果你想嘗試本次探險，請重新與我對話申請登記探險.否則你將無法參與本次探險。")) {
			cm.sendOk("已經成為<巴爾羅格>探險隊隊長，請在5分鐘內召集好探險隊隊員進行探險.否則將會自動註銷本次探險資格。");
		} else {
			cm.sendOk("未知錯誤，請稍後再嘗試。");
			}
			}
		} else {
			cm.sendOk("#e<探險：巴爾羅格>#n\r\n\r\n\r\n也許你還不具備可以擊敗它的能力，當你想好了再來找我。")
			}
			cm.safeDispose();
			break;
	case 2:
		if (!cm.reAdd(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY", "BossBalrog")) {
			cm.sendOk("未知錯誤，請稍後再嘗試。");
			}
			cm.safeDispose();
			break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("BossBalrog");
		if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
			squd.setNextPlayer(cm.getPlayer().getName());
			cm.sendOk("申請巴爾羅格探險隊成功。");
			}
			}
			cm.dispose();
			break;
	case 5:
		if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
			cm.sendOk("由於未知的錯誤，操作失敗。");
			cm.safeDispose();
		} else {
			cm.dispose();
			}
		} else if (selection == 1) { // join
			var ba = cm.addMember("BossBalrog", true);
		if (ba == 2) {
			cm.sendOk("探險隊員已經達到30名，請稍後再嘗試。");
			cm.safeDispose();
		} else if (ba == 1) {
			cm.sendOk("申請加入探險隊成功，請做好探險準備。");
			cm.safeDispose();
		} else {
			cm.sendOk("已經加入了探險隊，請做好任務準備。");
			cm.safeDispose();
			}
		} else {// withdraw
			var baa = cm.addMember("BossBalrog", false);
		if (baa == 1) {
			cm.sendOk("離開探險隊成功。");
			cm.safeDispose();
		} else {
			cm.sendOk("妳已經離開探險隊。");
			cm.safeDispose();
			}
			}
			break;
	case 10:
		if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
			cm.sendOk("由於未知的錯誤，操作失敗。");
			}
			cm.safeDispose();
		} else if (selection == 1) {
			status = 11;
		if (!cm.getSquadList("BossBalrog", 1)) {
			cm.sendOk("由於未知的錯誤，操作失敗。");
			}
			cm.safeDispose();
		} else if (selection == 2) {
			status = 12;
		if (!cm.getSquadList("BossBalrog", 2)) {
			cm.sendOk("由於未知的錯誤，操作失敗。");
			}
			cm.safeDispose();
		} else if (selection == 3) { // get insode
			if (cm.getSquad("BossBalrog") != null) {
			var dd = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			dd.startInstance(cm.getSquad("BossBalrog"), cm.getMap(), balrogMode ? 160106 : 160105);
			cm.dispose();
		} else {
			cm.sendOk("由於未知的錯誤，操作失敗。");
			cm.safeDispose();
			}
			}
			break;
	case 11:
			cm.banMember("BossBalrog", selection);
			cm.dispose();
			break;
	case 12:
		if (selection != -1) {
			cm.acceptMember("BossBalrog", selection);
			}
		cm.dispose();
		break;
}
}