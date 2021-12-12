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
	if (qm.getQuestStatus(23035) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23035) == 1) {
		qm.sendNext("你成功地破壞了#o9001032#！ 你沒有辜負我對你的期待……真的非常感謝。 這樣的話，我們村的能量不足現象就會有一定程度的緩解。 你這次真的為我們村立了大功！");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("我親眼確認了你的能力，現在輪到我向你展現我的能力了。 我會將新的技能傳授給你。 技能的熟練度不高的話，將會無法使用。 我本來想過一段時間再告訴你……不過現在的你已經擁有了充分的能力。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3511);
		qm.gainItem(1142244,1);
		qm.sendNext("現在你已經不再是從前的你了。 更多樣、更複雜、更强大的技能將會讓你變得完整。 會不會太難？ 請別擔心。 你應該完全有能力使用，因為你完成了那麼難的任務。");
		}
	if (status == 3)
		qm.sendOk("讓我們下次課程再見吧。\n\n在那之前，希望你能以反抗者的身份，繼續努力。");
	if (status == 4){
		qm.dispose();
}
}
