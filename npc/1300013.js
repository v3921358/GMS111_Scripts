/*
	名字:	堵住的入口
	地圖:	东侧城塔
	描述:	106021400
*/

function start() {
	cm.sendSimple("你是委派過來的英雄嗎？\r\n\r\n#b#L0#三色雪人王#l\r\n#L1#結婚禮堂#l");
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayerCount(106021500) == 0) {
			cm.warpParty(106021500);
		} else {
			cm.sendOk("任務正在執行中，請嘗試其它頻道。");
			}
			break;
	case 1:
		cm.warp(106021401,1);
		}
	cm.dispose();
}