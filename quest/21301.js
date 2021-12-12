/*
	名字:	武器讨厌主人
	地圖:	里恩
	描述:	140000000
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
	if (qm.getQuestStatus(21301) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21301) == 1) {
		qm.sendNext("野烏鴉抓到了嗎？呵呵呵...果然是我的主人！很好，那麼將帶來的 紅珠玉交出來！我會重新放在本體上...咦...？為什麼不回答？該不會...忘記帶回來了吧?");
		}
		}
	if (status == 1)
		qm.sendNextPrev("什麼？你真的沒拿回#b#v4032312:##t4032312##k？為什麼？該不會是真的忘了吧？啊啊！怎麼會這樣...就算被黑魔法師詛咒，經過了這麼久冰雪封印都解除了，健忘症倒是還沒解除啊.....");
	if (status == 2)
		qm.sendNextPrev("不行。真的太不像話了。這個時候我更應該代替主人打起精神...呼呼...呼呼........");
	if (status == 3)
		qm.sendNextPrev("再去看看，反正小偷已經逃走了。那麼就重新製作 紅珠玉吧！之前曾經做過一次，你知道材料吧？好吧！那麼快去蒐集材料吧.....");
	if (status == 4)
		qm.sendNextPrev("     #i4001173#");
	if (status == 5)
		qm.sendNextPrev("........沒有夢也沒有希望。啊啊啊！");
	if (status == 6)
		qm.sendPrevS("#b(瑪哈開始大發雷霆。先逃離這裡再說。莉琳可能可以幫我.)#k",3);
	if (status == 7){
		qm.forceCompleteQuest();
		qm.dispose();
}
}