/*
	名字:	心愿之镜
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 8) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(21201) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21202) == 2) {
		qm.sendNext("曾經是誰說要讓我成為擊退黑魔法師的傳世武器的？ 結果中了詛咒，自顧自地沉睡了幾百年，把我丟在一邊不管不顧。…… 什麼？ 想不起來了？ 一句想不起來了就想了事？ 當初苦苦求我，拜託我的時候怎麼說的來著……...");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("說要向#p1203000#證明自己的實力，請他給我一個機會。");
	if (status == 2)
		qm.sendNextPrev("沒錯！ 當初為了得到我，你低三下四地苦苦哀求。 要知道像我這樣優秀的武器，你上哪裡去找啊？ 能够和黑魔法師相抗衡的最强的#p1201001#就是我了！ 結果你卻把我扔在冰窟裏，一放就是幾百年……...");
	if (status == 3)
		qm.sendNextPrevS("#b倒也沒有苦苦哀求。 ");
	if (status == 4)
		qm.sendNextPrev("什麼？ 沒有苦苦哀求？ 是誰哭著鬧著要得到我，甚至不惜雙膝下跪苦苦哀求？ 要不#p1203000#怎麼會答應……等等？ 戰神！ 你難道……難道已經想起來了?");
	if (status == 5)
		qm.sendNextPrevS("#b有一點點…….");
	if (status == 6)
		qm.sendNextPrev("……真不愧是戰神啊……嗚，嗚嗚！ 不，我一點都沒有感動！…… 雖然中了黑魔法師的詛咒，能力盡失，連拿起我的力氣都沒有了……即便如此，你居然還能想起我，真不愧是我的主人啊！");
	if (status == 7)
		qm.sendNextPrev("就算你失去記憶也還是我的主人。 那經過極端訓練的身體依然能够記得當初的技能，雖然在冰窟中沉睡了數百年，但這一點我還是很清楚的。 好吧，我幫你喚醒你的能力！");
	if (status == 8)
		qm.sendAcceptDecline("你的等级还没有以前那么高，没法帮你唤醒所有的能力。不过，先帮你唤醒一部分的能力，这样将来升级也会更快一些。快点恢复从前的能力吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142130#  #t1142130#");
	if (status == 9){
		if(!qm.canHold(1142130, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(2110);
		qm.gainItem(1142130,1);
		qm.dispose();
}
}