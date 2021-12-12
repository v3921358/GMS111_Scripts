/*
	名字:	抓住影子武士
	地圖:	武陵道场近道
	描述:	925040000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("沒想到在數百年的歲月之後，英雄的後裔又重新出現了……也不知道對冒險島世界是福還是禍……怎樣都無所謂了。 好吧……我告訴你有關武陵封印石的事情。");
	if (status == 1)
		qm.sendNextPrev("武陵的封印石所在的地方叫做封印的寺院。 那裡的入口被隱藏在武陵寺院內。 你去仔細觀察武陵寺院入口處猫熊提著的燈盞。 如果能從中找出#b刻有入口字樣的燈盞#k，就可以進入封印的寺院了。 暗號是#b道可道非常道#k");
	if (status == 2)
		qm.sendNextPrev("說不定那個叫影子武士的人已經到了封印的寺院。 不過，他應該還沒有把東西偷走。 不知道是不是在等我……不過，相比我而言，英雄的後裔去會會影子武士可能更合適呢。");
	if (status == 3)
		qm.sendAcceptDecline("希望你能竭盡全力封锁影子武士。 英雄的後裔啊……繼承英雄過去的光輝事業吧。");
	if (status == 4)
		qm.sendPrevS("#b（他似乎誤以為我是英雄的後裔了。他說讓我繼承英雄過去的光輝事業……是什麼意思呢？先封锁影子武士，然後再問他好了。）#k",3);
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("成功打敗了#o9300351#嗎？ 表情怎麼這麼凝重……難道說你失敗了……");
	if (status == 1)
		qm.sendNextPrevS("#b（描述了與#o9300351#戰鬥的經過）#k");
	if (status == 2)
		qm.sendNextPrev("原來是這樣，#m250000000#的封印石最終還是被搶走了……很遺憾，不過也沒辦法。 我現在也不明白英雄們為什麼要把封印石交給#m250000000#。");
	if (status == 3)
		qm.sendNextPrevS("#b你說英雄把封印石交給了#m250000000#？");
	if (status == 4)
		qm.sendNextPrev("是的……你還不知道嗎？#b很久很久以前，英雄們把封印石交給了#m250000000#。 長老製作了#m925040100#並慎重看管起來#k。");
	if (status == 5)
		qm.sendNextPrevS("#b……英雄……");
	if (status == 6)
		qm.sendNextPrev("這些事情，現在很少有人知道了。 事實上，#b封印石沒有了，對#m250000000#而言到底有沒有影響，誰也不知道#k。 只不過因為是英雄交給我們保管的東西，所以我們才看得很重。");
	if (status == 7)
		qm.sendNextPrevS("#b（英雄把封印石交給了#m250000000#……）#k");
	if (status == 8)
		qm.sendNextPrev("把英雄交給我們的東西給弄丟了，雖說很可惜，但有英雄的後裔在，我們也覺得心裡踏實一些。 請繼續完成英雄未盡的事業。");
	if (status == 9)
		qm.sendPrevS("#b（#m250000000#封印石也被搶走了……得找#p1002104#問問。）#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16000 exp",3);
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainExp(16000);
		qm.dispose();
}
}