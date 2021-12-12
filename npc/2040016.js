/*
	名字:	派
	地圖:	玩具城村落
	描述:	220000300
*/

var status = -1;

var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	cm.dispose();
	return;
	}
	if (status == 0) {
		var selStr = "嗯？ 你聽說過我的鍛造科技嗎？ 那樣的話，我很樂意處理你們的一些礦石。。。 不是免費的哦！#b"
		var options = new Array("提煉礦石","提煉寶石礦石","提煉稀有寶石","提煉水晶礦","做一些物料","做一些弓箭");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
		cm.sendSimple(selStr);
		}
	if (status == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "你想提煉什麼樣的礦石呢？#b";
			var minerals = new Array ("青銅","鋼鐵","鋰礦石","朱礦石","銀","紫礦石","黃金");
			for (var i = 0; i < minerals.length; i++){
			selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 1){ //jewel refine
			var selStr = "你想提煉哪種寶石礦石呢？#b";
			var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","Black Crystal");
			for (var i = 0; i < jewels.length; i++){
			selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 2){ //rock refine
			var selStr = "稀有的珠寶？ 你在想哪一個？#b";
			var items = new Array ("Moon Rock","Star Rock");
			for (var i = 0; i < items.length; i++){
			selStr += "\r\n#L" + i + "# " + items[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 3){ //crystal refine
			var selStr = "水晶礦石？ 我喜歡精煉這些！#b";
			var crystals = new Array ("Power Crystal","Wisdom Crystal","DEX Crystal","LUK Crystal");
			for (var i = 0; i < crystals.length; i++){
			selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 4){ //material refine
			var selStr = "物料？ 我知道一些我可以為你做的物料。。。#b";
			var materials = new Array ("Make Processed Wood with Tree Branch","Make Processed Wood with Firewood","Make Screws (packs of 15)");
			for (var i = 0; i < materials.length; i++){
			selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 5){ //arrow refine
			var selStr = "箭？ 沒問題。#b";
			var arrows = new Array ("Arrow for Bow","Arrow for Crossbow","Bronze Arrow for Bow","Bronze Arrow for Crossbow","Steel Arrow for Bow","Steel Arrow for Crossbow");
			for (var i = 0; i < arrows.length; i++){
			selStr += "\r\n#L" + i + "# " + arrows[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
			}
			if (equip)
			status++;
			}
	if (status == 2) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(270,270,270,450,450,450,720);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (450,450,450,450,450,450,450,900,2700);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //rock refine
			var itemSet = new Array(4011007,4021009);
			var matSet = new Array(new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006), new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008));
			var matQtySet = new Array(new Array(1,1,1,1,1,1,1),new Array(1,1,1,1,1,1,1,1,1));
			var costSet = new Array(9000,13500);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //crystal refine
			var itemSet = new Array (4005000,4005001,4005002,4005003);
			var matSet = new Array(4004000,4004001,4004002,4004003);
			var matQtySet = new Array (10,10,10,10);
			var costSet = new Array (4500,4500,4500,4500);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 4){ //material refine
			var itemSet = new Array (4003001,4003001,4003000);
			var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
			var matQtySet = new Array (10,5,new Array (1,1));
			var costSet = new Array (0,0,0);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			var prompt = "你想讓我做一些 #t" + item + "#? 那樣的話，你要我做多少?";

			cm.sendGetNumber(prompt,1,1,100)
			}
	if (status == 3) {
		if (equip) {
			selectedItem = selection;
			qty = 1;
		} else
			qty = selection;

		if (selectedType == 5){ //arrow refine
			var itemSet = new Array(2060000,2061000,2060001,2061001,2060002,2061002);
			var matSet = new Array(new Array (4003001,4003004),new Array (4003001,4003004),new Array (4011000,4003001,4003004),new Array (4011000,4003001,4003004),
			new Array (4011001,4003001,4003005),new Array (4011001,4003001,4003005));
			var matQtySet = new Array (new Array (1,1),new Array (1,1),new Array (1,3,10),new Array (1,3,10),new Array (1,5,15),new Array (1,5,15));
			var costSet = new Array (0,0,0,0,0,0);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			var prompt = "You want me to make ";
		if (qty == 1) {
			prompt += "a #t" + item + "#?";
		} else {
			prompt += qty + " #t" + item + "#?";
			}
			prompt += " 請你準備好足够的資料，並且預留背包空間好收納物品!#b";

		if (mats instanceof Array){
			for (var i = 0; i < mats.length; i++) {
			prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		} else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
			}
		if (cost > 0) {
			prompt += "\r\n#i4031138# " + cost * qty + " meso";
			}
			cm.sendYesNo(prompt);
			}
	if (status == 4) {
		var complete = false;

		if (cm.getMeso() < cost * qty) {
			cm.sendOk("I'm afraid you cannot afford my services.")
			cm.dispose();
			return;
		} else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++) {
			complete = cm.haveItem(mats[i], matQty[i] * qty);
			if (!complete) {
			break;
			}
			}
		} else {
			complete = cm.haveItem(mats, matQty * qty);
			}
			}

		if (!complete)
			cm.sendOk("你所帶來的資料不能够製作所要的物品，請再去準備齊全！");
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
				
		if (item >= 2060000 && item <= 2060002) //bow arrows
			cm.gainItem(item, 1000 - (item - 2060000) * 100);
		else if (item >= 2061000 && item <= 2061002) //xbow arrows
			cm.gainItem(item, 1000 - (item - 2061000) * 100);
		else if (item == 4003000)//screws
			cm.gainItem(4003000, 15 * qty);
		else
			cm.gainItem(item, qty);
			cm.sendOk("All done. If you need anything else, you know where to find me.");
			}
		cm.safeDispose();
}
}