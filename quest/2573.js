/*
	名字:	新冒险的开始
	地圖:	通往冒险岛
	描述:	3000600
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你好!这不是最适合旅行的天气吗?我是船长，这艘好船的船长。你一定是个新探险家吧?很高兴见到你。");
	if (status == 1)
		qm.sendAcceptDecline("我们还没有完全准备好离开，所以在等待期间，请随意在船上四处看看。");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.warp(3000000,0);
		qm.dispose();
}
}
