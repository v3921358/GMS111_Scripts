/*
	����:	�ݱ˵���
	�؈D:	�ݱ˵����İ칫��
	����:	980030000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#e<�M��΄գ���������A2>#n  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��50 - 200  \r\n��#eSign up for Monster Carnival#n \r\n#L100#���Q����#l";
		var found = false;
		for (var i = 0; i < 3; i++){
		if (getCPQField(i+1) != "") {
			selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
			found = true;
			}
			}
		if (cm.getParty() == null) {
			cm.sendSimple("��횽M꠲��܅���#b#e<��������A2>#k \r\n#L100#���Q����#l");
		} else {
			if (cm.isLeader()) {
			if (found) {
			cm.sendSimple(selStr);
		} else {
			cm.sendSimple("�F�ڛ]�ж��N�ķ��g��\r\n#L100#���Q����#l");
			}
		} else {
			cm.sendSimple("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌���ĽM�L�c��ՄԒ��\r\n#L100#���Q����#l");
			}
			}
			}
	if (status == 1) {
		if (selection == 100) {
		var chat = "#Ո�x�����냶�Q�Ī��\r\n#b";
		chat += "\r\n#L0#50 #v4001129:##t4001129# = #v1122007:##t1122007#";
		chat += "\r\n#L1#30 #v4001129:##t4001129# = #v2041211:##t2041211#";
		chat += "\r\n#L2#50 #v4001254:##t4001254# = #v1122058:##t1122058#";
		cm.sendSimple(chat);
		} else if (selection >= 0 && selection < 3) {
		var mapid = 980030000+((selection+1)*1000);
		if (cm.getEventManager("cpq2").getInstance("cpq"+mapid) == null) {
		if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 1 ? 4 : 3)) || cm.getPlayer().isGM()) {
		if (checkLevelsAndMap(50, 200) == 1) {
			cm.sendOk("  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��50 - 200  \r\n��#e����һ���M�T������Ҫ��");
			cm.dispose();
		} else if (checkLevelsAndMap(50, 200) == 2) {
			cm.sendOk("�M��еĽM�T��횶����@���؈D��");
			cm.dispose();
		} else {
			cm.getEventManager("cpq2").startInstance(""+mapid, cm.getPlayer());
			cm.dispose();
			}
		} else {
			cm.sendOk("Ո��������˔�Ҫ��");
			}
		} else if (cm.getParty() != null && cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
			if (checkLevelsAndMap(50, 200) == 1) {
			cm.sendOk("  \n\r\n\r\n��#eParty Members#n��2 - 3\r\n��#elevel#n��50 - 200  \r\n��#e����һ���M�T������Ҫ��");
			cm.dispose();
		} else if (checkLevelsAndMap(50, 200) == 2) {
			cm.sendOk("�M��еĽM�T��횶����@���؈D��");
			cm.dispose();
		} else {
			//Send challenge packet here
			var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
			owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
			//if (owner.getConversation() != 1) {
			cm.openNpc(owner.getClient(), 2042006);
			//}
			cm.sendOk("��Ո���ѽ��l�͡�");
			cm.dispose();
			}
		} else {
			cm.sendOk("���� �����A2 ���p���������ͬ�����ĽM�T��");
			cm.dispose();
			}
		} else {
			cm.dispose();
			}
			}
	if (status == 2) {
		if (selection == 0) {
			if (!cm.haveItem(4001129,50)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(1122007,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else {
				cm.gainItem(1122007,1);
				cm.gainItem(4001129,-50);
				}
				cm.dispose();
				}
		if (selection == 1) {
			if (!cm.haveItem(4001129,30)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(2041211,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else {
				cm.gainItem(2041211,1);
				cm.gainItem(4001129,-30);
				}
				cm.dispose();
				}
		if (selection == 2) {
			if (!cm.haveItem(4001254,50)) {
				cm.sendOk("You have no items.");
			} else if (!cm.canHold(1122058,1)) {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
			} else {
				cm.gainItem(1122058,1);
				cm.gainItem(4001254,-50);
				}
				cm.dispose();
}
}
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

function getCPQField(fieldnumber) {
	var status = "";
	var event1 = cm.getEventManager("cpq2");
	if (event1 != null) {
		var event = event1.getInstance("cpq"+(980030000+(fieldnumber*1000)));
	if (event == null && fieldnumber < 1) {
		status = "Carnival Field "+fieldnumber+"(2v2)";
	} else if (event == null) {
		status = "Carnival Field "+fieldnumber+"(3v3)";
	} else if (event != null && (event.getProperty("started").equals("false"))) {
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
