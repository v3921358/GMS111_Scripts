/*
	����:	�Ű���
	�؈D:	������ɽ��
	����:	926010000
*/

var status = 0;

var section = 0;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 99 || status == 1 || status == 2 && mode == 0) {
		cm.dispose();
		return;
	}
	status--;
	}
	if (status == 1) {
	if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
		var itemid = 4001321 + (cm.getMapId() % 10);
			if (!cm.canHold(itemid)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g..");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(cm.getMapId() - 10000, 0);
			}
			cm.dispose();
		} else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
			cm.warp(926010000,0);
			cm.dispose();
		} else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
			cm.sendYesNo("��_�����x�_�@���ط��᣿");
			status = 99;
		} else {
			cm.sendSimple("#e<�M��΄գ����صĽ�����>#n  \n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n�� 40 - 200  \n\r\n\r\n#b#e#L1#�M�������#l#n\r\n#L2#ѩ�˷���Ĺ#l\r\n#L3# һ���P�ѩ�˷����錚�Ĺ���#l\r\n#L4#���Q<�����o�l��>����#l#k");
			}
			}
	if (status == 2) {
		section = selection;
		if (selection == 1) {
			var chat = "Ո�x���㌦���y�ȣ� \r\n#b";
			//chat += "\r\n#L0##v3994115#";
			chat += "\r\n#L1##v3994116#";
			chat += "#L2##v3994117#";
			chat += "#L3##v3994118#";
			cm.sendSimple(chat);
			}
		if (selection == 2) {
			var chat = "ֻ�Дy����������ʯ�Ҳ���׌���Mȥ�� \r\n#b";
			chat += "\r\n#L0##v4001322:##t4001322#";
			chat += "\r\n#L1##v4001323:##t4001323#";
			chat += "\r\n#L2##v4001324:##t4001324#";
			chat += "\r\n#L3##v4001325:##t4001325#";
			cm.sendSimple(chat);
			}
		if (selection == 3) {
			cm.sendOk("��Ү�ᷨ�ϵĉ�Ĺ�Y������ԫ@��#e#b#t2022613##k#n�C���Լ���������СҮ�ᷨ�ϣ����ϵ��}�u�ˡ������Y����һ���ǳ��؄e�Č��ء�����#b#b#t1132012##k#n.\r\n#i1132012# \r\n\r\n��������ڵتzģʽ�����棬�㌢�õ�#b#b#t1132013##k#n.\r\n#i1132013# \r\n��Ȼ�������ǲ����S�@�N�°l����");
			cm.dispose();
			}
		if (selection == 4) {
			var record = cm.getQuestRecord(7760);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
				}
				var mons = parseInt(data);
			if (mons < 50000) {
				cm.sendOk("Ո�򔡽������Y�������f������. Kills : " + mons);
			} else if (cm.canHold(1142142) && !cm.haveItem(1142142)){
				cm.gainItem(1142142,1);
				cm.forceStartQuest(29932);
				cm.forceCompleteQuest(29932);
			} else {
				cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
				}
				cm.dispose();
				}
				}
	if (status == 3) {
		if (section == 1) {
			var cont_ = false;
			if (selection == 0) { //easy; 40-45
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��40 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��40 - 60");
				} else {
					cont_ = true;
					}
				} else if (selection == 1) { //normal; 46-50
					if (cm.getPlayer().getLevel() < 45) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��45 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��45 - 60");
				} else {	
					cont_ = true;
					}
					}
			if (selection == 2) { //hard; 51-60
				if (cm.getPlayer().getLevel() < 50) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��50 - 60");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��50 - 60");
				} else {
					cont_ = true;
					}
					}
			if (selection == 3) { //hell; 61+
				if (cm.getPlayer().getLevel() < 61) {
					cm.sendOk("\n\r\n\r\n��#eParty Members#n��2 - 6\r\n��#elevel#n��60 - 200");
				} else {
					cont_ = true;
					}
					}
				if (cont_ && cm.isLeader()) {//todo
				if (!cm.start_PyramidSubway(selection)) {
					cm.sendOk("�������Ӽ{�ˆT�ѝM��Ո����Lԇ��");
					}
				} else if (cont_ && !cm.isLeader()) {
					cm.sendOk("You must be the party leader");
					}
					}
		if (section == 2) {
			var itemid = 4001322 + selection;
				if (!cm.haveItem(itemid,1)) {
					cm.sendOk("���]��ԓ��Ʒ���ҟo���o����ա�");
				} else {
					if (cm.bonus_PyramidSubway(selection)) {
					cm.gainItem(itemid, -1);
				} else {
					cm.sendOk("�������Ӽ{�ˆT�ѝM��Ո����Lԇ��");
					}
					}
					}
					cm.dispose(); //todo
					}
	if (status == 100) {
		cm.warp(926010000,0);
		cm.dispose();
}
}