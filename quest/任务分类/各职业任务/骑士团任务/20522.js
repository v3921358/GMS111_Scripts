/*
	名字:	驯养提提阿纳
	地圖:	孵化场
	描述:	130010220
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
		qm.sendNext("騎士們的騎寵和普通的騎寵略有不同。 就是生長在島上的提提的一種——#b提提阿納#k。 騎士可以騎乘提提阿納，而不是普通怪物。 還有一點你必須知道。");
	if (status == 1)
		qm.sendPrev("騎寵並不只是坐騎，如果你覺得它只是移動手段就錯了。 騎寵是朋友、同伴、戰友……可以是這所有的一切。 偶爾它也可以救你的命。 所以聖地的騎士們都自己馴養騎寵。");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}