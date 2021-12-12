/*
	名字:	和马斯特玛的对练
	地圖:	埃德尔斯坦公园喷泉附近2
	描述:	931050110
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
		qm.sendNext("好了，走吧！那里的我不是召唤兽的形象，而是过去的我。");
	if (status == 1)
		qm.sendAcceptDecline("当然，因为是我创造出来的幻象，因此没有过去的我强。但是那个次元是我的领域，因此会比现实中的强很多。因为是其他次元，所以不能停留太长时间。请一定要记住！");
	if (status == 2){
		qm.forceStartQuest();
		qm.resetMap(931050120);   //地图刷新
		qm.warp(931050120,0);
		qm.spawnMob(9001038,714,-14);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("修炼怎么样？有成果的话，我会把现在的状态刻印下来。");
	if (status == 1)
		qm.sendPrev("很高兴能对你有所帮助。今天用了那么多力量，一定很累吧？请回去吧。嗯？辛苦？别跟我客气……");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(3111);
		qm.dispose();
}
}

