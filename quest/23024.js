/*
	名字:	报仇与成长
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23024) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23024) == 1) {
		qm.sendNext("#i4032738:##t4032738#被取回來啦。 幹得好！ 我就知道你一定可以做到。");
		}
		}
	if (status == 1)
		qm.sendNextPrev("這個任務是我特意從其他人那裡搶過來交給你的。 黑色之翼的那個傢伙，從前讓你吃過苦頭，不是嗎？ 我把任務交給你，就是想讓你向他復仇。");
	if (status == 2)
		qm.sendNextPrev("想到你能完成得這麼乾淨俐落……真了不起！ 你在這麼短的時間內，獲得了驚人的成長。");
	if (status == 3)
		qm.sendAcceptDecline("那樣的話，就沒有必要苦惱了！ 我本來覺得有點早，不過看來好像完全用不著擔心了。 我可以讓你進入下一個階段了。 讓你變成和以前完全不同的、擁有更强力量的豹弩遊俠…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3310);
		qm.gainItem(4032738,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("我已經讓你轉職了，同時也傳授了你更强的技能。 現在你已經不是以前的你了。 你已經變成了更快、更堅韌、更强大的豹弩遊俠了。 盡情享受你新的力量吧。");
		}
	if (status == 5)
		qm.sendOk("下次課程再見。\n\n在那之前，希望你能以反抗者的身份，繼續努力。 ");
	if (status == 6){
		qm.dispose();
}
} 