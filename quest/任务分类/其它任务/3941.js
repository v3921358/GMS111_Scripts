/*
	名字:	抢夺王妃的丝绸
	地圖:	流浪团之地
	描述:	260010600
*/

var status = -1;

var morph;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status >= 0 && mode == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
		morph = qm.getMorphState();
		if (morph == 2210005) {
		qm.sendSimple("這不是#p2101004#大人嗎？ 真是好久不見，這次好不容易拿到了王妃愛不釋手的絲綢喔！ 當然…品質也是一流！ 可是…您怎麼一直在流汗啊？\r\n#L0##b（偽裝聲音）沒什麼，只是太熱了點…");
		return;
		}
		qm.sendOk("陌生人，我不認識你，請你不要打攪我。");
		qm.dispose();
		}		
	if (status == 1)
		qm.sendSimple("阿裡安特哪有沒熱過啊？ 不就一直都這樣嘛~可是我還以為#p2101004#大人您都不會怕熱呢！ 不對…您的臉…變得愈來愈紅囉！ 真的沒關係嗎？\r\n#L0##b（偽裝聲音）沒…沒關係，不需要擔心…#l");
	if (status == 2)
		qm.sendSimple("真的沒關係嗎？ 我之前就覺得#p2101004#大人體質虛弱，是不是需要吃點什麼藥啊？ 剛好我有在冰封雪域那邊採買來的感冒藥，您要不要買些回去吃啊？ 我會算您便宜點的…\r\n#L0##b我說沒關係啦！#l");
	if (status == 3)
		qm.sendSimple("真的嗎？ 可是#p2101004#您的聲音，和平常不太一樣喔！ 是不是真的感冒啦？ 怎麼看都不像是平時的#p2101004#大人喔！ 平常你都要我把#t4010007#算便宜一點給您…真是奇怪…您真的是#p2101004#大人嗎？\r\n#L0##b我不是我是誰？#l");
	if (status == 4)
		qm.sendSimple("還真不像是平時的#p2101004#大人…據我所知，#p2101004#大人可不是這麼沉默寡言的人，難道發生什麼事情了嗎？ 噗！ 看你臉變得愈來愈紅，是不是生氣啦？ 真的很抱歉…我馬上去拿絲綢過來，請稍等一下~ \r\n#L0##b最好快一點 #l");
	if (status == 5)
		qm.sendPrev("來~在這裡，請您小心拿回去吧！ 這絲綢…可不是隨隨便便就能到手的東西喔！ 若稍有破損，恐怕王妃會把#p2101004#大人關進天牢了呢！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#v4031571# 1 #t4031571# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(4031571, 1);
		qm.gainExp(10000);
		qm.dispose();
}
}