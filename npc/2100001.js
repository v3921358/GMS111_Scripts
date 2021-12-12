/*
	����:	Ī��Ī��
	�؈D:	���ﰲ����լ
	����:	260000200
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
	if (mode == -1) {
	cm.dispose();
	} else {
	if (mode == 0 && status == 0) {
		cm.sendOk("����㲻�s�r�g��Ո�����ف� �������������ģ��F���кܶ๤��Ҫ�����Ҳ����ܰ��r���o�㡣");
		cm.dispose();
		return;
		}
	if (mode == 0 && status >= 1){
		cm.dispose();
		return;
		}
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0 && mode == 1) {
		var selStr = "���ǁ��្�Vʯ߀���錚�ģ� �������ж��ٵVʯ�������]�������@�ӵĴ󎟰������្�������N�����Ϳ���������ˡ� �҂��F�ھ́�̎���@���¡� �����្ʲ�N�ӵĵVʯ�� #b";
		var options = new Array("�����Vʯ", "�្��ʯ�Vʯ", "�����Y���Vʯ");
		for (var i = 0; i < options.length; i++){
		selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
		cm.sendSimple(selStr);
		}
	if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "�����្�ķN�V�#b";
			var minerals = new Array ("���~", "��F", "䇵Vʯ", "��Vʯ", "�y", "�ϵVʯ", "�S��", "�");
			for (var i = 0; i < minerals.length; i++){
			selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
			}
		if (selectedType == 1){ //jewel refine
			var selStr = "�����្���w��ʯ��#b";
			var jewels = new Array ("ʯ��ʯ", "��ˮ��", "���{��ʯ", "��ĸ�G", "����ʯ", "�{��ʯ", "�S��", "�ʯ", "��ˮ��");
			for (var i = 0; i < jewels.length; i++){
			selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
			}
		if (selectedType == 2){ //Crystal refine
			var selStr = "ˮ���� �ǵĴ_�Ǽ�ϡ���Ė|���� �e���ģ��ҿ��Ժ�������һ���������� �����្�ķN���w�� #b";
			var crystals = new Array("����ˮ��", "�ǻ�ˮ��", "����ˮ��", "���\ˮ��");
			for (var i = 0; i < crystals.length; i++){
			selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
			}
			}
	if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (equip)
			{
			selectedItem = selection;
			qty = 1;
			}
		else
			qty = selection;

		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006,4011008);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006,4010007);
			var matQtySet = new Array(10,10,10,10,10,10,10,10);
			var costSet = new Array(270,270,270,450,450,450,720,270);
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
		if (selectedType == 2){ //Crystal refine
			var itemSet = new Array(4005000,4005001,4005002,4005003);
			var matSet = new Array(4004000,4004001,4004002,4004003);
			var matQtySet = new Array(10,10,10,10);
			var costSet = new Array (4500,4500,4500,4500);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
			}			
			var prompt = "To make #t" + item + "#s, I'll need the following materials. How many do you want to make?";

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

				cm.sendGetNumber(prompt,1,1,100)
				}
	if (status == 3 && mode == 1) {
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
				cm.sendOk("Please check and see if you have all the necessary items with you. If so, then please check your etc. inventory and see if.");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
					cm.gainItem(mats[i], -matQty[i] * qty);
					}
					}
				else
					cm.gainItem(mats, -matQty * qty);

					cm.gainMeso(-cost * qty);
					cm.gainItem(item,qty);
					cm.sendOk("���ˣ��Y���ˡ� ���J���@��һ��ˇ�gƷ���ǆ᣿ �ðɣ������߀��Ҫʲ�N��Ոӛס�������@�e��");
					}
				cm.dispose();
}
}
}