/*
	名字:	Konpei
	地圖:	アジト前
	描述:	801040000
*/

function start() {
	cm.sendYesNo("這裡就是藏身處，什麼 ？？？？你想跑回#b#m801000000##k？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("進去裡面吧，很多朋友在等你，我也會等你的！");
	} else {
		cm.warp(801000000,0);
		}
	cm.dispose();
}