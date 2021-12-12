/*
	名字:	最后的报告
	地圖:	时间裂缝
	描述:	272000000
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
		qm.sendNext("#b#h0##k，我正在等你。 這段時間，我一直在調查除我之外的其他工作員有沒有受到阿卡伊勒的影響。 還好其他工作員沒事。 過去的情况怎麼樣了？");
	if (status == 1)
		qm.sendNextPrevS("#b還好及時除掉了阿卡伊勒的分身，（講訴了之前發生的一切）。");
	if (status == 2)
		qm.sendNextPrev("這是我最近聽到的最好的消息之一。 那麼，阿卡伊勒的陰謀已經全部封锁了嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b據說阿卡伊勒的分身仍然存在。 倫娜說可以通過時間裂縫到達他所在的次元縫隙。");
	if (status == 4)
		qm.sendAcceptDecline("這次必須真的把他打敗才行。 要是可以的話，我很想讓#b#h0##k你休息一下，但是現在不是時候，非常抱歉。");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}