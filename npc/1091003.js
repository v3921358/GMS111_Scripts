/*
	名字:	士林
	地圖:	海岸草丛
	描述:	120020000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "你想做自己的武器和手套？認真？......如果你沒有經驗的話，很難自己做出來...交給我這個20年的老手吧，因為這對我很容易的。";
		var options = new Array("做指虎", "做火槍", "做海盜手套");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}

		cm.sendSimple(selStr);
		}
	if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //Making a Knuckler
			var selStr = "只要你帶上所需的資料，我就讓你成為一名優秀的指節手。 你想做哪個指節?";
			var knucklers = new Array("Leather Arms (Level limit: 15, Pirate)", "Double Tail Knuckler (Level limit: 20, Pirate)", "Norman Grip (Level limit: 25, Pirate)", "Prime Hands (Level limit: 30, Pirate)", "Silver Maiden (Level limit: 35, Pirate)", "Neozard (Level limit: 40, Pirate)", "Fury Claw (Level limit: 50, Pirate)");
			for (var i = 0; i < knucklers.length; i++){
			selStr += "\r\n#L" + i + "# " + knucklers[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
			}
		if (selectedType == 1){ //Making a Gun
			var selStr = "只要你帶上所需的資料，我就給你做一把好槍。 你想做哪支槍？";
			var guns = new Array("Dellinger Special (Level limit: 15, Pirate)", "The Negotiator (Level limit: 20, Pirate)", "Golden Hook (Level limit: 25, Pirate)", "Cold Mind (Level limit: 30, Pirate)", "Shooting Star (Level limit: 35, Pirate)", "Lunar Shooter (Level limit: 40, Pirate)", "Mr. Rasfelt (Level limit: 50, Pirate)");
			for (var i = 0; i < guns.length; i++){
			selStr += "\r\n#L" + i + "# " + guns[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
			}
		if (selectedType == 2){ //Making a pair of pirate gloves
			var selStr = "只要你帶上所需的資料，我就給你做一隻好手套。 你想做哪只手套？";
			var gloves = new Array ("Green Lagger Halfglove","Brown Leather Armour Glove","Hard Leather Glove","Yellow Tartis","Brown Jewelled","Brown Barbee","Brown Royce","Black Schult");
			for (var i = 0; i < gloves.length; i++){
			selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
			}
			if (equip)
			status++;
			}
	if (status == 3 && mode == 1) {
			if (equip)
			{
		selectedItem = selection;
			qty = 1;
			}
		else
			qty = selection;

		if (selectedType == 0){ //Making a Knuckler
			var itemSet = new Array(1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007);
			var matSet = new Array(4000021, new Array(4011001,4011000,4000021,4003000), new Array(4011000,4011001,4003000), new Array(4011000,4011001,4000021,4003000), new Array(4011000,4011001,4000021,4003000), new Array(4011000,4011001,4021000,4000021,4003000), new Array(4000039,4011000,4011001,4000030,4000021,4003000));
			var matQtySet = new Array(20, new Array(1,1,10,5), new Array(2,1,10), new Array(1,1,30,10), new Array(2,2,30,20), new Array(1,1,2,50,20), new Array(150,1,2,20,20,20));
			var costSet = new Array(1000,2000,5000,15000,30000,50000,100000);
			var levelLimitSet = new Array(15,20,25,30,35,40,50);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			levelLimit = levelLimitSet[selectedItem];
			}
		if (selectedType == 1){ //Making a Gun
			var itemSet = new Array(1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007);
			var matSet = new Array(new Array(4011000,4003000,4003001), new Array(4011000,4003000,4003001,4000021), new Array(4011000,4003000), new Array(4011001,4000021,4003000), new Array(4011006,4011001,4000021,4003000), new Array(4011004,4011001,4000021,4003000), new Array(4011006,4011004,4011001,4000030,4003000));
			var matQtySet = new Array(new Array(1,5,1), new Array(1,10,5,10), new Array(2,10), new Array(2,10,10), new Array(10,2,5,10), new Array(1,2,10,20), new Array(1,2,4,30,30));
			var costSet = new Array (1000,2000,5000,15000,30000,50000,100000);
			var levelLimitSet = new Array(15,20,25,30,35,40,50);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			levelLimit = levelLimitSet[selectedItem];
			}
		if (selectedType == 2){ //Making a pair of pirate gloves
			var itemSet = new Array(1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201);
			var matSet = new Array(new Array(4000021,4021003),4000021,new Array(4011000,4000021),new Array(4021006,4000021,4003000),new Array(4011000,4000021,4003000),new Array(4000021,4011000,4011001,4003000),new Array(4011000,4000021,4000030,4003000),new Array(4011007,4021008,4021007,4000030,4003000));
			var matQtySet = new Array(new Array(15,1),35,new Array(2,20),new Array(2,50,10),new Array(3,60,15),new Array(80,3,3,25),new Array(3,20,40,30),new Array(1,1,1,50,50));
			var costSet = new Array(1000,8000,15000,25000,30000,40000,50000,70000);
			var levelLimitSet = new Array(15,20,25,30,35,40,50,60);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			levelLimit = levelLimitSet[selectedItem];
			}

			prompt = "做一個 #t" + item + "# requires the items listed below. The level limit for this item is " + levelLimit + ", so check and make sure you really need this item before getting it. What do you think? Do you really want one?\r\n";

		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
			prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
			}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
			}

		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost * qty + " meso";

			cm.sendYesNo(prompt);
			}
	if (status == 4 && mode == 1) {
		var pass = false;

		if (cm.getMeso() < cost * qty) {
			cm.sendOk("恐怕你付不起我的服務費。")
			cm.dispose();
			return;
		} else {
		if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++) {
			pass = cm.haveItem(mats[i], matQty[i] * qty);
			if (!pass) {
			break;
			}
			}
		} else {
			pass = cm.haveItem(mats, matQty * qty);
			}
			}

		if (pass == false)
			cm.sendNext("檢查並確保您擁有完成此操作所需的所有材料。 此外，確保你的裝備庫存有足够的空間。 你知道，如果你的存貨已經滿了，我就不能給你這個東西。");
		else {
		if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i] * qty);
			}
			}
		else
			cm.gainItem(mats, -matQty * qty);

		if (cost > 0)
			cm.gainMeso(-cost * qty);
				
		if (item == 4003000)//screws
			cm.gainItem(4003000, 15 * qty);
		else
			cm.gainItem(item, qty);
		cm.sendOk("都做完了。 如果你還需要什麼。。。 我哪兒也不去。");
		}
	cm.dispose();
}
}