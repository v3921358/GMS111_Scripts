/*
	名字:	救救孩子们2
	地圖:	末日森林
	描述:	914000300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("#b不！ 狂狼勇士拒絕了！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("...差點被嚇死...快！快點帶我去找#b#p1209000##k大人！");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4001271,1);
		qm.warp(914000300);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("孩子呢？ 倘若您救了那些孩子，就快點讓他們上來吧！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("#b#h0##k平安無事歸來了！孩子呢？您把那些孩子帶回來了嗎?");
	if (status == 1)
		qm.sendNext("真是太好了... 真是太好了.....");
	if (status == 2)
		qm.sendNextPrev("對，對了！現在不是談這些事情的時機。黑魔法師的氣息已經慢慢地靠近了！好像已經察覺方舟的位置了！不趕快出發的話，就會被逮個正著！");
	if (status == 3)
		qm.sendNextPrevS("#b我不會走的，你們立刻出發！");
	if (status == 4)
		qm.sendNextPrev("#b#h0##k！你也坐上方舟吧！我雖然了解您想火拚到最後一刻的心情...可是已經太遲了！打仗這個任務就交給您的同伴，跟我們一起前往#b#m104000000##k吧！");
	if (status == 5)
		qm.sendNextPrevS("#b絕對不行！");
	if (status == 6)
		qm.sendPrevS("#b赫麗娜，你們先去#b#m104000000##k吧！我絕對不會死心的，我們後會有期。我要和同伴們一起去對付黑魔法師！",3);
	if (status == 7){
		qm.forceCompleteQuest();
		qm.gainItem(4001271,-1);
		qm.warp(914090010);
		qm.dispose();
}
}