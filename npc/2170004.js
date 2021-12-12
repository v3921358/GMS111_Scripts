/*
	名字:	德莫斯
	地圖:	克里塞入口
	描述:	200100000
*/

function start() {
	cm.sendYesNo("妳就想回去天空之城了？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你就不能多在這裡陪我一下！");
	} else {
		cm.warp(200000000,0);
		}
	cm.dispose();
}
