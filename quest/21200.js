/*
	名字:	等待主人的武器
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("即使修煉在忙，你也一定得要回來。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("修煉練得怎麼樣了？哇，這麼一看你的等級提升了不少啊。馬要送到濟州島，低級送到維多利亞島。這話果然沒錯啊…對了，現在不是講這些的時候。真是不好意思，我只知道你很忙，但是你得回島一趟了。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 11) {
		qm.sendOkS("#b實在是想不起來，我又能有什麼辦法？",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嗡嗡嗡嗡嗡……");
	if (status == 1)
		qm.sendNextPrevS("#b（#p1201001#在發出嗡鳴聲。奇怪，那邊的少年是誰？）#k");
	if (status == 2)
		qm.sendNextPrevS("#b（以前沒見過他啊？怎麼看起來不太像人類.）#k");
	if (status == 3)
		qm.sendNextPrev("喂！ #b#h0##k！ 還聽不見我的聲音嗎？ 到底聽不聽得見？ 唉，煩死了！");
	if (status == 4)
		qm.sendNextPrevS("#b（咦？這是誰的聲音？怎麼聽起來像個凶巴巴的少年………）#k");
	if (status == 5)
		qm.sendNextPrev("唉……哪有這樣的主人啊？丟開武器在冰窟裡睡了幾百年，現在連話都聽不懂了……...");
	if (status == 6)
		qm.sendNextPrevS("#b你是誰啊?");
	if (status == 7)
		qm.sendNextPrev("啊，#b#h0##k？現在聽到我的聲音了？是我啊，不記得我了？我就是武器#b長矛 #p1201002##k啊?");
	if (status == 8)
		qm.sendNextPrevS("#b(.……#p1201002#？#p1201001#會說話?)#k");
	if (status == 9)
		qm.sendNextPrev("不至於吧？這麼吃驚？再怎麼失憶，總不能連我都忘了吧？太不夠意思了?");
	if (status == 10)
		qm.sendNextPrevS("#b不好意思，真的一點都想不起來...");
	if (status == 11)
		qm.sendAcceptDecline("說聲不好意思就能算了？！幾百年來就我一個人孤苦伶仃地，有多寂寞你知道嗎？不管怎樣，你快點給我想起來!");
	if (status == 12)
		qm.sendPrevS("#b(一口一個自己是#p1201001#、#p1201002#的，還越說越生氣了。再這麼說下去也不會有啥進展，還是先走到 #p1201000#跟前，好好商量商量.)#k",3);
	if (status == 13){
		qm.forceCompleteQuest();
		qm.warp(914090200);
		qm.dispose();
}
}