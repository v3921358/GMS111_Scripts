/*
	名字:	龙
	地圖:	梦中的森林
	描述:	900010200
*/

function start() {
	cm.sendAcceptDecline("終於找到了，符合契約人條件的人……履行契约的条件…");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("答應我，否則這一切將永世不在醒來。");
	} else {
		cm.warp(100030100,0);
		}
	cm.dispose();
}
