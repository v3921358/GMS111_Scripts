/*
	名字:	出口
	地圖:	第1区域
	描述:	910360000
*/

function start() {
	cm.sendYesNo("你想要逃离这里？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("如果实在待不下去，我可以帮你出去！");
	} else {
		cm.warp(103020000, 2);  //地铁售票口
		}
	cm.dispose();
}