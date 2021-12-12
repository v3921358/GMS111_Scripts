/*
	名字:	完全变了的国王
	地圖:	第五座塔楼
	描述:	211061001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("我在玫瑰花园里找到了含有雷昂和我的记忆的花谱。我们俩的手艺都不怎么好，做得不是很好看，不过做这个的时候我们真的很开心……好的，请你帮我把它交给雷昂。");
	if (status == 1)
		qm.sendPrev("这是我们过去一起制作的#v4032837:##t4032837#，你把它给雷昂看看，告诉他我变成了幽灵，正在这里等他。那就拜托你了。请你再到#b接见室#k去一趟……");
	if (status == 2){
		if(!qm.canHold(4032837, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.gainItem(4032837, 1);
		qm.warp(211070200, 1);
		qm.dispose();
}
}