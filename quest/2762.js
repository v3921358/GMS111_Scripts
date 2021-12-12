/*
	名字:	会说话的树的委托
	地圖:	发光森林通道
	描述:	101010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你就是 #p1032102#派來的人嗎。 那請你幫我解決我的煩惱好嗎？ 就是最近在 #m101000000# 附近出現了 #r#o9100014##k。 #m101000000# 附近會有 #r#o9100014##k不是很奇怪嗎？");
	if (status == 1)
		qm.sendNextPrev("可是他們老是在我面前擺動斧頭。 上次還被斧頭刮到受傷了呢。 這樣下去總有一天被斧頭砍死。");
	if (status == 2)
		qm.sendAcceptDecline("我送你去#r#o9100014##k隱藏的地方請幫我消滅 40隻。 這樣他們就不會再騷擾我了吧。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(910100100);
		qm.dispose();
}
}