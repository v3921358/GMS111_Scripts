/*
	名字:	金利奇
	地圖:	明珠港
	描述:	104000000
*/

function start() {
	if (cm.haveItem(4001255,1)) {
		cm.sendYesNo("你现在打算将你手中的#v4001255:##b#t4001255##k给我吗？");
	} else {
		cm.sendOk("不認識我嗎？我是世界第一富翁金利奇，我通過貿易賺了很多錢，如果你有#v4001255:##b#t4001255##k，可以隨時來找我。讓你參觀下我的寶庫");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("小气鬼！我的宝库里可是有很多宝贝哦！");
		cm.dispose();
		}
	if (mode == 1) {
	if (cm.getPlayerCount(801040100) == 0) {
		cm.saveLocation("RICHIE");   //标记地图
		cm.warp(390000000,0);
		cm.gainItem(4001255,-1);
	} else {
		cm.sendOk("請稍等一下，我正在與其它買家連線。");
		}
		}
	cm.dispose();
}