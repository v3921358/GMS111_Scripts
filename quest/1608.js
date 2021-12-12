/*
	名字:	[十字猎人]另一个空间
	地圖:	未知地区
	描述:	102040600
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
		qm.sendYesNo("就是這個發著藍色光的柱子讓遺跡發掘地的怪物變得殘暴起來的嗎？ 不知道會發生什麼，我們要走進門裡看看，你準備好了嗎？");
	if (status == 1)
		qm.sendPrev("如果發生什麼危險的話一定要保護我啊。 那麼，一…二…三！！");
	if (status == 2){
		qm.forceStartQuest();
		qm.getMap(931050410).resetFully();//地图刷新
		qm.warp(931050410, 0);
		qm.spawnNpc(9073000, 199,169);
		qm.dispose();
}
}