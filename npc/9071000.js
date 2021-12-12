/*
	名字:	休彼德蔓
	地圖:	怪物公园
	描述:	951000000
*/

var items = Array(1182000, 1182002, 1182004, 1012270, 1162008);
var coins = Array(10, 30, 50, 30, 50);

function start() {
	var selStr = "#v4310020:##t4310020##k    #r#c4310020#  \r\n\r\n#b";
	for (var i = 0; i < items.length; i++) {
	selStr += "#L" + i + "##i" + items[i] + "# for " + coins[i] + " Monster Park Coins (Permanent) #l\r\n";
	}
	cm.sendSimple(selStr);
}

function action(mode, type, selection) {
	if (mode == 1 && selection >= 0 && selection < items.length) {
		if (!cm.canHold(items[selection])) {
			cm.sendOk("無法收納物品，請清理背包空間。");
		} else if (!cm.haveItem(4310020, coins[selection])) {
			cm.sendOk("You only have : #r#c4310020#  #v4310020:# ");
		} else {
			cm.gainItem(4310020, -coins[selection]);
			cm.gainItem(items[selection], 1);
			}
			}
		cm.dispose();
}