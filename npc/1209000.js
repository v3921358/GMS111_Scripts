/*
	名字:	赫丽娜
	地圖:	避难准备中
	描述:	914000100
*/

var status = -1;

function action(mode, type, selection) {
	if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("您醒了，#b狂狼勇士#k 受傷的傷口還好嗎？，什麼？你說現在情況嗎？");
	if (status == 1)
		cm.sendNextPrev("逃難的準備幾乎都做好了。可以搭載的人全部都坐上了方舟了。逃生船飛行期間會由神獸守護，沒有什麼好擔心的。現在只要收拾好就會立刻前往維多利亞港。");
	if (status == 2)
		cm.sendPrev("狂狼勇士的同伴嗎...? 他們... 去找黑魔法師了。 在我們逃難的期間會阻止黑法師. 什麼? 連你也要去找黑魔法師？ 不行！ 你不是受了傷嗎？ 跟我們一起逃亡吧！");
	if (status == 3){
		cm.forceStartQuest(21002, "1");
		cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
		cm.dispose();
		}
	} else {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendSimple("情況很緊急。你想知道什麼？ \r #b#L0#黑魔法師？#l \r #b#L1#逃難準備？#l \r #b#L2#同伴們？#l");
	if (status == 1){
	switch (selection) {
		case 0:
			cm.sendOk("聽說黑魔法師就在不遠處。因為成為黑魔法師佈下的龍群阻擋，根本無法通過森林。所以我們打造了逃生船。現在只能飛往維多利亞島逃難...");
			break;
		case 1:
			cm.sendOk("逃難幾乎都做好了。可以搭載的人全部都上方舟了。現在只剩下幾個人搭乘後就可以出發前往維多利亞島。神獸答應在逃生船飛行的其間阻擋空中的攻擊...沒有人會留下來守護這裡...");
			break;
		case 2:
			cm.sendOk("你的同伴... 他們已經去找黑魔法師了。 他們說要帶我們去逃難的期間阻止黑魔法師...還說因為您受傷了，所以不帶您去。等孩子都救出來後，您也跟我們一起逃走吧！ 狂狼勇士！");
			break;
			}
		cm.dispose();
}
}
}