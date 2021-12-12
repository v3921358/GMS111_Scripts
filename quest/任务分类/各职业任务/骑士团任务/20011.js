/*
	名字:	告诉你狩猎的方法
	地圖:	新的启程3
	描述:	130030002
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("這其實並不難，你會得到特殊裝備作為獎勵！ 好吧，請認真想一想，如果你改變主意就告訴我。 ");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("有許多管道可以來打獵，但是最基本的管道就是#b“基礎攻擊”#k。 你只要一把武器，只要簡單的操作就可以殺死敵人。 ");
	if (status == 1)
		qm.sendNextPrev("按#bCtrl#k鍵即可普通攻擊，如果你不常用這個按鍵，可以在右下角的鍵盤設定處更換其它的按鍵。 ");
	if (status == 2)
		qm.sendAcceptDecline("現在，你已經嘗試過了，我們一定要測試它。 在這方面，你可以找到最薄弱#r#o100120##k在耶雷弗，這是您的最佳選擇。 嘗試狩獵#r1只#k.當你回來我給你的獎勵。 ");
	if (status == 3){
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
		qm.sendNext("很棒唷看你學得很快，將來一定是強大的王者！");
	if (status == 1)
		qm.sendPrev("這身裝備是貴族專屬的。 它將送給你穿，穿上它吧！ 然後按照箭頭的方向去找我的兄弟 #b#p1102006##k. 他會告訴你下一步該怎麼做。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1002869# 1 #t1002869#  \r\n#i1052177# 1 #t1052177#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 經驗值");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(1002869, 1);
		qm.gainItem(1052177, 1);
		qm.gainExp(35);
		qm.dispose();
}
}