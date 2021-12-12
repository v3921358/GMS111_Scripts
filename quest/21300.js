/*
	名字:	武器讨厌主人
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("你知道嗎？ 60級以後若為了以後的轉職，繼續升級努力累積 SP但是它並無法使用在 3轉技能。嗯，雖然不是說 #p1201001#一定要幫你轉職 ... 我只是說這樣而已。給你做參考。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("修煉得如何？ 嗯……60級了……雖然還不够，不過比起當初把你剛從冰川裏挖出來的那個狀態要强百倍了。 像這樣下去，很快你就能恢復從前的實力了。");
	if (status == 1)
		qm.sendAcceptDecline("在這之前，請回來#m140000000#一趟。#b你的戰斧又出現了奇怪的反應。 似乎有什麼事情要跟你說的樣子。#k說不定能進一步喚醒你的能力呢，趕緊回來看一眼吧。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}