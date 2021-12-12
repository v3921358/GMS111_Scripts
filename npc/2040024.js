/*
	名字:	玩具塔魔法石
	地圖:	玩具塔100层
	描述:	221023200
*/

function start() {
	if (cm.haveItem(4001020)) {
		cm.sendYesNo("你是否要使用#v4001020:# 傳送到#m221022100# 呢？");
	} else {
		cm.sendOk("你需要有#v4001020:# 才可以啟動。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4001020, -1);
		cm.warp(221022100, 3);
		}
	cm.dispose();
}