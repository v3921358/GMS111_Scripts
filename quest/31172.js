/*
	名字:	最后的玛瑙龙
	地圖:	燃烧的废墟
	描述:	272000310
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
		qm.sendNext("……你是誰？ 為什麼會來到這裡。");
	if (status == 1)
		qm.sendNextPrevS("（哇，真大啊。）我是#b#h0##k。 摩訶讓我向你問好。");
	if (status == 2)
		qm.sendNextPrev("摩訶……他怎麼樣了？ 和戰神在一起嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b他帶著戰神去了裡恩島。 說要在那裡把戰神封印起來。");
	if (status == 4)
		qm.sendNextPrev("原來如此。 謝謝你救了我的朋友，來至未來世界的朋友。");
	if (status == 5)
		qm.sendNextPrevS("#b…..！！ 你是怎麼知道的？");
	if (status == 6)
		qm.sendNextPrev("我可是瑪瑙龍之王。 除了戰神之外，你還可以幫助我們所有人。 我和弗裡德、戰神和摩訶，還有雙普精靈等等，終於突破了艱難險阻，站在了黑魔法師面前。 雖然誰也沒見過黑魔法師的本體，但從他身上感覺到的强烈的邪惡氣息，就能知道他就是黑魔法師。");
	if (status == 7)
		qm.sendNextPrev("但是他的壓倒性的魔力已經喪失了大半，因為曾經是黒魔法師左右手的惡廣獵手網剛和黑魔法師展開了殊死決戰。 惡魔獵手無法原諒殺死自己家人的黑廣法師。 我們抓住這個機會，開始和黑魔法師戰鬥。");
	if (status == 8)
		qm.sendNextPrev("即使是這樣，黑腐法師仍然很强。 身經百戰的英雄們如果不是齊心協力的話，是絕對不可能把他打倒的。 最後我們全都受了重傷，好不容易才把他封印了。 ");
	if (status == 9)
		qm.sendNextPrevS("#b聽摩訶說，黑魔法師在被封印的瞬間施加了强力詛咒……");
	if (status == 10)
		qm.sendNextPrev("沒錯。 黑魔法師利用封印瞬間的那股力裏，對包括我和弗裡德在內的所有人施加了詛咒。 這個詛咒非常强烈，所以我只能代替弗裡德一個人承受了詛咒，囙此慢慢地被冰凍了起來。");
	if (status == 11)
		qm.sendNextPrevS("#b沒有其它解開詛咒的方法嗎？");
	if (status == 12)
		qm.sendAcceptDecline("如果解開黑魔法師的封印，詛咒應該就會解開。 但是這樣的事情絕不會發生。 我和弗裡德設計的封印，會把他永遠束縛在那裡。 我沒有力氣說更多的話，你能過會兒再來和我說話嗎？ 我得休息一下。");
	if (status == 13){
		qm.forceStartQuest();
		qm.dispose();
}
}
