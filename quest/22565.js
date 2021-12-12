  /*
	名字:	不能放弃
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("我的同族都消失了嗎，主人？ 一個都沒剩下嗎？ 就只有我一個？ 幾百年前，那個邪惡的人為什麼要殺死我的同族呢？ 為什麼只有我留下來了呢？ 我什麼都不知道……。");
	if (status == 1)
		qm.sendNextPrevS("#b#p1013000#……");
	if (status == 2)
		qm.sendAcceptDecline("不過，我絕不會放弃。 我可是堅強不屈的龍。 說不定有些我的同族也像我一樣活在某處。 我一定要找到我的同族。 你會幫我的吧？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 20966 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(20966);
		qm.dispose();
}
}