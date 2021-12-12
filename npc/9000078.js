/*
	名字:	尤斯
	地圖:	黄金寺院
	描述:	950100000
*/

function start() {
	var chat = "歡迎來到金殿！你是否已持有參觀卷，我這裡可以提供優惠的價格#b";
	chat += "\r\n#L0##v4001431:##t4001431##k#b3000000楓幣";
	chat += "\r\n#L1##v4001432:##t4001432##k#b5000000楓幣（1小時內無限制入場）";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.canHold(4001431,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.getMeso() > 3000000) {
			cm.gainMeso(-3000000);
			cm.gainItem(4001431, 1);
			cm.sendOk("Thank you.");
		} else {
			cm.sendOk("你沒有足够的楓幣。");
			}
			break;
	case 1:
		if (!cm.canHold(4001432,1)) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (cm.getMeso() > 5000000) {
			cm.gainMeso(-50000000);
			cm.gainItem(4001432, 1);
			cm.sendOk("謝謝惠顧。");
		} else {
			cm.sendOk("你沒有足够的楓幣。");
			}
			}
		cm.dispose();
}
