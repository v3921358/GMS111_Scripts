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
	if (qm.getQuestStatus(23023) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23023) == 1) {
		qm.sendNext("#i4032737:##t4032737#被取回來啦。 幹得好！ 我就知道你一定可以做到。 ");
		}
		}
	if (status == 1)
		qm.sendNextPrev("呵呵……這次任務是我故意交給你的。 黑色之翼的那個傢伙，過去好像曾經讓你吃過苦頭吧？ 過去你連他的衣角都碰不到，現在竟然這麼輕易就打敗了他。");
	if (status == 2)
		qm.sendNextPrev("你確實是個了不起的傢伙。 老實說，我根本沒想到你會在這麼短的時間內成長到現在這個程度。 我還以為你會費一番功夫呢…");
	if (status == 3)
		qm.sendAcceptDecline("對於成長的確認這樣就足够了！ 我還以為可能有點早，但好像完全用不著擔心了。 我們進入下一個階段吧！ 你會變成以前根本無法想像的擁有更强力量的喚靈鬥師……\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3210);
		qm.gainItem(4032737,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("我讓你轉了職，同時向你傳授了比之前的技能更强的技能。 現在你已經不是從前的你了。 你已經變成更强、更狂暴的喚靈鬥師。 呵呵，你成長的速度這麼快，看來我的教課水准也不錯嘛？");
		}
	if (status == 5)
		qm.sendOk("下次課程再見。\n\n在那之前，希望你能以反抗者的身份，繼續努力。 ");
	if (status == 6){
		qm.dispose();
}
}