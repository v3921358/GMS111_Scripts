/*
	����:	���� ����
	�؈D:	ħ������
	����:	101000000
*/

var status = -1

var item;
var selected;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (cm.getPlayerStat("LVL") >= 10) {
		cm.sendSimple("���� �����������еğ����g���ҡ��҂��������Թ��ԁ�ͱ���ֹ������|�����������@�N���ѵ��˛]�P�S�� ��o���Y�ϣ��Ҏ������؄e�Ė|����#b\r\n#L0##v4011007:#��ʯ#l\r\n#L1##v4021009:#��ʯ#l\r\n#L2##v4031042:#����ë#l");
	} else {
		cm.sendOk("��Ǹ�� �ҵ�ϡ����Ʒ���ܽo�Ҳ��J�R���ˡ�");
		cm.dispose();
		}
		}
	if (status == 1) {
		selected = selection;
	if (selection == 0) {
	item = "��ʯ";
		cm.sendYesNo("��������ʯ�� ���ǂ��|������Ҫ�Ο���#b���~#k��#b��F#k��#b䇵Vʯ#k��#b��Vʯ#k��#b�y#k��#b�ϵVʯ#k��#b�S��#k��һ���� ߀��Ҫ10000���š�");
		}
	if (selection == 1) {
	item = "��ʯ";
		cm.sendYesNo("��������ʯ�� ���ǂ��|������Ҫ��һ��#bʯ��ʯ#k��#b��ˮ��#k��#b���{��ʯ#k��#b��ĸ��#k��#b����ʯ#k��#b�S��#k��#b�ʯ#k��#b��ˮ��#k��߀��Ҫ15000���š�");
		}
	if (selection == 2) {
	item = "����ë";
		cm.sendYesNo("����������ë�� ���ǂ��|������Ҫ1��#b������ë��һ����ʯ��һ����ˮ��#k��߀��Ҫ30000���š� ���� �@����ë�Ƿǳ��؄e�ģ���������ڵ��ϣ����͕���ʧ���Ͳ��ܽo�e�ˡ�");
		}
		}
	if (status == 2) {
	if (selected == 0) {
	if (cm.haveItem(4011000) && cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4011003) && cm.haveItem(4011004) && cm.haveItem(4011005) && cm.haveItem(4011006) && cm.getMeso() > 10000) {
		cm.gainMeso(-10000);
		cm.gainItem(4011000, -1);
		cm.gainItem(4011001, -1);
		cm.gainItem(4011002, -1);
		cm.gainItem(4011003, -1);
		cm.gainItem(4011004, -1);
		cm.gainItem(4011005, -1);
		cm.gainItem(4011006, -1);
		cm.gainItem(4011007, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bBronze Plate#k, #bSteel Plate#k,\r\n#bMithril Plate#k, #bAdamantium Plate#k, #bSilver Plate#k, #bOrihalcon Plate#k and #bGold Plate#k, one of each.");
		}
		}
	if (selected == 1) {
	if (cm.haveItem(4021000) && cm.haveItem(4021001) && cm.haveItem(4021002) && cm.haveItem(4021003) && cm.haveItem(4021004) && cm.haveItem(4021005) && cm.haveItem(4021006) && cm.haveItem(4021007) && cm.haveItem(4021008) && cm.getMeso() > 15000) {
		cm.gainMeso(-15000);
		cm.gainItem(4021000, -1);
		cm.gainItem(4021001, -1);
		cm.gainItem(4021002, -1);
		cm.gainItem(4021003, -1);
		cm.gainItem(4021004, -1);
		cm.gainItem(4021005, -1);
		cm.gainItem(4021006, -1);
		cm.gainItem(4021007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4021009, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bGarnet#k, #bAmethyst#k, #bAquaMarine#k, #bEmerald#k, #bOpal#k, #bSapphire#k, #bTopaz#k, #bDiamond#k and #bBlack Crystal#k, one of each.");
		}
		}
	if (selected == 2) {
	if (cm.haveItem(4001006) && cm.haveItem(4011007) && cm.haveItem(4021008) && cm.getMeso() > 30000) {
		cm.gainMeso(-30000);
		cm.gainItem(4001006, -1);
		cm.gainItem(4011007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4031042, 1);
		cm.sendOk("Ok here, take " + item + ". It's well-made, probably because I'm using good materials. If you need my help down the road, feel free to come back.");
	} else {
		cm.sendOk("Are you sure you have enough mesos? Please check and see if you have the refined #bGarnet#k, #bAmethyst#k, #bAquaMarine#k, #bEmerald#k, #bOpal#k, #bSapphire#k, #bTopaz#k, #bDiamond#k and #bBlack Crystal#k, one of each.");
		}
		}
	cm.dispose();
}
}