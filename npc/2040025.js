/*
	名字:	第二个玩具塔石
	地圖:	玩具塔70层
	描述:	221022100
*/

function start() {
	if (!cm.haveItem(4001020)) {
		cm.sendOk("需要持有#v4001020:#才能启动玩具塔石。");
	} else {
		var chat = "你是否要使用#v4001020:# 傳送到 #b";
		chat += "\r\n#L0#愛奧斯塔 (100樓)";
		chat += "\r\n#L1#愛奧斯塔 (32樓)";
		cm.sendSimple(chat);
}
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.gainItem(4001020,-1);
		cm.warp(221023200, 0);
		break;
	case 1:
		cm.gainItem(4001020,-1);
		cm.warp(221021200, 0);
		}
	cm.dispose();
}