/*
	名字:	休彼德蔓
	地圖:	嘉年华战斗地图&amp;lt;胜利的呐喊&gt;
	描述:	980031300
*/

var status = -1;

var rank = "C";
var exp = 0;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
		if (cm.getCarnivalParty() != null && cm.getCarnivalParty().getTotalCP() > 0) {
			status = 100;
		} else {
			cm.sendSimple("你想做什麼？如果你從未參加過怪物嘉年華會，你需要在參加之前瞭解一兩件事。\r\n#b#L0# 去怪物嘉年華會場#l");
		}
		}
	if (status == 1) {
		switch (selection) {
		case 0: {
			var level = cm.getPlayerStat("LVL");
				if ( level < 50) {
					cm.sendOk("對不起，只有50級以上的用戶才能參加怪物嘉年華。");
				} else {
					cm.warp( 980030000, "st00" );
					}
					cm.dispose();
					}
					default: {
					cm.dispose();
					break;
					}
					break;
					}
					}
	if (status == 100) {
		var carnivalparty = cm.getCarnivalParty();
		if (carnivalparty.getTotalCP() >= 501) {
			rank = "A";
			exp = 48000;
		} else if (carnivalparty.getTotalCP() >= 251) {
			rank = "B";
			exp = 35000;
		} else if (carnivalparty.getTotalCP() >= 101) {
			rank = "C";
			exp = 25000;
		} else if (carnivalparty.getTotalCP() >= 0) {
			rank = "D";
			exp = 15000;
			}
			cm.getPlayer().endPartyQuest(1302);
		if (carnivalparty.isWinner()) {
			cm.sendOk("你贏得了這場戰鬥，儘管你的表現令人驚歎，勝利屬於你。 \r\n#bMonster Carnival Rank : " + rank);
		} else {
			cm.sendOk("不幸的是，你要麼平局，要麼輸掉了這場戰鬥，儘管你表現驚人，下一次勝利應該屬於你。 \r\n#bMonster Carnival Rank : " + rank);
			}
			}
	if (status == 101) {
		var carnivalparty = cm.getCarnivalParty();
		var los = parseInt(cm.getPlayer().getOneInfo(1302, "lose"));
		var vic = parseInt(cm.getPlayer().getOneInfo(1302, "vic"));
		if (carnivalparty.isWinner()) {
			vic++;
			cm.getPlayer().updateOneInfo(1302, "vic", "" + vic);
			carnivalparty.removeMember(cm.getChar());
			cm.gainExpR(exp);
		} else {
			los++;
			cm.getPlayer().updateOneInfo(1302, "lose", "" + los);
			carnivalparty.removeMember(cm.getChar());
			cm.gainExpR(exp / 2);

			}
			cm.getPlayer().updateOneInfo(1302, "VR", "" + (java.lang.Math.ceil((vic * 100) / los)));
			cm.warp(980030000);
		cm.dispose();
}
}