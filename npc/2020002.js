/*
	名字:	高登
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

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "你好。 厄爾納特的冬天异常寒冷，你需要一雙溫暖的鞋子才能生存。#b"
		var options = new Array("做一雙劍士鞋子", "做一雙弓箭手鞋子", "做一雙法師鞋子", "做一雙盜賊鞋子");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}

		cm.sendSimple(selStr);
		}
	if (status == 1 && mode == 1) {
		selectedType = selection;
		var selStr;
		var shoes;
		if (selectedType == 0){ //warrior shoes
			selStr = "戰士鞋？ 好的，那是哪一種？#b";
			var shoes = new Array ("Sapphire Camel Boots#k - Warrior Lv. 60#b","Orihalcon Camel Boots#k - Warrior Lv. 60#b","Blood Camel Boots#k - Warrior Lv. 60#b",
			"Blue Carzen Boots#k - Warrior Lv. 70#b","Purple Carzen Boots#k - Warrior Lv. 70#b","Dark Carzen Boots#k - Warrior Lv. 70#b",
			"Red Rivers Boots#k - Warrior Lv. 80#b","Blue Rivers Boots#k - Warrior Lv. 80#b","Dark Rivers Boots#k - Warrior Lv. 80#b");
			}
		if (selectedType == 1){ //bowman shoes
			selStr = "鮑曼鞋？ 好的，那是哪一種？#b";
			var shoes = new Array ("Red Gore Boots#k - Bowman Lv. 60#b","Blue Gore Boots#k - Bowman Lv. 60#b","Green Gore Boots#k - Bowman Lv. 60#b",
			"Blue Elf Boots#k - Bowman Lv. 70#b","Beige Elf Boots#k - Bowman Lv. 70#b","Green Elf Boots#k - Bowman Lv. 70#b","Dark Elf Boots#k - Bowman Lv. 70#b",
			"Blue Wing Boots#k - Bowman Lv. 80#b","Red Wing Boots#k - Bowman Lv. 80#b","Green Wing Boots#k - Bowman Lv. 80#b","Dark Wing Boots#k - Bowman Lv. 80#b");
			}
		if (selectedType == 2){ //mage shoes
			selStr = "魔術師鞋？ 好的，那是哪一種？#b";
			var shoes = new Array ("Pink Goldrunners#k - Magician Lv. 60#b","Green Goldrunners#k - Magician Lv. 60#b","Orange Goldrunners#k - Magician Lv. 60#b","Blue Goldrunners#k - Magician Lv. 60#b",
			"Blue Lapiz Sandals#k - Magician Lv. 70#b","Red Lapiz Sandals#k - Magician Lv. 70#b","Brown Lapiz Sandals#k - Magician Lv. 70#b","Gold Lapiz Sandals#k - Magician Lv. 70#b",
			"Green Enigma Shoes#k - Magician Lv. 80#b","Purple Enigma Shoes#k - Magician Lv. 80#b","Dark Enigma Shoes#k - Magician Lv. 80#b");
			}
		if (selectedType == 3){ //thief shoes
			selStr = "盜賊鞋？ 好的，那是哪一種？#b";
			var shoes = new Array ("Blood Moss Boots#k - Thief Lv. 60#b","Gold Moss Boots#k - Thief Lv. 60#b","Dark Moss Boots#k - Thief Lv. 60#b",
			"Purple Mystique Shoes#k - Thief Lv. 70#b","Blue Mystique Shoes#k - Thief Lv. 70#b","Red Mystique Shoes#k - Thief Lv. 70#b",
			"Green Pirate Boots#k - Thief Lv. 80#b","Red Pirate Boots#k - Thief Lv. 80#b","Dark Pirate Boots#k - Thief Lv. 80#b");
			}
			for (var i = 0; i < shoes.length; i++){
			selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
	if (status == 2 && mode == 1) {
		selectedItem = selection;

		if (selectedType == 0){ //warrior shoes
			var itemSet = new Array(1072147,1072148,1072149,1072154,1072155,1072156,1072210,1072211,1072212);
			var matSet = new Array(new Array(4021008,4011007,4021005,4000030,4003000),new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000),
			new Array(4005000,4005002,4011002,4000048,4003000),new Array(4005000,4005002,4011005,4000048,4003000),new Array(4005000,4005002,4021008,4000048,4003000),
			new Array(4005000,4005002,4021000,4000030,4003000),new Array(4005000,4005002,4021002,4000030,4003000),new Array(4005000,4005002,4021008,4000030,4003000));
			var matQtySet = new Array(new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
			new Array(2,3,7,90,65),new Array(3,2,7,90,65),new Array(4,1,2,90,65));
			var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 1){ //bowman shoes
			var itemSet = new Array(1072144,1072145,1072146,1072164,1072165,1072166,1072167,1072182,1072183,1072184,1072185);
			var matSet = new Array(new Array(4011006,4021000,4021007,4000030,4003000),new Array(4011006,4021005,4021007,4000030,4003000),new Array(4011006,4021003,4021007,4000030,4003000),
			new Array(4005002,4005000,4021005,4000055,4003000),new Array(4005002,4005000,4021004,4000055,4003000),new Array(4005002,4005000,4021003,4000055,4003000),new Array(4005002,4005000,4021008,4000055,4003000),
			new Array(4005002,4005000,4021002,4000030,4003000),new Array(4005002,4005000,4021000,4000030,4003000),new Array(4005002,4005000,4021003,4000030,4003000),new Array(4005002,4021008,4000030,4003000));
			var matQtySet = new Array(new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,1,100,55),
			new Array(2,3,7,90,60),new Array(3,2,7,90,60),new Array(4,1,7,90,60),new Array(5,2,90,60));
			var costSet = new Array(60000,60000,60000,70000,70000,70000,70000,80000,80000,80000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //mage shoes
			var itemSet = new Array(1072136,1072137,1072138,1072139,1072157,1072158,1072159,1072160,1072177,1072178,1072179);
			var matSet = new Array(new Array(4021009,4011006,4011005,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),new Array(4021009,4011006,4011003,4000030,4003000),new Array(4021009,4011006,4021002,4000030,4003000),
			new Array(4005001,4005003,4021002,4000051,4003000),new Array(4005001,4005003,4021000,4000051,4003000),new Array(4005001,4005003,4011003,4000051,4003000),new Array(4005001,4005003,4011006,4000051,4003000),
			new Array(4005001,4005003,4021003,4000030,4003000),new Array(4005001,4005003,4021001,4000030,4003000),new Array(4005001,4005003,4021008,4000030,4003000));
			var matQtySet = new Array(new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),
			new Array(1,3,5,100,55),new Array(2,2,5,100,55),new Array(2,2,5,100,55),new Array(3,1,3,100,55),
			new Array(2,3,7,85,60),new Array(3,2,7,85,60),new Array(4,1,2,85,60));
			var costSet = new Array(60000,60000,60000,60000,70000,70000,70000,70000,80000,80000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //thief shoes
			var itemSet = new Array (1072150,1072151,1072152,1072161,1072162,1072163,1072172,1072173,1072174);
			var matSet = new Array(new Array(4021007,4011007,4021000,4000030,4003000),new Array(4021007,4011007,4011006,4000030,4003000),new Array(4021007,4011007,4021008,4000030,4003000),
			new Array(4005003,4005000,4021001,4000051,4003000),new Array(4005003,4005002,4021005,4000051,4003000),new Array(4005002,4005003,4021000,4000051,4003000),
			new Array(4005000,4005003,4021003,4000030,4003000),new Array(4005002,4005003,4021000,4000030,4003000),new Array(4005003,4005002,4021008,4000030,4003000));
			var matQtySet = new Array(new Array(1,1,8,75,50),new Array(1,1,5,75,50),new Array(1,1,1,75,50),
			new Array(1,3,5,100,55),new Array(1,3,5,100,55),new Array(1,3,5,100,55),
			new Array(3,2,7,90,60),new Array(3,2,7,90,60),new Array(3,2,7,90,60));
			var costSet = new Array(60000,60000,60000,70000,70000,70000,80000,80000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			var prompt = "你想要做一雙 #t" + item + "#? 請你準備好製作所需要的各種資料，並預留空間好收納物品！#b";

		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
			prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
			}
			}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
			}

			if (cost > 0)
			prompt += "\r\n#i4031138# " + cost + " meso";
		
			cm.sendYesNo(prompt);
			}
	if (status == 3 && mode == 1) {
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

		if (!complete)
			cm.sendOk("你現在收集到的資料還不够！ 我還不能滿足你的要求。");
		else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty [i]);
			}
			}
		else
			cm.gainItem(mats, -matQty );

			cm.gainMeso(-cost );
				
			cm.gainItem(item, 1);
			cm.sendOk("All done. Stay warm!");
			}
		cm.dispose();
}
}