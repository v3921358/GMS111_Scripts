/*
	名字:	Konpei
	地圖:	悪夢の果て
	描述:	801040100
*/

function start() {
	if (cm.haveItem(4032142)) {
		cm.sendNext("嘿，嘿！#v4000141:##b#t4000141##k麻煩都處理乾淨了？我們先離開這裡在說！")
	} else {
		cm.sendNext("哼！！！如果你能僥倖除掉了老闆，就得把#v4000141:##b#t4000141##k作為證據給我看，否則我是不會相信的！");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.haveItem(4032142)) {
		cm.warp(801040101, 1);
	} else {
		cm.warp(801040004, 1);
		}
		}
	cm.dispose();
}
