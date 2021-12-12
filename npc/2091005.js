/*
	名字:	萧公
	地圖:	武陵道场
	描述:	925020001
*/

var status = -1;

var sel;
var mapid;

function start() {
	mapid = cm.getMapId();

	if (mapid == 925020001) {
		var chat = "My master is the most powerful man in Mu Lung. Are you telling me you're trying to challenge our great master? Don't say I didn't warn you.\r\n#b";
		chat += "\r\n#L0#單人挑戰";
		chat += "\r\n#L1#組隊進入";
		chat += "\r\n#L2#兌換腰帶";
		chat += "\r\n#L3#重置我的訓練點";
		chat += "\r\n#L5#武陵訓練塔是什麼？";
		cm.sendSimple(chat);
		} else if (isRestingSpot(mapid)) {
			cm.sendSimple("我很驚訝知道你已經安全地達到了這個水准。 不過，我可以向你保證，這不會變得更容易。 你怎麼認為？ 你想繼續嗎?#b \n\r #L0# 是的，我會繼續.#l \n\r #L1# 我想出去#l \n\r #L2# 我想把我的進度記錄下來.#l");
		} else {
			cm.sendYesNo("什麼？ 你已經準備好離開了？ 我還以為你會進入下一個層次。 你確定要退出嗎?");
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
					cm.sendOk("你現在想進去嗎?");
				} else {
					cm.sendOk("嘿，你不是小隊組長。 你想溜進來幹什麼？ 如果你想進去的話，告訴你的組長跟我談談。");
					cm.dispose();
					}
				} else {
					cm.sendOk("你好像沒有組隊。");
					cm.dispose();
					return;
					}
					}
		if (sel == 2) {
			var chat = "#到目前為止，您的總訓練分數為 #b"+cm.getDojoPoints()+"#k. 我們的師傅喜歡有天賦的人，所以如果你獲得了足够的訓練點數，你就可以根據你的訓練點數獲得一條腰帶。 \r\n#b";
			chat += "\r\n#L0##i1132000:# #t1132000#(200)";
			chat += "\r\n#L1##i1132001:# #t1132001#(1800)";
			chat += "\r\n#L2##i1132002:# #t1132002#(4000)";
			chat += "\r\n#L3##i1132003:# #t1132003#(9200)";
			chat += "\r\n#L4##i1132004:# #t1132004#(17000)";
			cm.sendSimple(chat);
			}
		if (sel == 3) {
			cm.sendYesNo("你知道如果你重置你的訓練點，那麼它會回到0，對嗎？ 老實說，這不一定是壞事。 一旦你重置訓練點並重新開始，你將能够再次收到腰帶。 是否要重置訓練點？");
			}
		if (sel == 5) {
			cm.sendNext("我的師父是武陵最有力量的人，他負責建造這座神奇的武陵訓練塔。 武陵訓練塔是一座由38層組成的大型訓練設施。 每一層代表著額外的難度。 當然，以你的技能，到達頂層是不可能的。。。");
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
				cm.sendOk("你要麼已經擁有它，要麼訓練點數不足。 一定要先試著換上較弱的皮帶。");
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
				cm.sendOk("我剛剛記錄了你的進展。 下次你來的時候，我會直接把你送到這個級別。");
				cm.dispose();
			} else {
				cm.sendOk("嘿。。 你不能在團隊中記錄你的進度。。。");
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