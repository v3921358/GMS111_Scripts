/*
	名字:	魂骑士之路
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("#b我等待著你的决定。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(20101) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20101) == 1) {
		qm.sendAcceptDecline("你已經做好選擇了嗎？ 選擇之後是不能反悔的，所以務必慎重。 你真的要#b選擇魂騎士之路#k嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142066#   #t1142066#\r\n#i1302077#   #t1302077#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(1100);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142066,1);
		qm.gainItem(1302077,1);
		qm.getPlayer().gainSP(5, 0);
		qm.sendNext("我已將你的身體改造成適合魂騎士的身體。 之後如果你想變得更強，可以在内容窗（S鍵）中提升相應的内容，如果覺得太難，可以使用#bAuto#k。");
		}
	if (status == 2)
		qm.sendNext("另外，我給你分配了一些#bSP#k，你可以打開#bSkill選單#k學習技能。 當然，一開始並不是所有技能都可以學習，有些技能必須先學習其它技能後才可以學習。");
	if (status == 3)
		qm.sendNextPrev("你要記住，和初心者的時候不同，成為魂騎士之後如果死亡，會損失之前積累的部分經驗值。");
	if (status == 4)
		qm.sendPrev("好了……作為冒險騎士團的騎士，請為自己的榮譽及保護我們的楓葉世界而努力吧。");
	if (status == 5){
		qm.dispose();
}
}