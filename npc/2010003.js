/*
	����:	�ΰ�
	�؈D:	���֮�ǹ�԰
	����:	200000200
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
		var selStr = "��á� ���ǊW��˹���^̖�����u���̡� Ҫ�ҽo�����cʲ�N�᣿#b"
		var options = new Array("��һ�p/������ʿ����", "��һ�p/��������������", "��һ�p/������������", "��һ�p/�����I�\����");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
		}
	if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //warrior glove
			var selStr = "��ʿ���ף� �ðɣ�������һ����#b";
			var gloves = new Array ("Bronze Husk#k - Warrior Lv. 70#b","Mithril Husk#k - Warrior Lv. 70#b","Dark Husk#k - Warrior Lv. 70#b",
			"Sapphire Emperor#k - Warrior Lv. 80#b","Emerald Emperor#k - Warrior Lv. 80#b","Blood Emperor#k - Warrior Lv. 80#b","Dark Emperor#k - Warrior Lv. 80#b");
			for (var i = 0; i < gloves.length; i++){
			selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 1){ //bowman glove
			var selStr = "���������ף� �ðɣ�������һ����#b";
			var gloves = new Array ("Blue Eyes#k - Bowman Lv. 70#b","Gold Eyes#k - Bowman Lv. 70#b","Dark Eyes#k - Bowman Lv. 70#b",
			"Red Cordon#k - Bowman Lv. 80#b","Blue Cordon#k - Bowman Lv. 80#b","Green Cordon#k - Bowman Lv. 80#b","Dark Cordon#k - Bowman Lv. 80#b");
			for (var i = 0; i < gloves.length; i++){
			selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 2){ //mage glove
			var selStr = "ħ�g�����ף� �ðɣ�������һ����#b";
			var gloves = new Array ("Brown Lorin#k - Magician Lv. 70#b","Blue Lorin#k - Magician Lv. 70#b","Dark Lorin#k - Magician Lv. 70#b",
			"Green Clarity#k - Magician Lv. 80#b","Blue Clarity#k - Magician Lv. 80#b","Dark Clarity#k - Magician Lv. 80#b");
			for (var i = 0; i < gloves.length; i++){
			selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		if (selectedType == 3){ //thief glove
			var selStr = "С͵���ף� �ðɣ�������һ����#b";
			var gloves = new Array ("Bronze Rover#k - Thief Lv. 70#b","Silver Rover#k - Thief Lv. 70#b","Gold Rover#k - Thief Lv. 70#b",
			"Green Larceny#k - Thief Lv. 80#b","Purple Larceny#k - Thief Lv. 80#b","Dark Larceny#k - Thief Lv. 80#b");
			for (var i = 0; i < gloves.length; i++){
			selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
			}
	if (status == 2 && mode == 1) {
		selectedItem = selection;

		if (selectedType == 0){ //warrior glove
			var itemSet = new Array(1082103,1082104,1082105,1082114,1082115,1082116,1082117,1082118);
			var matSet = new Array(new Array(4005000,4011000,4011006,4000030,4003000),new Array(1082103,4011002,4021006),new Array(1082103,4021006,4021008),new Array(4005000,4005002,4021005,4000030,4003000),new Array(1082114,4005000,4005002,4021003),new Array(1082114,4005002,4021000),new Array(1082114,4005000,4005002,4021008));
			var matQtySet = new Array(new Array(2,8,3,70,55),new Array(1,6,4),new Array(1,8,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,3,8),new Array(1,2,1,4));
			var costSet = new Array(90000,90000,100000,100000,110000,110000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 1){ //bowman glove
			var itemSet = new Array(1082106,1082107,1082108,1082109,1082110,1082111,1082112);
			var matSet = new Array(new Array(4005002,4021005,4011004,4000030,4003000),new Array(1082106,4021006,4011006),new Array(1082106,4021007,4021008),new Array(4005002,4005000,4021000,4000030,4003000),new Array(1082109,4005002,4005000,4021005),new Array(1082109,4005002,4005000,4021003),new Array(1082109,4005002,4005000,4021008));
			var matQtySet = new Array(new Array(2,8,3,70,55),new Array(1,5,3),new Array(1,2,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,1,1,7),new Array(1,2,1,4));
			var costSet = new Array(90000,90000,100000,100000,110000,110000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 2){ //mage glove
			var itemSet = new Array(1082098,1082099,1082100,1082121,1082122,1082123);
			var matSet = new Array(new Array(4005001,4011000,4011004,4000030,4003000),new Array(1082098,4021002,4021007),new Array(1082098,4021008,4011006),new Array(4005001,4005003,4021003,4000030,4003000),new Array(1082121,4005001,4005003,4021005),new Array(1082121,4005001,4005003,4021008));
			var matQtySet = new Array(new Array(2,6,6,70,55),new Array(1,6,2),new Array(1,3,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,2,1,4));
			var costSet = new Array(90000,90000,100000,100000,110000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}
		if (selectedType == 3){ //thief glove
			var itemSet = new Array (1082095,1082096,1082097,1082118,1082119,1082120);
			var matSet = new Array(new Array(4005003,4011000,4011003,4000030,4003000),new Array(1082095,4011004,4021007),new Array(1082095,4021007,4011006),new Array(4005003,4005002,4011002,4000030,4003000),new Array(1082118,4005003,4005002,4021001),new Array(1082118,4005003,4005002,4021000));
			var matQtySet = new Array(new Array(2,6,6,70,55),new Array(1,6,2),new Array(1,3,3),new Array(2,1,8,90,60),new Array(1,1,1,7),new Array(1,2,1,8));
			var costSet = new Array(90000,90000,100000,100000,110000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}

			var prompt = "����Ҫ��һ�p #t" + item + "#? ���@�N��r��, �Ҟ���Ҫ���������Ʒ�|���ҽ��h��_���b��ڿ��g���#b";

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
			cm.sendOk("�����㸶�����ҵķ����M��")
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
			cm.sendOk("�������׌����������úõ�Ԓ���ͱ���ṩ�o������Ĳ��ϡ�");
		else {
		if (mats instanceof Array) {
			for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i]);
			}
			}
		else
			cm.gainItem(mats, -matQty);

			cm.gainMeso(-cost);
			cm.gainItem(item, 1);
			cm.sendOk("��ɡ� �����߀��Ҫʲ�N���ن�һ�ξ����ˡ�");
			}
		cm.dispose();
}
}