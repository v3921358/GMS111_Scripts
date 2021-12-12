/*
	名字:	怀疑的村子
	地圖:	埃德尔斯坦
	描述:	310000000
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
	if (qm.getQuestStatus(23905) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23905) == 1) {
		qm.sendNext("見過#p2152016#了吧。跟你說了吧？不會是愉快的會面…#p2152016#在<監視者>中還算是友好的性格。");
		}
		}
	if (status == 1)
		qm.sendNextPrev("看過你就知道了…我們村被他們黑色翅膀控制著。當然…不是居民們希望的控制。人們不喜歡他們。不，而是憎恨。因此，才會懷疑身為外地人的你。");
	if (status == 2)
		qm.sendPrev("現在確認你不是<他們>了，居民們也會放心的。還好解除了誤會。雖然有點晚了，還是打個招呼吧。歡迎來到#m310000000#。只要你遠離他們，#m310000000#的居民們永遠是你的朋友。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 7000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(7000);
		qm.dispose();
}
}