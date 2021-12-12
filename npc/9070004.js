/*
	名字:	赵云子龙
	地圖:	金银岛
	描述:	100000000
*/

function start() {
	cm.sendYesNo("戰鬥廣場歡迎英雄的加入，我非常期待你的到來！");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("可惜了，我還以為你充滿了才能。");
	} else {
		cm.saveLocation("MULUNG_TC");   //标记地图
		cm.warp(960000000,0);
		}
	cm.dispose();
}
