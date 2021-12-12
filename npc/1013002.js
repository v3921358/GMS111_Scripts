/*
	名字:	蛋
	地圖:	遗忘森林
	描述:	900020220
*/

function start() {
	cm.sendOk("你得到了一個龍蛋。");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(900090103);
		}
	cm.dispose();
}