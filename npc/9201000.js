/*
	����:	�����׸�
	��ͼ:	�Y��С�
	����:	680000000
*/

var status = -1;

var firstSelection = -1;
var secondSelection = -1;
var ingredients_0 = Array(4011004, 4021007);
var ingredients_1 = Array(4011006, 4021007);
var ingredients_2 = Array(4011007, 4021007);
var ingredients_3 = Array(4021009, 4021007);

var mats = Array();
var mesos = Array(1000000, 2000000, 3000000);

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0 || status == 1 && mode == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (cm.getPlayer().getGender() != 0 && cm.getPlayer().getGender() != 1) {
		cm.sendOk("�ܱ�Ǹ����ֻ�܎���������ָ��");
		cm.dispose();
		}
	if (cm.getPlayer().getLevel() < 40) {
		cm.sendOk("�ܱ�Ǹ���ȼ��]�_��40�Ȳ��ܽY�顣");
		cm.dispose();
		}
        
	if (cm.getPlayer().getMarriageId() > 0) {
		cm.sendNext("��ϲ��Y�飡��");
		cm.dispose();
	} else {
		cm.sendSimple("�ˣ��ҿ��Ԟ�����ʲ�N����\r\n#b#L0#��һ���¹��ָ#l\r\n#L1#��һ���ǹ��ָ#l\r\n#L2#��һ�����Ľ�ָ#l\r\n#L3#��һ���ʯ��ָ#l#k");
		}
		}
	if (status == 1) {
		firstSelection = selection;
		cm.sendSimple("�����ף�����Ҫ�׿�������\r\n#b#L0#1 ����#l\r\n#L1#2 ����#l\r\n#L2#3 ����#l#k");
		}
	if (status == 2) {
		secondSelection = selection;
		var prompt = "���@�N��r�£�����Ҫ������Ʒ�|���b�䡣Ո�_�����п��g�������b��ڣ�#b";
	switch (firstSelection) {
	case 0:
		mats = ingredients_0;
		break;
	case 1:
		mats = ingredients_1;
		break;
	case 2:
		mats = ingredients_2;
		break;
	case 3:
		mats = ingredients_3;
		break;
		default:
		cm.dispose();
		return;
		}
		for (var i = 0; i < mats.length; i++) {
		prompt += "\r\n#i" + mats[i] + "##t" + mats[i] + "# x 1";
		}
		prompt += "\r\n#i4031138# " + mesos[secondSelection];+" ����";
		cm.sendYesNo(prompt);
		}
	if (status == 3) {
		if (cm.getMeso() < mesos[secondSelection]) {
			cm.sendOk("��û���㹻�ķ�ң�ûǮ�Ͳ�Ҫ������");
		} else {
			var complete = true;
			for (var i = 0; i < mats.length; i++) {
			if (!cm.haveItem(mats[i], 1)) {
			complete = false;
			break;
			}
			}
		if (!complete) {
			cm.sendOk("�]�в��ϣ��ҿ��²��ܰ�������Ը����");
		} else {
			if (cm.canHold()) {
			cm.sendOk("�����ˣ��s��ȥ�����Đ۵������ɣ���");
			cm.gainMeso(-mesos[secondSelection]);

			for (var i = 0; i < mats.length; i++) {
			cm.gainItem(mats[i], -1);
			}
			cm.gainItem(2240004 + (firstSelection * 3) + secondSelection, 1);
			cm.gainItem(5251006, 1);
		} else {
			cm.sendOk("��ı����ѝM��");
			cm.dispose();
			return;
			}
			}
			}
		cm.dispose();
}
}