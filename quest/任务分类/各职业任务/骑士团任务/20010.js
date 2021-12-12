/*
	名字:	欢迎来到圣地！
	地圖:	新的启程2
	描述:	130030001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("我一直在這裡，如果你改變注意，可以再次來找我。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("歡迎來到聖地！ 你是誰？ 噢，你是#b#h0##k！ 很高興見到你！ 我在這裡等你好久了，你將成為一個冒險島騎士，對嗎？ 我的名字是#p1102004#。");
	if (status == 1)
		qm.sendNextPrev("如果你想成為冒險島騎士團中的一員，你可以找下個地圖的的那位先生，他可以幫助你成為冒險島騎士團中的一員？");
	if (status == 2)
		qm.sendNextPrev("噢，我提醒你一下，這個是一項任務。 你可能偶爾可以注意到，NPC頭頂上偶爾會有燈泡，那稱之為#b任務（QUEST）#k。 完成任務你將可以得到很多豐富的獎勵。");
	if (status == 3)
		qm.sendAcceptDecline("你願意見見#b#p1102005##k嗎？ 你想知道怎麼打獵嗎？ 你可以找到#p1102005#來教你怎麼打獵。");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendOk("你是我哥哥派來的貴族嗎？很高興認識你！我是#b#p1102005##k。我會給你#p1102004#讓我給你的報酬。請記住，您可以按#b  i 鍵#k檢查您的庫存。紅色藥劑幫助你恢復氣血，藍色藥劑幫助你恢復MP。事先學會如何使用它們是一個好主意，這樣當你遇到危險時，你就可以隨時準備好。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000020# 5 #t2000020# \r\n#i2000021# 5 #t2000021#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(2000020, 5);
		qm.gainItem(2000021, 5);
		qm.gainExp(15);
		qm.dispose();
}
}