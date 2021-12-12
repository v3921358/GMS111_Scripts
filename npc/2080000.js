/*
	名字:	摩斯
	地圖:	神木村
	描述:	240000000
*/

var status = -2;

var selectedType = -1;
var selectedItem = -1;
var stimulator = false;
var bustedDagger = false;
var item;
var mats;
var matQty;
var cost;
var stimID;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	cm.dispose();
	return;
	}
	if (status == -1) {
		cm.sendSimple("你好~如果你有興趣陞級或修理你的武器，你一定來對地方了！ 我是利弗爾這個偉大小鎮上最好的武器製造商。 好吧，你覺得一件裝備著龍的不可思議力量的武器怎麼樣？ 你有興趣嗎？\r\n#L0# 製造龍武器#l\r\n#L100# 修理設備#l");
	} else if (status == 0) {
		if (selection == 0) {
			if (cm.haveItem(4001079)) {
			bustedDagger = true;
			cm.sendNext("這是怎麼一回事？ 你那把破匕首看起來很舊，我需要 #v4011001:# and #v4011002:#.");
		} else {
			var selStr = "龍的力量不可低估。 如果你願意，我可以把它的力量加到你的武器上。 然而，武器必須足够强大，以保持其潜力。#b";
			var options = new Array("什麼是催化劑?", "做一個劍士武器", "做一個弓箭手武器", "做一個法師武器", "做一個盜賊武器", "做一個海盜武器",
			"做一個劍士武器使用催化劑", "做一個弓箭手武器使用催化劑", "做一個法師武器使用催化劑", "做一個盜賊武器使用催化劑", "做一個海盜武器使用催化劑");
			for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		} else {
			cm.sendYesNo("冒險家！ 我會向你展示我的能力。 您知道服務費根據物品的等級和耐久性而有所不同，是嗎？ 您想現在修理您的設備嗎？");
			status = 99;
			}
			}
	if (status == 1){
		if (bustedDagger) {
			if (cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4001079)) {
			cm.gainItem(4011001, -1);
			cm.gainItem(4011002, -1);
			cm.gainItem(4001079, -1);
			cm.gainItem(4001078, 1);
		} else {
			cm.sendOk("您沒有所需的材料。 ");
			}
			cm.dispose();
		} else {
			selectedType = selection;
			if (selectedType > 5) {
			stimulator = true;
			selectedType -= 5;
			}
		else
			stimulator = false;
		if (selectedType == 0){ //What's a stim?
			cm.sendNext("催化劑是一種特殊的藥劑，我可以添加到製作某些物品的過程中。 虽然能够起到强化物品的作用，但是催化劑也是是具有风险的， 可能沒有變化，也可能項目低於平均水準。 使用催化劑時也有10%的幾率得不到任何物品，所以請明智地選擇。")
			cm.dispose();
			}
		if (selectedType == 1){ //warrior weapon
			var selStr = "Very well, then which Warrior weapon shall recieve a dragon's power?#b";
			var weapon = new Array ("Dragon Carbella#k - Lv. 110 One-Handed Sword#b","Dragon Axe#k - Lv. 110 One-Handed Axe#b","Dragon Mace#k - Lv. 110 One-Handed BW#b","Dragon Claymore#k - Lv. 110 Two-Handed Sword#b","Dragon Battle Axe#k - Lv. 110 Two-Handed Axe#b","Dragon Flame#k - Lv. 110 Two-Handed BW#b",
			"Dragon Faltizan#k - Lv. 110 Spear#b","Dragon Chelbird#k - Lv. 110 Polearm#b");
			for (var i = 0; i < weapon.length; i++){
			selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 2){ //bowman weapon
			var selStr = "Very well, then which Bowman weapon shall recieve a dragon's power?#b";
			var weapon = new Array ("Dragon Shiner Bow#k - Lv. 110 Bow#b","Dragon Shiner Cross#k - Lv. 110 Crossbow#b");
			for (var i = 0; i < weapon.length; i++){
			selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 3){ //magician weapon
			var selStr = "Very well, then which Magician weapon shall recieve a dragon's power?#b";
			var weapon = new Array ("Dragon Wand#k - Lv. 108 Wand#b","Dragon Staff#k - Lv. 110 Staff#b");
			for (var i = 0; i < weapon.length; i++){
			selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 4){ //thief weapon
			var selStr = "Very well, then which Thief weapon shall recieve a dragon's power?#b";
			var weapon = new Array ("Dragon Kanzir#k - Lv. 110 STR Dagger#b","Dragon Kreda#k - Lv. 110 LUK Dagger#b","Dragon Green Sleve#k - Lv. 110 Claw#b");
			for (var i = 0; i < weapon.length; i++){
			selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 5){ //pirate weapon
			var selStr = "Very well, then which Pirate weapon shall recieve a dragon's power?#b";
			var weapon = new Array ("Dragon Slash Claw#k - Lv. 110 Knuckle#b","Dragonfire Revolver#k - Lv. 110 Gun#b");
			for (var i = 0; i < weapon.length; i++){
			selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
			}
			}
	if (status == 2){
		selectedItem = selection;
		if (selectedType == 1){ //warrior weapon
			var itemSet = new Array(1302059,1312031,1322052,1402036,1412026,1422028,1432038,1442045);
			var matSet = new Array(new Array(1302056,4000244,4000245,4005000),new Array(1312030,4000244,4000245,4005000),new Array(1322045,4000244,4000245,4005000),new Array(1402035,4000244,4000245,4005000),
			new Array(1412021,4000244,4000245,4005000),new Array(1422027,4000244,4000245,4005000),new Array(1432030,4000244,4000245,4005000),new Array(1442044,4000244,4000245,4005000));
			var matQtySet = new Array(new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8));
			var costSet = new Array(120000,120000,120000,120000,120000,120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //bowman weapon
			var itemSet = new Array(1452044,1462039);
			var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
			var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //magician weapon
			var itemSet = new Array(1372032,1382036);
			var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
			var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 4){ //thief weapon
			var itemSet = new Array(1332049,1332050,1472051);
			var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
			var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
			var costSet = new Array(120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 5){ //pirate weapon
			var itemSet = new Array(1482013,1492013);
			var matSet = new Array(new Array(1482012,4000244,4000245,4005000,4005002),new Array(1492012,4000244,4000245,4005000,4005002));
			var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			var prompt = "You want me to make a #t" + item + "#? In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";

		if (stimulator){
			stimID = getStimID(item);
			prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";
			}

			if (mats instanceof Array){
				for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
				}
			} else {
				prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
				}

			if (cost > 0)
				prompt += "\r\n#i4031138# " + cost + " meso";

				cm.sendYesNo(prompt);
				}	if (status == 3 && mode == 1) {
		var complete = false;

		if (cm.getMeso() < cost) {
			cm.sendOk("I'm afraid you cannot afford my services.")
			cm.dispose();
			return;
		} else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++) {
			complete = cm.haveItem(mats[i], matQty[i]);
			if (!complete) {
			break;
			}
			}
		} else {
			complete = cm.haveItem(mats, matQty);
			}
			}

		if (stimulator){ //check for stimulator
			if (!cm.haveItem(stimID)) {
			complete = false;
			}
			}

		if (!complete)
			cm.sendOk("I'm afraid that without the correct items, the dragon's essence would... not make for a very reliable weapon. Please bring the correct items next time.");
		else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i]);
			}
		} else
			cm.gainItem(mats, -matQty);

			cm.gainMeso(-cost);
		if (stimulator){ //check for stimulator
			cm.gainItem(stimID, -1);
			var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0){
			cm.gainItem(item, 1, true)
			cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
		} else {
			cm.sendOk("Unfortunately, the dragon's essence has... conflicted with your weapon. My apologies for your loss.");
			}
		} else { //just give basic item
			cm.gainItem(item, 1);
			cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
			}
			}
			cm.dispose();
			}
	if (status == 100) {
		cm.sendRepairWindow();
		cm.dispose();
		}
		}

		function getStimID(equipID){
		var cat = Math.floor(equipID / 10000);
		var stimBase = 4130002; //stim for 1h sword

		switch (cat){
		case 130: //1h sword, do nothing
			break;
		case 131: //1h axe
			stimBase++;
			break;
		case 132: //1h bw
			stimBase += 2;
			break;
		case 140: //2h sword
			stimBase += 3;
			break;
		case 141: //2h axe
			stimBase += 4;
			break;
		case 142: //2h bw
			stimBase += 5;
			break;
		case 143: //spear
			stimBase += 6;
			break;
		case 144: //polearm
			stimBase += 7;
			break;
		case 137: //wand
			stimBase += 8;
			break;
		case 138: //staff
			stimBase += 9;
			break;
		case 145: //bow
			stimBase += 10;
			break;
		case 146: //xbow
			stimBase += 11;
			break;
		case 133: //dagger
			stimBase += 12;
			break;
		case 147: //claw
			stimBase += 13;
			break;
		case 148: //knuckle
			stimBase += 14;
			break;
		case 149: //gun
			stimBase += 15;
			break;
			}
		return stimBase;
}