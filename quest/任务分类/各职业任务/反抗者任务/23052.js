/*
	名字:	超越我的你
	地圖:	反抗者本部
	描述:	310010000
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
		qm.sendNext("哎呀……這不是我們的英雄#h0#嗎？ 呵呵，能在村裡見到你，真讓人高興。 雖然我們村被黑色之翼佔領了，但我們村還是最美的。 不是嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b身體現在沒事了吧？");
	if (status == 2)
		qm.sendNextPrev("嗯，#p2151003#的本事很好，我已經沒事了。 現在已經完全恢復到了過去的狀態。 不過還有一個問題。");
	if (status == 3)
		qm.sendNextPrevS("#b又有什麼問題？ 難道黑色之翼又在策劃什麼陰謀？");
	if (status == 4)
		qm.sendAcceptDecline("不，這次的問題就是…你！ 你變得太强大了，居然做到了連我都做不到的事情。 這可太讓我羞愧了！ 所以我要給你一個更難的課題！ 你願意接受嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3212);
		qm.gainItem(1142245, 1);
		qm.sendNext("我已經讓你轉職了。 同時我把我知道的，但又無法熟練掌握的所有最高的技能傳授給了你。 雖然我沒能完全掌握它們，但我相信你一定可以做到。 你是我們反抗者中的最强者！ 還有什麼做不到的呢？");
		}
	if (status == 6)
		qm.sendNext("這是我的最後一項課程了嗎……不，不可能。 我可是很有能力的反抗者。 現在你比我强，但你還有能跟我學習的吧？ 所以……下個課程見吧。 雖然不知道什麼時候能開始。");
	if (status == 7)
		qm.sendPrev("在那之前，希望你能以反抗者的身份，繼續努力。");
	if (status == 8){
		qm.dispose();
}
}
