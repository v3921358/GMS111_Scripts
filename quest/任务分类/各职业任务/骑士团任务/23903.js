/*
	名字:	能够帮助埃德尔斯坦吗？
	地圖:	埃德尔斯坦
	描述:	310000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("#p1101000#騎士團的你，沒有人會無理由地相信你的。如果你滿足於現狀…那就沒關係。不過村裡的任何人都不會給你任務的，沒關係嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23903) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23903) == 1) {
		qm.sendNext("其實，我們也知道#p1101000#騎士團不是惡黨。但是至少這個村子是有理由憎惡#p1101000#騎士團的。理由嗎？…他們失了我們的約定…");
		}
		}
	if (status == 1)
		qm.sendNextPrev("看來你真的什麼也不知道。竟然對不知情的人發脾氣，真是對不起…就像你一樣雖然是#p1101000#騎士團，但和那件事沒有直接關係的人，村裡人應該可以接受的。");
	if (status == 2)
		qm.sendAcceptDecline("但是，即使是沒有關聯的人，因為職業是#p1101000#騎士團，村裡人對你的不信任感還是很大，所以你要做#b能夠平息它的行動#k。能做到嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3500 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(3500);
		qm.dispose();
}
}