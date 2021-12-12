/*
	名字:	阿弗利埃
	地圖:	阵地后侧
	描述:	900030000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("你沒事吧，主人？ 你看上去好像很累……");
	if (status == 1)
		cm.sendNextPrevS("#b我沒事。 站在最前面戰鬥的戰神好像受了一點傷，其他的人都沒事。 你沒事吧？");
	if (status == 2)
		cm.sendNextPrev("沒事。 戰鬥對我來說沒有任何問題。");
	if (status == 3)
		cm.sendNextPrevS("#b我擔心的不是你的身體。 你的同族已經全部……");
	if (status == 4)
		cm.sendNextPrev("…………");
	if (status == 5)
		cm.sendNextPrevS("#b對不起，我不應該把你拖入戰鬥。 我應該讓你跟隨黑魔法師的，那樣的話……瑪瑙龍就可以繼續存在下去……！");
	if (status == 6)
		cm.sendNextPrev("別說傻話，主人。 我們是自願參加戰鬥的，不是你的錯。");
	if (status == 7)
		cm.sendNextPrevS("#b但是……！");
	if (status == 8)
		cm.sendNextPrev("雖然黑魔法師覬覦我們的力量……但我們絕不會站在黑魔法師一邊的。 我們瑪瑙龍，是和擁有强大靈魂的人類相互吸引的種族，不可能和黑魔法師之類的邪惡的人待在一起。");
	if (status == 9)
		cm.sendNextPrev("所以你用不著道歉，主人。 不，弗裡德。 即使我們在戰鬥中全部死去，那也是我們瑪瑙龍自己的選擇。 希望你能尊重我們的選擇。");
	if (status == 10)
		cm.sendNextPrevS("#b阿弗利埃……");
	if (status == 11)
		cm.sendNextPrev("但是我有個請求，在和黑魔法師的最後戰鬥中……如果我在戰鬥中死去，請保護好我的孩子。 它還要很久才會醒來……你是我最信任的人。 ");
	if (status == 12)
		cm.sendNextPrevS("#b別說這種話，阿弗利埃。 你要活下去，保護自己的孩子！");
	if (status == 13)
		cm.sendNextPrev("不知道我們之中誰會活下去，所以我才會這樣拜託你。 你能答應我嗎，主人？");
	if (status == 14)
		cm.sendNextPrevS("#b明白了。 我……答應你。 但是你也要答應我，一定要活下來。");
	if (status == 15)
		cm.sendNextPrev("當然，主人。");
	if (status == 16)
		cm.sendPrevS("#b絕對不要為了我而犧牲……",3);
	if (status == 17){
		cm.forceStartQuest(22601, "1");
		cm.dispose();
}
}