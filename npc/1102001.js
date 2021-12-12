/*
	名字:	奇里科
	地圖:	第二演武场
	描述:	913001000
*/

function start() {
	cm.sendYesNo("骑士等级考试全部结束了，要我把你送出去吗？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你可能需要一些時間。");
	} else {
		cm.warp(130020000, 0);
		}
	cm.dispose();
}