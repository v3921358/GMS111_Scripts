/*
	����:	������˹��
	�؈D:	ѩ����
	����:	211000100
*/

var status = -1;

var selected;
var amount;
var totalcost;
var item = new Array(2050003, 2050004, 4006000, 4006001);
var cost = new Array(300, 400, 5000, 5000);
var msg = new Array("�}ˮ", "�f�ܯ���", "ħ��ʯ", "�ن�ʯ");

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 2) {
		cm.sendOk("����Ҫ��Ԓ�ف����ҡ�");
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
		if (cm.getQuestStatus(3035) == 2) {
		var selStr;
		for (var i = 0; i < item.length; i++) {
		selStr += "\r\n#L" + i + "# #b#t" + item[i] + "# (�r��: " + cost[i] + " ����)#k#l";
		}
		cm.sendSimple("Thanks to you #b#t4031056##k is safely sealed. Of course, also as a result, I used up about half of the power I have accumulated over the last 800 years or so...but now I can die in peace. Oh, by the way... are you looking for rare items by any chance? As a sign of appreciation for your hard work, I'll sell some items I have to you, and ONLY you. Pick out the one you want!"+selStr);
	} else {
		cm.sendOk("���������ң����骄���ҕ������������Ʒ�u�o�㡣");
		cm.dispose();
		}
		}
	if (status == 1) {
		selected = selection;
		cm.sendGetNumber("#b#t" + item[selected] + "##k ���������Ҫ�ĵ��ߣ��@������ " + msg[selected] + ". �����ܲ��ǫ@ȡ��ε��Ŀ�����ҕ��o��һ���ܺõąf�h�Ϳ����ˡ��������M�� #b" + cost[selected] + " ����#k ����ُ�I���٣���", 0, 1, 100);
		}
	if (status == 2) {
		amount = selection;
		totalcost = cost[selected] * amount;
		if (amount == 0) {
		cm.sendOk("����㲻�����I�κΖ|����Ԓ����Ҳ�]��ʲ�N���u��");
		cm.dispose();
		}
		cm.sendYesNo("�������Ҫ�I #r" + amount + " #t" + item[selected] + "##k? �M���� " + cost[selected] + " ���� ÿ�� #t" + item[selected] + "#, �����M���� #r" + totalcost + " ����#k");
		}
	if (status == 3) {
		if (cm.getMeso() < totalcost || !cm.canHold(item[selected])) {
		cm.sendOk("��_����ė������ᣬ����]������ҲҪ�� #r" + totalcost + "#k ���š�");
		cm.dispose();
		return;
		}
		cm.sendOk("�x�x�������l�F�Լ���Ҫ����Ʒ�ĵ�·���_���@�e���½����ҿ����ѽ��õ����f�v�꣬������Ȼ�����p��ħ����Ʒ��");
		cm.gainMeso(-totalcost);
		cm.gainItem(item[selected], amount);
		cm.safeDispose();
}
}