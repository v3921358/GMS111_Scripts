/*
	名字:	机械师之路
	地圖:	反抗者本部
	描述:	310010000
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
	if (qm.getQuestStatus(23013) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23013) == 1) {
		qm.sendAcceptDecline("你决心成為機械師了嗎？ 現在還有重新選擇的機會。 只要停止對話，放弃任務，然後和其他人對話就行。 請你好好考慮一下。 你真的要選擇機械師嗎？ 你認為這個職業適合你的反抗者之路嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s30001068#  #q30001068# \r\n#i1142242#  #t1142242#\r\n#i1492014#  #t1492014#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3500);
		qm.teachSkill(30001068,1,1);
		qm.gainItem(1142242,1);
		qm.gainItem(1492014,1);
		qm.sendNext("從現在開始，你就是機械師了。 你身為可以操控機械的人，要利用所有知識和方法來對付眼前的敵人。 ");
		}
	if (status == 2)
		qm.sendOk("如果被黑色之翼發現我們的真實身份就糟了，所以從現在開始，你要叫我導師。 而你就是在放學後到我這接受課外輔導的學生。 在這特殊的輔導中，我會把你教成强大的機械師");
	if (status == 3){
		qm.dispose();
}
}