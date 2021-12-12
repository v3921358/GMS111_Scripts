/*
	名字:	蕾雅
	地圖:	金银岛
	描述:	100000000
*/

function start() {
	cm.sendYesNo("我是蕾雅，協助管理公社運作的負責小姐，你想去公社裡面瞭解下情况嗎？我隨時可以帶你過去。");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("等你想起我的時候，在來找我。");
	} else {
		cm.saveLocation("CHRISTMAS");   //标记地图
		cm.warp(200000301,0);
		}
	cm.dispose();
}
