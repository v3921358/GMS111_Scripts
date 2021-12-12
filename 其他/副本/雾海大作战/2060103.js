/*
	����:	����
	�؈D:	���������鴬
	����:	923020000
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
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
	return;
	}
	switch(cm.getPlayer().getMapId()) {
	case 923020000:
		if (status == 0 && mode == 1) {
			var selStr = "#e<�M��΄գ��F��������>#n  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��60 - 200 \r\n��#eSign up for Dual Raid#n";
			var found = false;
			for (var i = 0; i < 5; i++){
			if (getCPQField(i) != "") {
			selStr += "\r\n#b#L" + i + "# " + getCPQField(i) + "#l#k";
			found = true;
			}
			}
			if (cm.getParty() == null) {
			cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌���ĽM�L�c��ՄԒ��");
			cm.dispose();
		} else {
			if (cm.isLeader()) {
			if (found) {
			cm.sendSimple(selStr);
		} else {
			cm.sendOk("�F�ڛ]�ж��N�ķ��g��");
			cm.dispose();
			}
		} else {
			cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌���ĽM�L�c��ՄԒ��");
			cm.dispose();
			}
			}
			}
		if (status == 1) {
			if (selection >= 0 && selection < 5) {
			if (cm.getEventManager("Ghost").getInstance("Ghost"+selection) == null) {
			if ((cm.getParty() != null && cm.getParty().getMembers().size() == 3) || cm.getPlayer().isGM()) {
			if (checkLevelsAndMap(60, 200) == 1) {
				cm.sendOk("  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��60 - 200  \r\n��#e����һ���M�T������Ҫ��");
				cm.dispose();
		} else if (checkLevelsAndMap(60, 200) == 2) {
				cm.sendOk("�M��еĽM�T��횶����@���؈D��");
				cm.dispose();
			} else {
				cm.getEventManager("Ghost").startInstance(""+selection, cm.getPlayer());
				cm.dispose();
				}
			} else {
				cm.sendOk("Ո��������˔�Ҫ��");
				}
		} else if (cm.getParty() != null && cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayerCount() == cm.getParty().getMembers().size()) {
			if (checkLevelsAndMap(60, 200) == 1) {
				cm.sendOk("  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��60 - 200  \r\n��#e����һ���M�T������Ҫ��");
				cm.dispose();
		} else if (checkLevelsAndMap(60, 200) == 2) {
				cm.sendOk("�M��еĽM�T��횶����@���؈D��");
				cm.dispose();
			} else {
				//Send challenge packet here
				var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayers().get(0).getParty().getLeader().getName());
				owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
			//if (owner.getConversation() != 1) {
				cm.openNpc(owner.getClient(), 2060103);
				//}
				cm.sendOk("��Ո���ѽ��l��");
				cm.dispose();
				}
			} else {
				cm.sendOk("�����F����������p���������ͬ�����ĽM�T��");
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
			cm.sendYesNo(request.getChallengeInfo() + "\r\n���녢�ӵ��������F������Ӌ���І�?");
		} else {
			cm.sendYesNo("�x�_�@�e��");
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
			cm.sendOk("��������Ч��");
			}
			status = -1;
			}
			break;
			default:
		if (status == 0) {
			cm.sendYesNo("�x�_�@�e��");
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