/*
	����:	�׺�
	�؈D:	����ɽ��
	����:	100020000
*/

var map = 910060000;
var num = 5;
var maxp = 3;

function start() {
	if (cm.getPlayer().getLevel() > 30) {
		cm.sendOk("��ʮ������o��ʹ��ࡡ�");
		cm.dispose();
	} else {
		var selStr = "ѡ��һ������Ҫȥ����ѵ���ģ�30������o��ʹ��ࡣ�";
		for (var i = 0; i < num; i++) {
		selStr += "\r\n#b#L" + i + "#��ѵ���� " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
		cm.sendSimple(selStr);
}
}

function action(mode, type, selection) {
	if (cm.getPlayerCount(map + selection) >= maxp) {
		cm.sendOk("������������Ѿ����ˣ����Ժ��ٳ��ԣ�");
	} else {
		cm.warp(map + selection, 0);
		}
	cm.dispose();
}