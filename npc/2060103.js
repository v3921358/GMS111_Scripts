/*
	名字:	海豚
	地圖:	触礁的幽灵船
	描述:	923020000
*/

var status = -1;

var request;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	cm.dispose();
	var em = cm.getEventManager("Ghost");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
	return;
	}
	switch(cm.getPlayer().getMapId()) {
	case 923020000:
		if (status == 0 && mode == 1) {
			var selStr = "#e<組隊任務：霧海大作戰>#n  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：60 - 200 \r\n－#eSign up for Dual Raid#n";
			var found = false;
			for (var i = 0; i < 5; i++){
			if (getCPQField(i) != "") {
			selStr += "\r\n#b#L" + i + "# " + getCPQField(i) + "#l#k";
			found = true;
			}
			}
			if (cm.getParty() == null) {
			cm.sendOk("很抱歉，我不能與妳交談，請讓妳的組長與我談話。");
			cm.dispose();
		} else {
			if (cm.isLeader()) {
			if (found) {
			cm.sendSimple(selStr);
		} else {
			cm.sendOk("現在沒有多餘的房間。");
			cm.dispose();
			}
		} else {
			cm.sendOk("很抱歉，我不能與妳交談，請讓妳的組長與我談話。");
			cm.dispose();
			}
			}
			}
		if (status == 1) {
			if (selection >= 0 && selection < 5) {
			if (cm.getEventManager("Ghost").getInstance("Ghost"+selection) == null) {
			if ((cm.getParty() != null && cm.getParty().getMembers().size() == 3) || cm.getPlayer().isGM()) {
			if (checkLevelsAndMap(60, 200) == 1) {
				cm.sendOk("  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：60 - 200  \r\n－#e其中一名組員不符合要求。");
				cm.dispose();
		} else if (checkLevelsAndMap(60, 200) == 2) {
				cm.sendOk("組隊中的組員必須都在這個地圖。");
				cm.dispose();
			} else {
				cm.getEventManager("Ghost").startInstance(""+selection, cm.getPlayer());
				cm.dispose();
				}
			} else {
				cm.sendOk("請符合入場人數要求。");
				}
		} else if (cm.getParty() != null && cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayerCount() == cm.getParty().getMembers().size()) {
			if (checkLevelsAndMap(60, 200) == 1) {
				cm.sendOk("  \n\r\n\r\n－#eParty Members#n：2 - 3\r\n－#elevel#n：60 - 200  \r\n－#e其中一名組員不符合要求。");
				cm.dispose();
		} else if (checkLevelsAndMap(60, 200) == 2) {
				cm.sendOk("組隊中的組員必須都在這個地圖。");
				cm.dispose();
			} else {
				//Send challenge packet here
				var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayers().get(0).getParty().getLeader().getName());
				owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
			//if (owner.getConversation() != 1) {
				cm.openNpc(owner.getClient(), 2060103);
				//}
				cm.sendOk("申請函已經發送");
				cm.dispose();
				}
			} else {
				cm.sendOk("參加霧海大作戰的雙方必須有相同數量的組員。");
				cm.dispose();
				}
			} else {
				cm.dispose();
				}
				}
				break;
	case 923020100:
	case 923020200:
	case 923020300:
	case 923020400:
	case 923020500:
		if (status == 0) {
			request = cm.getNextCarnivalRequest();
			if (request != null) {
			cm.sendYesNo(request.getChallengeInfo() + "\r\n你想參加到它們的霧海作戰計畫中嗎?");
		} else {
			cm.sendYesNo("離開這裡。");
			}
		} else {
			if (request == null) {
			cm.warp(923020001,0);
			cm.dispose();
			break;
			}
			try {
			cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
			cm.dispose();
			} catch (e) {
			cm.sendOk("挑戰不再有效。");
			}
			status = -1;
			}
			break;
			default:
		if (status == 0) {
			cm.sendYesNo("離開這裡。");
		} else {
			cm.warp(923020001,0);
			}
			break;
}
}

function getCPQField(fieldnumber) {
	var status = "";
	var event1 = cm.getEventManager("Ghost");
	if (event1 != null) {
		var event = event1.getInstance("Ghost"+fieldnumber);
	if (event == null) {
		status = "Dual Raid Field "+(fieldnumber+1)+"(3v3)";
	} else if (event != null && (event.getProperty("started") == null || event.getProperty("started").equals("false"))) {
		var averagelevel = 0;
		for (i = 0; i < event.getPlayerCount(); i++) {
		averagelevel += event.getPlayers().get(i).getLevel();
		}
		averagelevel /= event.getPlayerCount();
		status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"users/Avg. Level "+averagelevel;
		}
		}
		return status;
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var valid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	var cPlayer = it.next();
	if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
		valid = 1;
		}
	if (cPlayer.getMapid() != mapId) {
		valid = 2;
		}
		}
		return valid;
}