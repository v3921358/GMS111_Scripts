/*
	����:	�ݱ˵���
	�؈D:	���껪ս����ͼ&amp;lt;ʤ�����ź�&gt;
	����:	980031300
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
			cm.sendSimple("������ʲ�N��������δ�����^��������A��������Ҫ�څ���֮ǰ�t��һ�ɼ��¡�\r\n#b#L0# ȥ��������A����#l");
		}
		}
	if (status == 1) {
		switch (selection) {
		case 0: {
			var level = cm.getPlayerStat("LVL");
				if ( level < 50) {
					cm.sendOk("������ֻ��50�����ϵ��Ñ����܅��ӹ�������A��");
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
			cm.sendOk("���A�����@�����Y��������ı�F�����@�U����������㡣 \r\n#bMonster Carnival Rank : " + rank);
		} else {
			cm.sendOk("���ҵ��ǣ���Ҫ�Nƽ�֣�Ҫ�Nݔ�����@�����Y���������F�@�ˣ���һ�΄�����ԓ����㡣 \r\n#bMonster Carnival Rank : " + rank);
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