/*
	����:	���ݷ���Ա
	�؈D:	����֮���ùݴ���
	����:	105000010
*/

var status = -1;

var regcost = 499;
var vipcost = 999;
var tempvar;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	}
	if (mode == 0 && status == 1) {
	cm.sendOk("�҂�Ҳ�ṩ�������գ��Q����֮ǰՈ�м����롣");
	cm.dispose();
	return;
	}
	if (status == 0) {
		cm.sendSimple("�gӭ����ô����^���҂����������ṩ��õķ��ա���������ˣ����@�e��Ϣһ����Σ��҂��ṩ�ɷN���g��Ո�x������Ҫ�ġ�\r\n#b#L0#һ��ɣ���� (ÿ�� " + regcost + " ����)#l\r\n#L1#�߼�ɣ���� (ÿ��" + vipcost + " ����)#l");
		}
	if (status == 1) {
		tempvar = selection;
		if (tempvar == 0) {
		cm.sendYesNo("���x����һ��ɣ���ң����HP��MP���؏͵úܿ죬��Ҳ�������e��ُ�I��Ʒ����_��Ҫ�M��᣿");
		}
		if (tempvar == 1) {
		cm.sendYesNo("���x���˸߼�ɣ���ң����HP��MP����һ��ɣ���һ؏͵ø��죬Ҳ�������e���ҵ��������Ʒ����_��Ҫ�M��᣿");
		}
		}
	if (status == 2) {
		if (tempvar == 0) {
		if (cm.getMeso() >= regcost) {
			cm.warp(105000011);
			cm.gainMeso(-regcost);
		} else {
			cm.sendOk("�ܱ�Ǹ�����������ƺ��]�����ė��š�������Ҫ�� " + regcost + " ���Ų��ܴ����҂���һ��ɣ���ҡ�");
			}
			}
		if (tempvar == 1) {
		if (cm.getMeso() >= vipcost) {
			cm.warp(105000012);
			cm.gainMeso(-vipcost);
		} else {
			cm.sendOk("�ܱ�Ǹ�����������ƺ��]�����ė��š�������Ҫ�� " + vipcost + " ���Ų��ܴ����҂��ĸ߼�ɣ���ҡ�");
			}
			}
		cm.dispose();
}
}