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
	if (status == 8) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("黑腐法師的詛咒對所有的瑪瑙龍都產生了影響。 存在於這片土地上的瑪瑙龍正在逐漸死去。 這樣下去的話，我們就要滅絕了…");
	if (status == 1)
		qm.sendNextPrevS("#b怎麼會發生這種事？");
	if (status == 2)
		qm.sendNextPrev("我們是黑廣法師最大的對手。 黑魔法師拼命想拉找我們，但是我們拒絕了他的提議，站出來和黑魔法師對抗。 之後他就一直把我們當成眼中釘，肉中刺。 但是他的詛咒並不完美。 囙此我才能把他對我的朋友弗裡德施加的詛咒轉移到我的身上。");
	if (status == 3)
		qm.sendNextPrevS("#b為什麼呢？");
	if (status == 4)
		qm.sendNextPrev("失去種族的王還留在這個世界上幹什麼呢？ 與其這樣，還不如讓自己的朋友活下去。 當然，我也有事情要他去做。");
	if (status == 5)
		qm.sendNextPrevS("#b我能問問是什麼事情嗎？");
	if (status == 6)
		qm.sendNextPrev("沒關係。 原來我們種族擁有近乎無限的生命，但後代卻非常稀少。 因為這次戰爭，原本為數不多的族人幾乎全部死了，剩下的孩子們也受到了詛咒。 但還好不久前出生了一個受到祝福的新生命。 那個孩子還沒從蛋中孵化，囙此才能擺脫黑魔法師的詛咒。");
	if (status == 7)
		qm.sendNextPrev("但是在和黑魔法師展開最後決戰的時候，我把它掉在了神木村的什麼地方。 所以我想手托弗裏德回到神木村去，把那個孩子轉移到安全的地方。 但是沒想到弗裡德在這漫長的時間裏都沒能醒來。");
	if (status == 8)
		qm.sendAcceptDecline("所以我想拜託你， 請你找到我們最後的孩子，幫我帶回來。");
	if (status == 9){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("謝謝你幫助，我們這一族又將開始有新的未來。");
	if (status == 1)
		qm.sendPrev("等弗裡德醒來之後，我會讓他帶著蛋到安全的地方去。 雖然對弗裡德非常抱歉，但這是朋友的委託，他一定會用一生去保護它的。 這樣，我們的希望就能延續到未來。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 540000 exp ");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(540000);
		qm.dispose();
}
}