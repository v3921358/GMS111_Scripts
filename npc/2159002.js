/*
	名字:	阿班
	地圖:	人机罕至的岩山
	描述:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (status == 0)
		cm.sendNext("如果他膽小，就把他留在這兒吧。 但是為什麼玩捉迷藏？ 讓我們玩點酷的。。。");
	if (status == 1) {
		cm.sendPrev("我沒有這麼說。。。");
		cm.dispose();
}
}