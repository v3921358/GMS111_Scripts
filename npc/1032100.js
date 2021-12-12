/*
	名字:	妖精 艾温
	地圖:	魔法密林
	描述:	101000000
*/

var status = -1

var item;
var selected;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (cm.getPlayerStat("LVL") >= 10) {
		cm.sendSimple("對！ 我是妖精族中的煉金術專家…我們妖精族自古以來就被禁止跟人類接觸，但是像你這麼強壯的人沒關係。 你給我資料，我幫你做特別的東西。#b\r\n#L0##v4011007:#月石#l\r\n#L1##v4021009:#星石#l\r\n#L2##v4031042:#黑羽毛#l");
	} else {
		cm.sendOk("抱歉！ 我的稀有物品不能給我不認識的人。");
		cm.dispose();
		}
		}
	if (status == 1) {
		selected = selection;
	if (selection == 0) {
	item = "月石";
		cm.sendYesNo("你想做月石？ 做那個東西，需要治煉的#b青銅#k，#b鋼鐵#k，#b鋰礦石#k，#b朱礦石#k，#b銀#k，#b紫礦石#k，#b黃金#k各一個。 還需要10000楓幣。");
		}
	if (selection == 1) {
	item = "星石";
		cm.sendYesNo("你想做星石？ 做那個東西，需要各一個#b石榴石#k，#b紫水晶#k，#b海藍寶石#k，#b祖母緣#k，#b蛋白石#k，#b黃晶#k，#b鑽石#k，#b黑水晶#k，還需要15000楓幣。");
		}
	if (selection == 2) {
	item = "黑羽毛";
		cm.sendYesNo("你想做黑羽毛？ 做那個東西，需要1個#b火焰羽毛和一個月石和一個黑水晶#k，還需要30000楓幣。 啊！ 這個翼毛是非常特別的，如果它掉在地上，它就會消失，就不能給別人。");
		}
		}
	if (status == 2) {
	if (selected == 0) {
	if (cm.haveItem(4011000) && cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4011003) && cm.haveItem(4011004) && cm.haveItem(4011005) && cm.haveItem(4011006) && cm.getMeso() > 10000) {
		cm.gainMeso(-10000);
		cm.gainItem(4011000, -1);
		cm.gainItem(4011001, -1);
		cm.gainItem(4011002, -1);
		cm.gainItem(4011003, -1);
		cm.gainItem(4011004, -1);
		cm.gainItem(4011005, -1);
		cm.gainItem(4011006, -1);
		cm.gainItem(4011007, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bBronze Plate#k, #bSteel Plate#k,\r\n#bMithril Plate#k, #bAdamantium Plate#k, #bSilver Plate#k, #bOrihalcon Plate#k and #bGold Plate#k, one of each.");
		}
		}
	if (selected == 1) {
	if (cm.haveItem(4021000) && cm.haveItem(4021001) && cm.haveItem(4021002) && cm.haveItem(4021003) && cm.haveItem(4021004) && cm.haveItem(4021005) && cm.haveItem(4021006) && cm.haveItem(4021007) && cm.haveItem(4021008) && cm.getMeso() > 15000) {
		cm.gainMeso(-15000);
		cm.gainItem(4021000, -1);
		cm.gainItem(4021001, -1);
		cm.gainItem(4021002, -1);
		cm.gainItem(4021003, -1);
		cm.gainItem(4021004, -1);
		cm.gainItem(4021005, -1);
		cm.gainItem(4021006, -1);
		cm.gainItem(4021007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4021009, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bGarnet#k, #bAmethyst#k, #bAquaMarine#k, #bEmerald#k, #bOpal#k, #bSapphire#k, #bTopaz#k, #bDiamond#k and #bBlack Crystal#k, one of each.");
		}
		}
	if (selected == 2) {
	if (cm.haveItem(4001006) && cm.haveItem(4011007) && cm.haveItem(4021008) && cm.getMeso() > 30000) {
		cm.gainMeso(-30000);
		cm.gainItem(4001006, -1);
		cm.gainItem(4011007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4031042, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bGarnet#k, #bAmethyst#k, #bAquaMarine#k, #bEmerald#k, #bOpal#k, #bSapphire#k, #bTopaz#k, #bDiamond#k and #bBlack Crystal#k, one of each.");
		}
		}
	cm.dispose();
}
}