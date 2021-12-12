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
	if (qm.getQuestStatus(23025) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23025) == 1) {
		qm.sendNext("這就是那個#v4032739:##t4032739#啊。 果然……只要有了這個檔，就可以對反抗者今後的方向作出調整了， 幹得好！");
		}
		}
	if (status == 1)
		qm.sendNextPrev("這個任務原來不是你的任務，是我特意交給你的。 那個黑色之翼成員……你一定很想親手把他解决掉吧？ 我是希望你為了復仇，可以把任務完成得更好。");
	if (status == 2)
		qm.sendNextPrev("但是我沒想到你能完成得這麼乾淨利索。 真是了不起。 你的成長速度總是超出我的預測。 讓我感覺自己的付出很有意義。");
	if (status == 3)
		qm.sendAcceptDecline("我本以為是很久以後的事情……但看到你成長得這麼快，我就沒有必要猶豫了。 我馬上讓你進入下一階段。 讓你變成和以前完全不同的、可以自由地操縱更多機械的强大的機械師。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3510);
		qm.gainItem(4032739,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("我已經讓你轉職了，與此同時，我也把我的知識和技能都傳授給你了。 此外，我還把你之前使用的麥林彈提升了。 所以現在的你已經不是過去的你了。 是個更加進化的機械師，這就是你，請你好好享受新獲得的力量吧。");
		}
	if (status == 5)
		qm.sendOk("下次課程再見。\n\n希望你能在此期間好好展現反抗者的實力。 ");
	if (status == 6){
		qm.dispose();
}
} 