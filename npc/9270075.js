/*
	名字:	小喙喙
	地圖:	金银岛
	描述:
*/

function start() {
	cm.sendYesNo("白色聖誕山是個美麗的地方，你想去白色聖誕山嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("等你想去的时候,再来找我吧。");
	} else {
		cm.saveLocation("CHRISTMAS");   //标记地图
		cm.warp(555000000,0);
		}
	cm.dispose();
}