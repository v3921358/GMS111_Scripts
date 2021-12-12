/*
	名字:	地狱大公入口
	地圖:	邪恶森林1
	描述:	101040310
*/

function start() {
	if (cm.getMapId() == 101040310) {
		cm.sendYesNo("妳想要挑戰地獄大公，哪裡是個極其危險的地方，你確定要進去？");
	} else {
		cm.sendYesNo("妳確定要出去？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMapId() == 101040310) {
			cm.warp(677000012,0);
		} else {
			cm.warp(101040310,0);
			}
			}
		cm.dispose();
}