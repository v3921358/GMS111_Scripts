/*
	名字:	艾利逊
	地圖:	天空之城公园
	描述:	200000200
*/

function start() {
	cm.sendYesNo("你想去克裏塞嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("哪裡從前是個美麗的地方，不過現在被黑暗勢力所笼罩，好像连这里都能感觉到黑暗气息了啊………");
	} else {
		cm.warp(200100001, 0);
		}
	cm.dispose();
}
