/*
	名字:	坤
	地圖:	明珠港
	描述:	104000000
*/

function start() {
	if (cm.isQuestFinished(22574)) {
		cm.sendOk("想要去睡龍島嗎？ 我們現在就可以出發。");
	} else {
		cm.sendOk("沒有什麼天氣比今天更適合出航的拉！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(200090080,0);
	cm.dispose();
}