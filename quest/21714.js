/*
	名字:	南部秘密森林的绿蘑菇
	地圖:	魔法密林
	描述:	101000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("不是來了解#o1110100#為什麼變奇怪的嗎?");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("從不久前開始，魔法森林南部的#o1110100#突然變得兇暴起來。 很多#o1110100#的性格變得很奇怪，變得非常陰沉。");
	if (status == 1)
		qm.sendNextPrev("聽說好像很多地方都出現了這種現象，所以我仔細打聽了一下，好像所有的異常現象都和某種人偶有關。 人偶……真的非常奇怪。");
	if (status == 2)
		qm.sendAcceptDecline("雖然不知道傳聞是不是真的，說不定這次#o1110100#的事情也和人偶有關。 雖然我不知道你為什麼想知道#o1110100#變得兇暴的原因，但如果你想知道的話，可以和我一起進行調查。 怎麼樣？ 你願意嗎？");
	if (status == 3)
		qm.sendPrev("不知道是不是真的像傳聞說的那樣，#o1110100#發生變化的原因是人偶……請你去打獵#r25個#o1110130##k，尋找#b#o1110130#的人偶#k。");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(910100002, 0)
		qm.dispose();
}
}
