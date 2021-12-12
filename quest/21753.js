/*
	名字:	被抢走的艾琳森林的封印石
	地圖:	营地会议室
	描述:	300000010
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 12) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("剛才聽到#m300000011#裡面有什麼聲音傳出來……是你嗎，#b#h0##k？ 封印石找到了嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b（講述#m300000011#裏發生的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("……那些家伙竟然在这里出现……对不起，#b#h0##k。我应该好好保管的……");
	if (status == 3)
		qm.sendNextPrevS("#p2131000#，不是你的錯。");
	if (status == 4)
		qm.sendNextPrev("你還是老樣子。 不過……你提到封印石的事情，讓我想起了一個線索。");
	if (status == 5)
		qm.sendNextPrevS("#b線索？");
	if (status == 6)
		qm.sendNextPrev("是的，我發現了一封你過去寫的信，裡面有和封印石有關的線索。 你想看看嗎？");
	if (status == 7)
		qm.sendNextPrevS("#b……嗯？ 信……");
	if (status == 8)
		qm.sendNextPrevS("#b#i4032327:#（無法拿到信。信通過了手，掉到了地上。）#k");
	if (status == 9)
		qm.sendNextPrev("……雖然我不太清楚時間法則……但我不能把這封信交給你的原因，應該是#b因為我們屬於兩個不同的時空#k……真讓人傷感。 不久之前我們還是同伴……");
	if (status == 10)
		qm.sendNextPrev("……你也知道，我們妖精可以活很長時間。 雖然你成為了幾百年以後的人，但我應該也能活到那個時候。 #b#h0##k，#b我會好好保管這封信，請你在你的那個時代過來找我。");
	if (status == 11)
		qm.sendNextPrev("雖然過了幾百年時間，但我想你應該不會忘記這個約定。 讓我們以後再見吧。 我會等著你的。");
	if (status == 12)
		qm.sendAcceptDecline("#b（回到#p1201000#所存在的時間，去找找#p2131000#吧。請求#p1002104#肯定可以找到#p2131000#的。）#k");
	if (status == 13){
		qm.forceStartQuest();
		qm.dispose();
}
}