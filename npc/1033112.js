/*
	����:	���ش��Ϳ�
	�؈D:	��ŷ��
	����:	101050000
*/

var status = -1;

var maps = Array(104020000, 100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100);
var show;
var sCost;
var selectedMap = -1;

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
	if (status == 0){
		var selStr = "��Ҫ���������f�᣿ Ո�x��Ŀ�ĵء�#b";
		for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
		}
		}
		cm.sendSimple(selStr);
		}
	if (status == 1){
		cm.sendYesNo("�_��Ҫ�Ƅӵ�#b#m" + maps[selection] + "##k���ӆ᣿ �r���#b0���� #k��");
		selectedMap = selection;
		}
	if (status == 2){
		cm.dispose();
		cm.warp(maps[selectedMap]);
}
}