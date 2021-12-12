/*
	名字:	破坏能力装置
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23034) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23034) == 1) {
		qm.sendNext("你把#o9001032#破壞掉啦！ 呵呵，果然不出我所料！ 我的眼光從來都沒有錯。 我知道你一定可以做到。 這樣一來，我們村的能量不足現象暫時就可以緩解了。 你真的為我們村立下了大功！");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("你的能力達到了這個程度，我就可以放心地讓你進入下一階段的課程了。 雖然其他人勸我，說還很危險……但是我想你一定不會被技能難倒，一定可以成為更强的豹弩遊俠！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3311);
		qm.gainItem(1142244,1);
		qm.sendNext("現在你已經不是以前的你了。 更强、更快、更華麗的技能世界將會展現在你面前。 使用起來也很不容易，但是……你有什麼好害怕的呢？ 你連那麼危險的任務都完成了。 ");
		}
	if (status == 3)
		qm.sendOk("讓我們下次課程再見吧。\n\n在那之前，希望你能以反抗者的身份，繼續努力。 ");
	if (status == 4){
		qm.dispose();
}
}
