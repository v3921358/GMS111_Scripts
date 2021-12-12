/*
	名字:	妖精 罗雯
	地圖:	魔法密林
	描述:	101000000
*/

function start() {
	cm.sendYesNo("南部秘密森林是一個危險的地方，哪裡常有憤怒的綠蘑菇出沒，怎麼樣，想去南部秘密森林麼？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("秘密森林不是誰都可以去的地方。");
	} else {
		cm.warp(910100002, 0)
		}
	cm.dispose();
}