/*
	名字:	秘密团体的第一个任务
	地圖:	通天塔&amp;lt;秘密房间&gt
	描述:	200080601
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
	if (qm.getQuestStatus(22567) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22567) == 1) {
		qm.sendNextS("#b（拿出#p2012034#，把蒐集到的成長促進劑放了進去。）",3);
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b（將#p2012034#推進孔內，使其變回了原來的狀態。）#k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 15484 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032468, -10);
		qm.gainExp(15484);
		qm.sendNextS("#b唉……因為是臨時成員，我還以為會很容易呢。 沒想到比我想像的難得多。 不過感覺像個秘密團體，還挺有意思的。 你說呢？",3);
		}
	if (status == 3)
		qm.sendNext("很有趣吧，主人。 但是這個團體到底要把成長促進劑用在什麼地方呢？",1013000);
	if (status == 4)
		qm.sendNextPrevS("#b這，這個麼。 這個藥是用在植物上的，不知道對動物有沒有用………");
	if (status == 5)
		qm.sendNextPrev("嗯？ 等等，主人，你說我是動物？",1013000);
	if (status == 6)
		qm.sendNextPrevS("#b人類不也是動物嗎？ 哈哈哈!");
	if (status == 7)
		qm.sendNextPrev("不過我還是很難接受……哼，好吧，這次就算了。",1013000);
	if (status == 8)
		qm.sendNextPrevS("#b他們也許是想用成長促進劑來促進農作物的生長吧？ 農場經常會在地裏施肥，提高糧食的產量。");
	if (status == 9)
		qm.sendNextPrev("哦，是嗎？ 糧食多了的話，就沒人挨餓了，那很好啊。 那是個做好事的團體嗎？",1013000);
	if (status == 10)
		qm.sendPrevS("#b嗯，好像是這樣的。",3);
	if (status == 11){
		qm.dispose();
}
}