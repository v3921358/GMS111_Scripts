/*
	名字:	女皇的策士南哈特
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

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
	if (qm.getQuestStatus(21757) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21757) == 1) {
		qm.sendYesNo("你有什麼事嗎？ 除了想成為騎士的人之外，這裡禁止閒雜人等靠近。 嗯……那是什麼？ #v4032330:#你想把它交給女皇嗎？ 說不定會是危險物質。 來，請把它給我。 我要先看一下。");
		}
		}
	if (status == 1)
		qm.sendNextPrev("……嗯……上面的內容非常有趣。 竟然知道神獸的眼淚……啊，沒什麼。 我們會慎重研究的。");
	if (status == 2)
		qm.sendNextPrevS("#b黑色之翼也許正在打這裡的主意。");
	if (status == 3)
		qm.sendPrev("即使是那樣，也是#m130000000#的事情。 和你這樣的外人沒有任何關係。 你又怎麼保證自己不是黑色之翼呢？…… 謝謝你的情報，再見。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(4032330, -1);
		qm.gainExp(10000);
		qm.dispose();
}
}