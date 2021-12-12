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
		qm.sendNext("哎呀……這不是我們的英雄#h0#嗎？ 呵呵，能在村裡見到你，真讓人高興。 雖然自由和和平被奪走了，但這裡還是最美的地方。");
	if (status == 1)
		qm.sendNextPrevS("#b現在身體好一點了嗎？");
	if (status == 2)
		qm.sendNextPrev("是的，#p2151003#的藥很管用，我已經好多了。 幾乎已經完全恢復到以前的狀態了。 不過有一個很大的問題。");
	if (status == 3)
		qm.sendNextPrevS("#b又有什麼問題？ 難道黑色之翼又在策劃什麼陰謀？");
	if (status == 4)
		qm.sendAcceptDecline("這次的問題不是別的……就是你！ 你太强了我的作用都變弱了。 不過我可是教授反抗者機械的老師，居然比徒弟還弱……所以我要給你更難的課題。 你願意接受嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3512);
		qm.gainItem(1142245, 1);
		qm.sendNext("我已經讓你轉職了。 同時把我可以製作的最强的機器人送給了你。 那些東西連我都無法完全控制，無法完全發揮出它們的能力……不過我想你一定可以做到。 因為你是反抗者最强的機械師。");
		}
	if (status == 6)
		qm.sendNext("現在我的課程……已經快要結束了。 但是現在還不會結束。 雖然你確實比我强了，但是你還有很多要向我學習的地方。 我們下次課程再見吧。 雖然不知道下次課程什麼時候會開始……。");
	if (status == 7)
		qm.sendPrev("在那之前，希望你能以反抗者的身份，繼續努力。");
	if (status == 8){
		qm.dispose();
}
}
