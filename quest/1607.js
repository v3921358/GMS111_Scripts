/*
	名字:	[十字猎人]奇怪的女人和奇怪的门
	地圖:	遗迹发掘团营地
	描述:	102040200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("果然不出我所料，就知道你會來。 雖然比我想像的晚了點。");
	if (status == 1)
		qm.sendNextPrevS("#b（……早知道不來了，這女人真奇怪。）你還有什麼話要說來著？…");
	if (status == 2)
		qm.sendNextPrev("據我之前認識的遺跡發掘現場裏的#b發掘隊長杉峰#k說，這附近發現了奇怪的門。 你來的路上見過嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b沒有啊，來的路上沒見過那樣的東西。");
	if (status == 4)
		qm.sendNextPrev("最近遺跡發掘地的怪物不知怎麼的，突然變得很兇殘，開始攻擊附近的居民。 我覺得跟那道門有些關係。");
	if (status == 5)
		qm.sendNextPrevS("#b嗯，說不定真是那樣。 我也覺得有點巧合。");
	if (status == 6)
		qm.sendAcceptDecline("你願意跟我一起去#b#m102040600##k看看嗎？ 我對那道門可是相當好奇呢。 不過我是路癡……我已經跟杉峰打聽過去那裡的路線，我們一起去的話，肯定很快就能找得到。");
	if (status == 7)
		qm.sendPrev("那么现在就出发去#b#m102040600##k。");
	if (status == 8){
		qm.forceStartQuest();
		qm.warp(102040600,0);
		qm.dispose();
}
}