/*
	名字:	蜕皮之后1
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("主人～你看，我又長大了。");
	if (status == 1)
		qm.sendNextPrevS("#b哇，你怎麼這麼大了……啊！ 聲音都變了。");
	if (status == 2)
		qm.sendNextPrev("呵呵～是嗎？ 怎麼樣？ 很帥吧？");
	if (status == 3)
		qm.sendNextPrevS("#b嗯！ 帥呆了！ 我之前也發現了，龍每次都會長很多。 是因為會蛻皮，所以才會這樣的嗎？");
	if (status == 4)
		qm.sendNextPrev("嗯，新的鱗片長出來之後，就必須把原來的鱗片全部脫掉。 人類的話……身體長大之後，就要做新衣服，就是這種感覺。");
	if (status == 5)
		qm.sendNextPrevS("#b好像因為是新長出來的鱗片，看上去非常閃亮。");
	if (status == 6)
		qm.sendNextPrev("嘿嘿，是嗎？");
	if (status == 7)
		qm.sendNextPrevS("#b（雖然個頭長大了，但可愛的語氣還是老樣子……）");
	if (status == 8)
		qm.sendNextPrev("但是主人，你看看這個。\r\n#i4032502#\r\n這是我脫下來的一片鱗片，只有它在閃閃發光。 其他鱗片全都因為失去了力量而碎裂了。 只有這個鱗片好像還保存著我的力量。 這個東西應該能用來做什麼吧？");
	if (status == 9)
		qm.sendNextPrevS("#b嗯？ 可以用來幹什麼呢？");
	if (status == 10)
		qm.sendNextPrev("雖然人類沒有角，沒有鱗片，沒有爪子，也不會噴火，但是人類可以製作有用的東西，不是嗎？ 用它做資料製作東西，你說好不好？ 這是我的鱗片，所以非常堅硬。 其中還含有我的力量，應該可以使主人的力量變得更強。");
	if (status == 11)
		qm.sendNextPrevS("#b哇，好像是的。 米樂你真了不起！ 你什麼時候變得這麼聰明的！");
	if (status == 12)
		qm.sendNextPrev("嘿嘿，我和你在一起這麼久，對人類已經很瞭解了。 這種事情是小意思。");
	if (status == 13)
		qm.sendNextPrev("來，主人，這是我的鱗片。 以你的力量，一定可以用它製作出很棒的東西。");
	if (status == 14)
		qm.sendPrev("#b（從#p1013000#那裡獲得了藍色雙角龍的鱗片。神奇的是，鱗片剛放到手裡，就馬上變成了#t1142156#。）\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142156# 1 #t1142156# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	if (status == 15){
		if(!qm.canHold(1142156, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142156,1);
		qm.gainExp(3000);
		qm.dispose();
}
}