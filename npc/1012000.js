/*
	����:	���y�u
	�؈D:	���y�u�а�
	����:	104000000
*/

var status = -1;

var maps = Array(104000000, 100000000, 102000000, 101000000, 103000000, 120000000);
var rCost = Array(1200, 1000, 1000, 800, 1000, 1000);
var costBeginner = Array(120, 100, 100, 80, 100, 100);
var cost = new Array("1,200", "1,000", "1,000", "800", "1,000", "1,000");
var show;
var sCost;
var selectedMap = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1 && mode == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("���y�u�аͽ��\�������գ���Ҫ���������f��ȫ�ֿ��ٵ��Ƅӆ�? ������@�� ���˃��ȿ����M���, Ոʹ�� #b#p1012000##k �H�е����㵽��Ҫ���_�ĵط���");
	if (status == 1){
		if (!cm.haveItem(4032313)) {
			var job = cm.getJob();
		if (job == 0 || job == 1000 || job == 2000) {
			var selStr = "�҂�������90%�ۿۣ���������x�����Ŀ�ĵ�#b";
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " ����)#l";
			}
		} else {
			var selStr = "Ո�x��Ŀ�ĵ�.#b";
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " ����)#l";
			}
			}
			cm.sendSimple(selStr);
		} else {
			cm.sendYesNo("��!����������һ������Ʊ�ҿ������M���㎧��ȥ#b�����ִ�#k��");
			}
			}
	if (status == 2){
		if (!cm.haveItem(4032313)) {
			var job = cm.getJob();
		if (job == 0 || job == 1000 || job == 2000) {
			sCost = costBeginner[selection];
			show = costBeginner[selection];
		} else {
			sCost = rCost[selection];
			show = cost[selection];
			}
			cm.sendYesNo("�����@�e�]���κ����������ǰ�? #b#m" + maps[selection] + "##k �ǌ����M��� #b" + show + " ����#k.");
			selectedMap = selection;
		} else {
			cm.gainItem(4032313, -1);
			cm.warp(100000000, 6);
			cm.dispose();
			}
			}
	if (status == 3){
		if (cm.getMeso() < sCost) {
			cm.sendOk("�ܱ�Ǹ�����]�����ė��� �����㌢�o����������܇!");
		} else {
			cm.gainMeso(-sCost);
			cm.warp(maps[selectedMap]);
			}
		cm.dispose();
}
}