/*
	����:	����
	�؈D:	�������
	����:	925020001
*/

var status = -1;

var sel;
var mapid;

function start() {
	mapid = cm.getMapId();

	if (mapid == 925020001) {
		var chat = "My master is the most powerful man in Mu Lung. Are you telling me you're trying to challenge our great master? Don't say I didn't warn you.\r\n#b";
		chat += "\r\n#L0#��������";
		chat += "\r\n#L1#�M��M��";
		chat += "\r\n#L2#���Q����";
		chat += "\r\n#L3#�����ҵ�Ӗ���c";
		chat += "\r\n#L5#����Ӗ������ʲ�N��";
		cm.sendSimple(chat);
		} else if (isRestingSpot(mapid)) {
			cm.sendSimple("�Һ��@Ӡ֪�����ѽ���ȫ���_�����@��ˮ׼�� ���^���ҿ������㱣�C���@����׃�ø����ס� �����N�J�飿 �����^�m��?#b \n\r #L0# �ǵģ��ҕ��^�m.#l \n\r #L1# �����ȥ#l \n\r #L2# ������ҵ��M��ӛ���.#l");
		} else {
			cm.sendYesNo("ʲ�N�� ���ѽ��ʂ���x�_�ˣ� ��߀�Ԟ�����M����һ���ӴΡ� ��_��Ҫ�˳���?");
}
}

function action(mode, type, selection) {
	if (mapid == 925020001) {
	if (mode == 1) {
	status++;
	} else {
	cm.dispose();
	return;
	}
	if (status == 0) {
	sel = selection;

		if (sel == 0) {
			if (cm.getParty() != null) {
				cm.sendOk("Please leave your party.");
				cm.dispose();
			return;
			}
			var record = cm.getQuestRecord(150000);
			var data = record.getCustomData();

			if (data != null) {
				cm.warp(get_restinFieldID(parseInt(data)), 0);
				record.setCustomData(null);
			} else {
				cm.start_DojoAgent(true, false);
				}
				cm.dispose();
				}
		if (sel == 1) {
			if (cm.getParty() != null) {
				if (cm.isLeader()) {
					cm.sendOk("��F�����Mȥ��?");
				} else {
					cm.sendOk("�٣��㲻��С꠽M�L�� �������M���ʲ�N�� ��������Mȥ��Ԓ�����V��ĽM�L����ՄՄ��");
					cm.dispose();
					}
				} else {
					cm.sendOk("�����]�нMꠡ�");
					cm.dispose();
					return;
					}
					}
		if (sel == 2) {
			var chat = "#��Ŀǰ��ֹ�����Ŀ�Ӗ���֔��� #b"+cm.getDojoPoints()+"#k. �҂��Ď���ϲ�g�����x���ˣ����������@�����㹻��Ӗ���c������Ϳ��Ը������Ӗ���c���@��һ�l������ \r\n#b";
			chat += "\r\n#L0##i1132000:# #t1132000#(200)";
			chat += "\r\n#L1##i1132001:# #t1132001#(1800)";
			chat += "\r\n#L2##i1132002:# #t1132002#(4000)";
			chat += "\r\n#L3##i1132003:# #t1132003#(9200)";
			chat += "\r\n#L4##i1132004:# #t1132004#(17000)";
			cm.sendSimple(chat);
			}
		if (sel == 3) {
			cm.sendYesNo("��֪��������������Ӗ���c�����N�����ص�0�����᣿ �ό��f���@��һ���ǉ��¡� һ��������Ӗ���c�K�����_ʼ���㌢�ܹ��ٴ��յ������� �Ƿ�Ҫ����Ӗ���c��");
			}
		if (sel == 5) {
			cm.sendNext("�ҵĎ��������������������ˣ���ؓ؟�����@�����������Ӗ������ ����Ӗ������һ����38�ӽM�ɵĴ���Ӗ���Oʩ�� ÿһ�Ӵ������~����y�ȡ� ��Ȼ������ļ��ܣ����_플��ǲ����ܵġ�����");
			cm.dispose();
			}
			}
	if (status == 1) {
		if (sel == 1) {
			cm.start_DojoAgent(true, true);
			cm.dispose();
			}
		if (sel == 2) {
			var record = cm.getDojoRecord();
			var required = 0;
		
		switch (record) {
		case 0:
			required = 200;
			break;
		case 1:
			required = 1800;
			break;
		case 2:
			required = 4000;
			break;
		case 3:
			required = 9200;
			break;
		case 4:
			required = 17000;
			break;
			}

			if (record == selection && cm.getDojoPoints() >= required) {
			var item = 1132000 + record;
			if (cm.canHold(item)) {
				cm.gainItem(item, 1);
				cm.setDojoRecord(false);
			} else {
				cm.sendOk("Please check if you have any available slot in your inventory.");
				}
			} else {
				cm.sendOk("��Ҫ�N�ѽ���������Ҫ�NӖ���c�����㡣 һ��Ҫ��ԇ���Q���^����Ƥ����");
				}
				cm.dispose();
				}
		if (sel == 3) {
			cm.setDojoRecord(true);
			cm.sendOk("I have resetted your training points to 0.");
			cm.dispose();
			}
			}
	} else if (isRestingSpot(mapid)) {
	if (mode == 1) {
	status++;
	} else {
	cm.dispose();
	return;
	}

	if (status == 0) {
		sel = selection;

		if (sel == 0) {
			if (cm.getParty() == null || cm.isLeader()) {
				cm.dojoAgent_NextMap(true, true);
			} else {
				cm.sendOk("Only the leader may go on.");
				}
				//cm.getQuestRecord(150000).setCustomData(null);
				cm.dispose();
				}
		if (sel == 1) {
			cm.askAcceptDecline("Do you want to quit? You really want to leave here?");
			}
		if (sel == 2) {
			if (cm.getParty() == null) {
				var stage = get_stageId(cm.getMapId());

				cm.getQuestRecord(150000).setCustomData(stage);
				cm.sendOk("�҄���ӛ�������Mչ�� �´����ĕr���ҕ�ֱ�Ӱ����͵��@�����e��");
				cm.dispose();
			} else {
				cm.sendOk("�١��� �㲻���ڈF���ӛ�����M�ȡ�����");
				cm.dispose();
				}
				}
				}
	if (status == 1) {
		if (sel == 1) {
			if (cm.isLeader()) {
				cm.warpParty(925020002);
			} else {
				cm.warp(925020002);
				}
				}
				cm.dispose();
				}
			} else {
		if (mode == 1) {
			if (cm.isLeader()) {
				cm.warpParty(925020002);
			} else {
				cm.warp(925020002);
				}
				}
			cm.dispose();
}
}

