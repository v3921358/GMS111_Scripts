/*
	����:	����
	�؈D:	���������鴬
	����:	923020000
*/

function start() {
	cm.sendYesNo("���������뿪���");
}

function action(mode, type, selection) {
	if (mode == 1) {
		var returnMap = cm.getSavedLocation("MULUNG_TC");
		if (returnMap < 0) {
		returnMap = 230000000; // to fix people who entered the fm trough an unconventional way
		}
		cm.clearSavedLocation("MULUNG_TC");
		cm.warp(returnMap, "unityPortal2");
		}
	cm.dispose();
}