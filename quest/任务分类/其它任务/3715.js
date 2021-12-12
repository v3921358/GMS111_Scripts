/*
	名字:	安迪
	地圖:	塔拉森林时间门
	描述:	240070000
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
		qm.sendAcceptDecline("好久不見。找我的原因是…啊，當然知道。大家找我的原因只有一個，是 #e情報#n。新情報喔…恩…最近沒有很好聽的情報。因我的記憶力不太好，都知道嗎，但為何要這樣？呼呼呼…既然我的記憶力不好，但是 #b5000楓幣#k的話，可以會想起來好的情到。");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainMeso(-5000);
		qm.dispose();
}
}