function get_restinFieldID(id) {
	var idd = 925020002;
	switch (id) {
	case 1:
		idd =  925020600;
		break;
	case 2:
		idd =  925021200;
		break;
	case 3:
		idd =  925021800;
		break;
	case 4:
		idd =  925022400;
		break;
	case 5:
		idd =  925023000;
		break;
	case 6:
		idd =  925023600;
		break;
		}
		for (var i = 0; i < 10; i++) {
		var canenterr = true;
		for (var x = 1; x < 39; x++) {
		var map = cm.getMap(925020000 + 100 * x + i);
		if (map.getCharactersSize() > 0) {
			canenterr = false;
			break;
			}
			}
		if (canenterr) {
			idd += i;
			break;
			}
			}
		return idd;
}

function get_stageId(mapid) {
	if (mapid >= 925020600 && mapid <= 925020614) {
		return 1;
	} else if (mapid >= 925021200 && mapid <= 925021214) {
		return 2;
	} else if (mapid >= 925021800 && mapid <= 925021814) {
		return 3;
	} else if (mapid >= 925022400 && mapid <= 925022414) {
		return 4;
	} else if (mapid >= 925023000 && mapid <= 925023014) {
		return 5;
	} else if (mapid >= 925023600 && mapid <= 925023614) {
		return 6;
		}
		return 0;
}

function isRestingSpot(id) {
	return (get_stageId(id) > 0);
}