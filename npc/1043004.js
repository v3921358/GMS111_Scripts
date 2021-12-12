/*
	名字:	说话的树
	地圖:	奇怪的斧木妖出没地带
	描述:	910100100
*/

function start() {
	cm.sendYesNo("我的朋友，你要回去了麼？#b（如果尚未完成任務，可以取消任務後重新接受任務。）");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("再幫我多消滅一些！");
	} else {
		cm.warp(101010000,0);
		}
	cm.dispose();
}