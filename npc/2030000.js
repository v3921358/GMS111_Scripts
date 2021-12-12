/*
	名字:	杰夫
	地圖:	冰雪峡谷Ⅱ
	描述:	211040200
*/

function start() {
	if (cm.haveItem(4031450)) {
		cm.warp(921100100, 0);
		cm.dispose();
	} else {
		cm.sendYesNo("你好像要继续往深处走嘛...你可要考虑清楚哦。据说深处有很多很可怕的怪物，曾经有数十位勇士闯了进去，但是没有一个人回来……从此再也没有人敢进去了。不管你准备多么充分，千万不要冒然行动啊。");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("看来你自己清楚自己的实力！");
		cm.dispose();
	} else {
	if (cm.getPlayerStat("LVL") >= 40) {
		cm.warp(211040300, 5);  
	} else {
		cm.sendOk("你的等级不够！还没有资格就不要强行去送死！");
		}
	cm.dispose();
}
}
