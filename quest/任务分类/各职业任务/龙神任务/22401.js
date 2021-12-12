/*
	名字:	龙可以骑吗？
	地圖:
	描述:	米乐
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
		qm.sendNext("主人，有什麼事嗎？ 你有什麼話要說嗎？ 嗯？ 騎乘？ 騎乘的話，是說騎猪、騎鳥、騎狼之類的吧？ 怎麼突然提到這個？");
	if (status == 1)
		qm.sendNextPrevS("#b我想知道瑪瑙龍能不能騎？ 怎麼樣？ 可以嗎？");
	if (status == 2)
		qm.sendNextPrev("騎瑪瑙龍……嗯？！ 你是說想騎我嗎？ 我是主人的夥伴啊？ 嗚嗚，主人太過分了～我說過不是寵物！");
	if (status == 3)
		qm.sendNextPrevS("#b我們是夥伴，你應該可以讓我騎吧？");
	if (status == 4)
		qm.sendNextPrev("哈，怎麼說話那麼酷？ 好吧！ 那我累的時候，主人你也要讓我騎啊！ 可以嗎？ 那我就讓你騎。");
	if (status == 5)
		qm.sendNextPrevS("#b……你想讓我死嗎？");
	if (status == 6)
		qm.sendNextPrev("開個玩笑。 過去的我可能還行，現在的話，一定會把主人壓扁的。 但是反過來應該沒有問題。 主人的個頭又不高。");
	if (status == 7)
		qm.sendNextPrev("#b那就是可以騎咯？");
	if (status == 8)
		qm.sendNextPrev("嗯，我飛得比主人快得多，從效率上來說，這個主意好像不錯。 但是僅這樣是沒辦法騎的，必須準備兩樣東西。");
	if (status == 9)
		qm.sendNextPrev("必須要有#b鞍子#k和#b騎乘技能#k！不墊東西就坐在我背上的話，屁股一定會開花的。 不會騎乘技能的話，可能會從我身上掉下去。 所以必須準備這兩樣東西。 你準備好嗎？");
	if (status == 10)
		qm.sendPrev("去問問#b#p1032001##k騎龍的事情，他應該會告訴你獲得鞍子和學習技能的方法。 先去見見#b#p1032001##k吧");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}