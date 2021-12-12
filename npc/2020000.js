/*
	名字:	伯坚
	地圖:	雪域市集
	描述:	211000100

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
	if (mode == 1)
	status++;
	else
	cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "嗯？ 你可能是誰？ 哦，你聽說過我的鍛造科技嗎？ 那樣的話，我很樂意處理你們的一些礦石。。。要收費的哦。#b"
		var options = new Array("做一些礦石", "提煉一些寶石礦", "提煉一些高級寶石礦", "提煉一些高級水晶", "做一些物料", "做一些弓箭");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
		cm.sendSimple(selStr);
		}
	if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "你想提煉什麼樣的礦石呢？#b";
			var minerals = new Array ("Bronze","Steel","Mithril","Adamantium","Silver","Orihalcon","Gold");
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
			cm.sendSimple(selStr);
			}
		if (selectedType == 3){ //crystal refine
			var selStr = "水晶礦石？ 在這附近很難找到那些。。。#b";
			var crystals = new Array ("Power Crystal","Wisdom Crystal","DEX Crystal","LUK Crystal","Dark Crystal");
			for (var i = 0; i < crystals.length; i++){
			selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
			}
		if (selectedType == 4){ //material refine
			var selStr = "資料？ 我知道一些我可以為你做的資料。。。#b";
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
	if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(300,300,300,500,500,500,800);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //rock refine
			var itemSet = new Array(4011007,4021009);
			var matSet = new Array(new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006), new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008));
			var matQtySet = new Array(new Array(1,1,1,1,1,1,1),new Array(1,1,1,1,1,1,1,1,1));
			var costSet = new Array(10000,15000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //crystal refine
			var itemSet = new Array (4005000,4005001,4005002,4005003,4005004);
			var matSet = new Array(4004000,4004001,4004002,4004003,4004004);
			var matQtySet = new Array (10,10,10,10,10);
			var costSet = new Array (5000,5000,5000,5000,1000000);
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

			var prompt = "你想要做一些 #t" + item + "#? 在這種情況下, 我為了要做出最棒的品質，我建議你確保裝備欄空間足夠。";

			cm.sendGetNumber(prompt,1,1,100)
			}
	if (status == 3 && mode == 1) {
		if (equip)
			{
			selectedItem = selection;
			qty = 1;
			}
			else
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
		
			var prompt = "你想要我做 ";
			if (qty == 1)
			prompt += "#t" + item + "#?";
		else
			prompt += qty + " #t" + item + "#?";
			
			prompt += " In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";

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
			var complete = false;
		
		if (cm.getMeso() < cost * qty) {
			cm.sendOk("糟糕...你的錢好像不夠哦...")
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
		if (!complete) {
			cm.sendOk("如果沒有齊全的物品，我無法為你製作任何東西。");
		} else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -(matQty[i] * qty));
			}
		} else
			cm.gainItem(mats, -matQty * qty);

		if (cost > 0)
			cm.gainMeso(-(cost * qty));

		if (item >= 2060000 && item <= 2060002) //bow arrows
			cm.gainItem(item, 1000 - (item - 2060000) * 100);
		else if (item >= 2061000 && item <= 2061002) //xbow arrows
			cm.gainItem(item, 1000 - (item - 2061000) * 100);
		else if (item == 4003000)//screws
			cm.gainItem(4003000, 15 * qty);
		else
			cm.gainItem(item, qty);
			cm.sendOk("都做完了。 如果你還需要什麼，儘管問。");
			}
		cm.dispose();
}
}