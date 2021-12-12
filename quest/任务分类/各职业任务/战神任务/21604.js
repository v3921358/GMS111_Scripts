/*
	名字:	骑乘狼
	地圖:	冰峰雪域
	描述:	211000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("啊呀，你帶著的不是狼嗎？ 我已經好久都沒見過帶狼的人了。 不過，帶著狼卻不#b騎乘#k，難道你還不會騎乘之術嗎？");
	if (status == 1)
		qm.sendNextPrev("所謂騎乘，就是一種騎在狼背上快速行進，並能和狼之間實現良好溝通的科技。 我曾經騎過#o5130104#和#o5140000#，當時我可帥呢！");
	if (status == 2)
		qm.sendNextPrev("你想學習騎狼嗎？ 如果你想學的話，我#b#p2020007##k可以幫助你。");
	if (status == 3)
		qm.sendNextPrev("要想騎乘，沒有任何準備，直接騎在狼背上是很困難的。 要先弄個#b#v1912011:##t1912011##k，這樣才能讓狼不覺得難受。 我會做狼鞍，你去找資料就好。");
	if (status == 4)
		qm.sendAcceptDecline("製作#t1912011#的資料是#b#t4000048##k。 大概#b50張#k就夠了。 等你把資料都找齊了，我就把騎乘的技巧和#t1912011#一起傳授給你。 趕緊去找資料吧。 我也很期待啊。");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}