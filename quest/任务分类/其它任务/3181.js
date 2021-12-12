/*
	名字:	莫特的信
	地圖:	第二座塔
	描述:	211060400
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
		qm.sendAcceptDecline("要是……有誰聽到了我的話……請過來跟我說會兒話……只要一小會兒就行！");
	if (status == 1)
		qm.sendNextPrev("你聽到我的話了？ 呼……太好了……我還在想，要是沒人聽見我的話的話，我該怎麼辦……");
	if (status == 2)
		qm.sendNextPrev("我的名字叫#b#p2161004##k……為了尋找傳說中的#b獅子王的勳章#k，我來到了這個地方……我在城堡的各處尋找勳章的時候……城堡突然開始搖晃，接著怪物就出現了……就在我慌慌張張地避開怪物逃走的時候……突然有個年輕人出現在了我的面前……");
	if (status == 3)
		qm.sendNextPrev("那個年輕人說自己是#b獅子王班·雷昂#k，是這個城的主人……他說我未經允許就進入了城堡，然後把我變成了無法從這裡離開的幽靈……可能是因為詛咒的緣故，雖然變成了幽靈，但感覺身體裏有寒氣在到處亂竄，身體像刀割一樣地疼， 從來都不會停歇……現在我光是這樣說話，就已經非常痛苦了……");
	if (status == 4)
		qm.sendNextPrev("雖然我變成了這副模樣……但是我想把這封信送給在遠方等待著我的家人……你能幫我把這封信交給冰峰雪域的#b阿爾卡斯特#k嗎？ 阿爾卡斯特會幫我把信轉交給我的家人的……");
	if (status == 5)
		qm.sendPrev("為了方便自己回去，我留了一個珍貴的魔法卷軸。 我會用它把你送到#b冰峰雪域#k，幫我把#v4032859:#信交紿阿爾卡斯特！");
	if (status == 6){
		qm.forceStartQuest();
		qm.gainItem(4032859, 1);
		qm.warp(211000000, 0);
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
	if (status == 0) {
	if (qm.haveItem(4032859)) {
		qm.sendNext("嗯……給我的#v4032859:#信？ 是誰給你的啊？");
	} else {
		qm.sendOk("#v4032859:#信到底在哪裡啊……別跟我開玩笑……");
		qm.dispose();
		}
		}
	if (status == 1)
		qm.sendNextPrev("呵呵……那個傢伙……無視我的警告，最後變成了這個樣子……嘖嘖……");
	if (status == 2)
		qm.sendNextPrev("幾天前，#p2161004#來到了這裡，說要到獅子王之城去尋找獅子王的勳章。 不久前我在獅子王之城裡感覺到了奇怪的氣息，所以就勸他不要去，但是他卻趁著夜深人靜的時候溜了出去。");
	if (status == 3)
		qm.sendNextPrev("為了找到他，我們派出了救援隊。 但是城裡突然出現了怪物，我們沒能找到他，結果變成了這個樣子……");
	if (status == 4)
		qm.sendPrev("這封信我會交給他的家人的……\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainExp(5000);
		qm.dispose();
}
}
