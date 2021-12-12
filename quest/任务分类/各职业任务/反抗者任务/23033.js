/*
	名字:	破坏能力装置
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23033) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23033) == 1) {
		qm.sendNext("你把#o9001032#破壞掉啦！ 幹得好！ 這樣的話，我們村的能量不足現象就能緩解一些了！ 心裡感覺終於暢快了！ 了不起！ 你為我們村立了大功！");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("看到你有了這麼强的能力，就沒有必要再猶豫了。 本來我覺得太危險，想過一段時間再傳授給你……我要把更强的喚靈鬥師技能傳授給你！ 我想你一定可以掌握！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3211);
		qm.gainItem(1142244,1);
		qm.sendNext("現在你已經不是以前的你了。 近似瘋狂的、更危險的技能世界將會展現在你面前。 控制也會變得更難，但是……呵呵，你能完成那麼危險的任務，相信你一定可以掌握。 ");
		}
	if (status == 3)
		qm.sendOk("讓我們下次課程再見吧。\n\n在那之前，希望你能以反抗者的身份，繼續努力。 ");
	if (status == 4){
		qm.dispose();
}
}
