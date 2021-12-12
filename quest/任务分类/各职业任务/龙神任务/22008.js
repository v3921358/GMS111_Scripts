/*
	名字:	驱赶后院的狐狸
	地圖:	前院
	描述:	100030102
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("嗯？什麽？害怕 陰險的狐貍 ？沒想到我妹妹這麽膽小。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("妳不覺得奇怪嗎？最近的雞怎麽和以前不壹樣了？以前它們會下很多雞蛋 ，但現在越來越少了。是不是因為狐貍增多了呢？那樣的話，必須趕緊想辦法才行。妳說對不對？");
	if (status == 1)
		qm.sendPrev("好吧，讓我們去消滅狐貍吧。妳先去 #b後院#k 消滅#r10只 陰險的狐貍#k 。我會負責剩下的事情的。好了，妳快到 後院 去吧～");
	if (status == 2){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/10/0", 1);
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
		qm.sendNext("陰險的狐貍，消滅掉了嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b妳說要去收拾剩下的狐貍的，怎麽回事？");
	if (status == 2)
		qm.sendNextPrev("啊，那個嘛？我後來是去了，但走錯了路，怕被 #o9300385# 抓去做人質，所以就回來了。");
	if (status == 3)
		qm.sendNextPrevS("#b該不會是害怕狐貍而躲起來了吧？");
	if (status == 4)
		qm.sendNextPrev("妳在胡說什麽啊？！我為什麽會害怕狐貍？！我壹點都不害怕狐貍！");
	if (status == 5)
		qm.sendNextPrevS("#b……啊，有壹只 #o9300385# !");
	if (status == 6)
		qm.sendNextPrev("啊！快躲起來！");
	if (status == 7)
		qm.sendNextPrevS("#b...");
	if (status == 8)
		qm.sendNextPrev("......");
	if (status == 9)
		qm.sendNextPrev("……妳這家夥。別嚇哥哥我！哥哥我的心臟不好，不能受驚嚇！");
	if (status == 10)
		qm.sendNextPrevS("#b(所以叫哥哥才不願意去，叫我去。)");
	if (status == 11)
		qm.sendNextPrev("哼哼，不管怎樣，陰險的狐貍 消滅掉了。辛苦妳了。我把壹個路過的冒險家送我的東西送給妳，作為給妳的報酬。來，拿著。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# 1 #t1372043# \r\n#i2022621# 25 #t2022621# \r\n#i2022622# 25 #t2022622#s \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
	if (status == 12){
		qm.forceCompleteQuest();
		qm.forceCompleteQuest(22100); //自动转职 强制完成任务
		qm.gainItem(1372043, 1);
		qm.gainItem(2022621, 25);
		qm.gainItem(2022622, 25);
		qm.gainExp(910);
		qm.sendNext("是#b魔法師的攻擊武器短杖。#k 雖然妳也可能沒什麽用，但拿在手裏到處走，還是很帥的，哈哈哈。");
		}
	if (status == 13){
		qm.sendOk("狐貍的數量確實增加了，對吧？奇怪。狐貍的數量為什麽會增加呢？看來必須調查壹下。");
		qm.dispose();
}
}