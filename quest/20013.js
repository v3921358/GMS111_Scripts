/*
	名字:	这里有装着道具的箱子
	地圖:	新的启程5
	描述:	130030004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("如果需要就回來找我。~");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#b(*噹噹........噹.....*)#k");
	if (status == 1)
		qm.sendNextPrev("...嘿！你嚇到我了！我不知道我有一個訪客。你一定是剛才和#p1102006#聊天的人吧。歡迎! 我是 #p1102007#, 我的興趣是製作 #b椅子#k。我正在考慮讓一個作為歡迎你的禮物。");
	if (status == 2)
		qm.sendNextPrev("別急，我不能給你一個椅子，因為我沒有足夠的材料。你能找到我需要的材料？在這個區域附近，你會發現很多箱子裡面的物品。你能不能給我帶回 一個 #i4032267:##t4032267# 和一個  #i4032268:##t4032268# 。");
	if (status == 3)
		qm.sendNextPrev("你知道如何打破那個箱子? 使用你的 #b普通攻擊#k 來敲破箱子。");
	if (status == 4)
		qm.sendAcceptDecline("請給我 1個 #b#t4032267##k 和 1個 #b#t4032268##k 然後我就會做一個最棒的椅子給你， 我會在這裡等著你！!");
	if (status == 5){
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
		qm.sendNext("你已經完成了？\r\n太棒了！噢，这些东西就是我想要的 #b#t4032267##k 和  #b#t4032268##k。");
	if (status == 1)
		qm.sendPrev("來這是給你的 #t3010060#. 你怎麼看?? 漂亮吧呵呵^^ 你可以 #b把椅子放到快捷鍵上面並使用它讓HP恢復更快。#k. 椅子在 #b裝飾欄裡面#k 打開你的道具欄, 所以請確認是不是收到椅子了 #b#p1102008##k. 好了，請按照箭頭指示走你會看到另一個人。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 經驗值");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032267, -1);
		qm.gainItem(4032268, -1);
		qm.gainItem(3010060, 1);
		qm.gainExp(95);
		qm.dispose();
}
}