/*
	����:	��
	�؈D:	���ֿϺͫ��ļ�
	����:	220000303
*/

var status = -1;

var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var stimulator = false;
var stimID = 4130001;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0) {
		var selStr = "���ã��gӭ��LudibriumЬ�ꡣ �ҽ����܎���ʲ�Næ��#b"
		var options = new Array("ʲ�N�Ǵ߻���?", "��һ�p��ʿЬ��", "��һ�p������Ь��", "��һ�p����Ь��", "��һ�p�I�\Ь��",
		"��һ�p��ʿЬ��ʹ�ô߻���", "��һ�p������Ь��ʹ�ô߻���", "��һ�p����Ь��ʹ�ô߻���", "��һ�p�I�\Ь��ʹ�ô߻���");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}

		cm.sendSimple(selStr);
		}
	if (status == 1) {
		selectedType = selection;
			var selStr;
			var shoes = Array();
		if (selectedType > 4)
			{
			stimulator = true;
			selectedType -= 4;
			}
		else
		stimulator = false;
		if (selectedType == 0){ // what is stim
			cm.sendNext("�߻�����һ�N�����ˎ�����ҿ�����ӵ��u��ĳЩ��Ʒ���^���С� ��Ȼ�ܹ���ǿ����Ʒ�����ã����Ǵ߻���Ҳ���Ǿ��з��յģ� ���ܛ]��׃����Ҳ�����Ŀ���ƽ��ˮ�ʡ� ʹ�ô߻����rҲ��10%�Ď��ʵò����κ���Ʒ������Ո���ǵ��x��")
			cm.dispose();
			return;
			}
		if (selectedType == 1){ //warrior shoe
			selStr = "Warrior shoes? Sure thing, which kind?#b";
			shoes = new Array ("Emerald Battle Grieve#k - Warrior Lv. 30#b","Mithril Battle Grieve#k - Warrior Lv. 30#b","Silver Battle Grieve#k - Warrior Lv. 30#b","Blood Battle Grieve#k - Warrior Lv. 30#b",
			"Steel Trigger#k - Warrior Lv. 35#b","Mithril Trigger#k - Warrior Lv. 35#b","Dark Trigger#k - Warrior Lv. 35#b",
			"Brown Jangoon Boots#k - Warrior Lv. 40#b","Maroon Jangoon Boots#k - Warrior Lv. 40#b","Blue Jangoon Boots#k - Warrior Lv. 40#b",
			"Emerald Hildon Boots#k - Warrior Lv. 50#b","Mithril Hildon Boots#k - Warrior Lv. 50#b","Orihalcon Hildon Boots#k - Warrior Lv. 50#b","Gold Hildon Boots#k - Warrior Lv. 50#b");;
			}
		if (selectedType == 2){ //bowman shoe
			selStr = "Bowman shoes? Sure thing, which kind?#b";
			shoes = new Array ("Red Hunter Boots#k - Bowman Lv. 30#b","Blue Hunter Boots#k - Bowman Lv. 30#b","Green Hunter Boots#k - Bowman Lv. 30#b","Black Hunter Boots#k - Bowman Lv. 30#b","Brown Hunter Boots#k - Bowman Lv. 30#b",
			"Blue Silky Boots#k - Bowman Lv. 35#b","Green Silky Boots#k - Bowman Lv. 35#b","Red Silky Boots#k - Bowman Lv. 35#b",
			"Red Pierre Shoes#k - Bowman Lv. 40#b","Yellow Pierre Shoes#k - Bowman Lv. 40#b","Brown Pierre Shoes#k - Bowman Lv. 40#b","Blue Pierre Shoes#k - Bowman Lv. 40#b",
			"Brown Steel-Tipped Boots#k - Bowman Lv. 50#b","Green Steel-Tipped Boots#k - Bowman Lv. 50#b","Blue Steel-Tipped Boots#k - Bowman Lv. 50#b","Purple Steel-Tipped Boots#k - Bowman Lv. 50#b");
			}
		if (selectedType == 3){ //magician shoe
			selStr = "Magician shoes? Sure thing, which kind?#b";
			shoes = new Array ("Red Magicshoes#k - Magician Lv. 30#b","Blue Magicshoes#k - Magician Lv. 30#b","White Magicshoes#k - Magician Lv. 30#b","Black Magicshoes#k - Magician Lv. 30#b",
			"Purple Salt Shoes#k - Magician Lv. 35#b","Red Salt Shoes#k - Magician Lv. 35#b","Black Salt Shoes#k - Magician Lv. 35#b",
			"Red Moon Shoes#k - Magician Lv. 40#b","Blue Moon Shoes#k - Magician Lv. 40#b","Gold Moon Shoes#k - Magician Lv. 40#b","Dark Moon Shoes#k - Magician Lv. 40#b",
			"Pink Goldwind Shoes#k - Magician Lv. 50#b","Blue Goldwind Shoes#k - Magician Lv. 50#b","Purple Goldwind Shoes#k - Magician Lv. 50#b","Green Goldwind Shoes#k - Magician Lv. 50#b");
			}
		if (selectedType == 4){ //thief shoe
			selStr = "Thief shoes? Sure thing, which kind?#b";
			shoes = new Array ("Bronze Chain Boots#k - Thief Lv. 30#b","Iron Chain Boots#k - Thief Lv. 30#b","Silver Chain Boots#k - Thief Lv. 30#b","Gold Chain Boots#k - Thief Lv. 30#b",
			"Red White-Line Boots#k - Thief Lv. 35#b","Green White-Line Boots#k - Thief Lv. 35#b","Blue White-Line Boots#k - Thief Lv. 35#b",
			"Black Red-Lined Shoes#k - Thief Lv. 40#b","Black Green-Lined Shoes#k - Thief Lv. 40#b","Black Yellow-Lined Shoes#k - Thief Lv. 40#b","Black Blue-Lined Shoes#k - Thief Lv. 40#b",
			"Blue Goni Shoes#k - Thief Lv. 50#b","Red Goni Shoes#k - Thief Lv. 50#b","Green Goni Shoes#k - Thief Lv. 50#b","Purple Goni Shoes#k - Thief Lv. 50#b");
			}

			if (selectedType != 0)
			{
			for (var i = 0; i < shoes.length; i++){
			selStr += "\r\n#L" + i + "# " + shoes[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
			}
	if (status == 2) {
		selectedItem = selection;
		if (selectedType == 1){ //warrior shoe
			var itemSet = new Array(1072003,1072039,1072040,1072041,1072002,1072112,1072113,1072000,1072126,1072127,1072132,1072133,1072134,1072135);
			var matSet = new Array(new Array(4021003,4011001,4000021,4003000),new Array(4011002,4011001,4000021,4003000),
			new Array(4011004,4011001,4000021,4003000),new Array(4021000,4011001,4000021,4003000),new Array(4011001,4021004,4000021,4000030,4003000),new Array(4011002,4021004,4000021,4000030,4003000),new Array(4021008,4021004,4000021,4000030,4003000),
			new Array(4011003,4000021,4000030,4003000,4000103),new Array(4011005,4021007,4000030,4003000,4000104),new Array(4011002,4021007,4000030,4003000,4000105),new Array(4021008,4011001,4021003,4000030,4003000),
			new Array(4021008,4011001,4011002,4000030,4003000),new Array(4021008,4011001,4011005,4000030,4003000),new Array(4021008,4011001,4011006,4000030,4003000));
			var matQtySet = new Array(new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(3,1,30,20,25),new Array(3,1,30,20,25),new Array(2,1,30,20,25),
			new Array(4,100,40,30,100),new Array(4,1,40,30,100),new Array(4,1,40,30,100),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45));
			var costSet = new Array(20000,20000,20000,20000,22000,22000,25000,38000,38000,38000,50000,50000,50000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //bowman shoe
			var itemSet = new Array(1072079,1072080,1072081,1072082,1072083,1072101,1072102,1072103,1072118,1072119,1072120,1072121,1072122,1072123,1072124,1072125);
			var matSet = new Array(new Array(4000021,4021000,4003000),new Array(4000021,4021005,4003000),new Array(4000021,4021003,4003000),
			new Array(4000021,4021004,4003000),new Array(4000021,4021006,4003000),new Array(4021002,4021006,4000030,4000021,4003000),new Array(4021003,4021006,4000030,4000021,4003000),new Array(4021000,4021006,4000030,4000021,4003000),
			new Array(4021000,4003000,4000030,4000106),new Array(4021006,4003000,4000030,4000107),new Array(4011003,4003000,4000030,4000108),new Array(4021002,4003000,4000030,4000099),new Array(4011001,4021006,4021008,4000030,4003000,4000033),
			new Array(4011001,4021006,4021008,4000030,4003000,4000032),new Array(4011001,4021006,4021008,4000030,4003000,4000041),new Array(4011001,4021006,4021008,4000030,4003000,4000042));
			var matQtySet = new Array(new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),
			new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(4,30,45,100),new Array(4,30,45,100),new Array(5,30,45,100),new Array(5,30,45,100),
			new Array(3,3,1,60,35,80),new Array(3,3,1,60,35,150),new Array(3,3,1,60,35,100),new Array(3,3,1,60,35,250));
			var costSet = new Array(19000,19000,19000,19000,19000,19000,20000,20000,20000,32000,32000,40000,40000,50000,50000,50000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //magician shoe
			var itemSet = new Array(1072075,1072076,1072077,1072078,1072089,1072090,1072091,1072114,1072115,1072116,1072117,1072140,1072141,1072142,1072143,1072136,1072137,1072138,1072139);
			var matSet = new Array(new Array(4021000,4000021,4003000),new Array(4021002,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021008,4000021,4003000),new Array(4021001,4021006,4000021,4000030,4003000),new Array(4021000,4021006,4000021,4000030,4003000),
			new Array(4021008,4021006,4000021,4000030,4003000),new Array(4021000,4000030,4000110,4003000),new Array(4021005,4000030,4000111,4003000),new Array(4011006,4021007,4000030,4000100,4003000),new Array(4021008,4021007,4000030,4000112,4003000),
			new Array(4021009,4011006,4021000,4000030,4003000),new Array(4021009,4011006,4021005,4000030,4003000),new Array(4021009,4011006,4021001,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000));
			var matQtySet = new Array(new Array(2,50,15),new Array(2,50,15),new Array(2,50,15),new Array(1,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(2,1,40,25,20),new Array(4,40,100,25),new Array(4,40,100,25),new Array(2,1,40,100,25),new Array(2,1,40,100,30),
			new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40));
			var costSet = new Array(18000,18000,18000,18000,20000,20000,22000,30000,30000,35000,40000,50000,50000,50000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 4){ //thief shoe
			var itemSet = new Array(1072032,1072033,1072035,1072036,1072104,1072105,1072106,1072107,1072108,1072109,1072110,1072128,1072130,1072129,1072131);
			var matSet = new Array(new Array(4011000,4000021,4003000),new Array(4011001,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4011006,4000021,4003000),new Array(4021000,4021004,4000021,4000030,4003000),new Array(4021003,4021004,4000021,4000030,4003000),
			new Array(4021002,4021004,4000021,4000030,4003000),new Array(4021000,4000030,4000113,4003000),new Array(4021003,4000030,4000095,4003000),new Array(4021006,4000030,4000096,4003000),new Array(4021005,4000030,4000097,4003000),new Array(4011007,4021005,4000030,4000114,4003000),
			new Array(4011007,4021000,4000030,4000115,4003000),new Array(4011007,4021003,4000030,4000109,4003000),new Array(4011007,4021001,4000030,4000036,4003000));
			var matQtySet = new Array(new Array(3,50,15),new Array(3,50,15),new Array(2,50,15),new Array(2,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(3,1,30,15,20),
			new Array(5,45,100,30),new Array(4,45,100,30),new Array(4,45,100,30),new Array(4,45,100,30),new Array(2,3,50,100,35),new Array(2,3,50,100,35),new Array(2,3,50,100,35),new Array(2,3,50,80,35));
			var costSet = new Array(19000,19000,19000,21000,20000,20000,20000,40000,32000,35000,35000,50000,50000,50000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			//Ludi fee is -10%, array not changed unlike 2040016 and 2040020
			cost = cost * .9;

			var prompt = "You want me to make a #t" + item + "#? In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";

		if(stimulator)
			prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";

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
	if (status == 3) {
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
			cm.sendOk("Sorry, but I have to have those items to get this exactly right. Perhaps next time.");
		else {
			if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i]);
			}
		} else {
			cm.gainItem(mats, -matQty);
			}
			cm.gainMeso(-cost);
		if (stimulator) { //check for stimulator
			cm.gainItem(stimID, -1);
			var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0) {
			cm.gainItem(item, 1, true);
			cm.sendOk("There, the shoes are ready. Be careful, they're still hot.");
		} else {
			cm.sendOk("��ѽ�� �����Ҳ�С�ļ���̫��Ĵ߻����������|���F�ڶ��������ˡ����� �������Ҳ����˿�.");
			}
		} else { //just give basic item
			cm.gainItem(item, 1);
			cm.sendOk("There, the shoes are ready. Be careful, they're still hot.");
			}
			}
		cm.safeDispose();
}
}