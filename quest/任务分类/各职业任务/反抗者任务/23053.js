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
		qm.sendNext("哎呀……這不是我們的英雄#h0#嗎！ 哈哈哈，在村裡見到你，你看上去帥多了。 雖然我們村被黑色之翼佔領了，但這裡還是最美的。 不是嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b現在身體好一點了嗎？");
	if (status == 2)
		qm.sendNextPrev("雖然還有點疼，不過#p2151003#的手藝是最好的。 我已經幾乎恢復到過去的狀態了。 不過有一個問題。");
	if (status == 3)
		qm.sendNextPrevS("#b又有什麼問題？ 難道黑色之翼又在策劃什麼陰謀？");
	if (status == 4)
		qm.sendAcceptDecline("這次的問題不是別的……就是你！ 你太强了所以我變得不用出面了！ 不過我可是反抗者最棒的豹弩遊俠，現在都不能教你了！ 所以我要給你更難的課題！ 你願意接受嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3312);
		qm.gainItem(1142245, 1);
		qm.sendNext("我已經讓你轉職了。 同時把我知道的，但又無法自由操控的最高的技能傳授給了你。 雖然連我都無法做到，但我想你一定可以做到。 這是理所當然的事情，不是嗎？ 因為你是我們反抗者中最强的人！");
		}
	if (status == 6)
		qm.sendNext("這是我的最後一項課程……才怪。 我可是很有能力的。 雖然你比我强，但你還有能跟我學習的吧？ 所以……下個課程見吧。 雖然不知道什麼時候能開始。");
	if (status == 7)
		qm.sendPrev("在那之前，希望你能以反抗者的身份，繼續努力。");
	if (status == 8){
		qm.dispose();
}
}
