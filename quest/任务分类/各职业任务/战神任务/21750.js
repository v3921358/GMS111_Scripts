/*
	名字:	记得我的人
	地圖:	阿尔泰营地
	描述:	300000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(21750) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21750) == 1) {
		qm.sendNext("……#b#h0##k？…… 這是我的幻覺嗎？ 戰神你……真的還活著嗎？ 啊……謝天謝地……");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("……嗯，不好意思，我不記得你了");
	if (status == 2)
		qm.sendNextPrev("……嗯？ 你說什麼，#b#h0##k？ 你……不是#b#h0##k嗎？ 保護我們的英雄，#b#h0##k……那不就是你嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b（詳細說明醒來之後的情况。）#k");
	if (status == 4)
		qm.sendNextPrev("……原來如此。 原來你失去了記憶，並且在幾百年後的世界醒了過來。 這麼說來，這裡對你而言應該是過去的世界……");
	if (status == 5)
		qm.sendNextPrev("看來我得重新向你介紹了我的名字是#p2131000#。#b是你的的朋友#p2131000##k。 幾個月前，你在和黑魔法師的戰鬥中犧牲，我們則逃了出來……");
	if (status == 6)
		qm.sendNextPrev("在你阻擋住黑魔法師的時候，我們乘坐飛艇逃到了金銀島。 但是受到了龍的攻擊，沒能到達南部的平原，而是迫降在了這裡。");
	if (status == 7)
		qm.sendNextPrev("但是我們不能就此放弃……我們於是在這裡定居下來。 一邊休養生息，一邊準備建造新的村莊。");
	if (status == 8)
		qm.sendNextPrev("為了開墾荒無人煙的金銀島，一起來的青年們全都到村外去了。 所以村裡只剩下受傷的人，以及婦女和孩子。");
	if (status == 9)
		qm.sendPrev("#b#h0##k，你為什麼要到這裡來呢？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainExp(20000);
		qm.dispose();
}
}