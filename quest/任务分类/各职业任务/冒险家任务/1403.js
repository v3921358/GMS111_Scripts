/*
	名字:	想成为弓手的话
	地圖:	弓箭手培训中心
	描述:	100000201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("你好，#h0#……我經常聽麥加提起你的名字。 聽說你對弓箭手很感興趣。 我是弓箭手轉職官赫麗娜。 見到你很高興……");
	if (status == 1)
		qm.sendNextPrev("你對弓箭手的瞭解有多少呢？ 弓箭手是使用弓或弩，在遠距離攻擊敵人的職業……雖然移動速度相對較慢，但銳利的箭矢從來不會射偏，每一發都非常具有威脅。");
	if (status == 2)
		qm.sendAcceptDecline("如果你真的想成為弓箭手，我就用轉職官的特權，邀請你到#b射手村的弓箭手培訓中心#k來。#r如果你想選擇其他職業，可以拒絕。 我會幫助你走上其他道路的#k……你想成為弓箭手嗎？");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(100000201);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("你想選擇其他職業啊……雖然不無遺憾，但這是你自己的選擇……那在弓箭手之外，你想選擇哪條道路呢？\r\n#b#L1#戰士#l \r\n#b#L2#魔法師#l \r\n#b#L4#飛俠#l \r\n#b#L5#海盜#l");
	if (status == 5){
		if (selection == 1)
			qm.sendOk("你想選擇戰士嗎？ 雖然很遺憾，但是沒辦法。 #b武術教練#k會聯系你的。 你可以留意#b左側的任務提示#k。");
		if (selection == 2)
			qm.sendOk("你想走魔法師之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b漢斯#k馬上會聯系你的。 你只要看一下#b左側的任務提示#k就行。");
		if (selection == 4)
			qm.sendOk("你想走飛俠之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b達克魯#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 5){
			qm.sendOk("你想走海盜之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b凱琳#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		}
		if (selection > 0 && selection < 6)
		qm.forceStartQuest(1406, selection);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("不用在猶豫了，相信這是你最好的選擇。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("歡迎來到弓箭手培訓中心。 能直接見到你，我感到很高興……好的，我來讓你變成弓箭手。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1452051:#   #t1452051# \r\n#i2060000:# 500  #t2060000#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2708,"1");
		qm.changeJob(300);
		qm.resetStats(4, 25, 4, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1452051, 1);
		qm.gainItem(2060000, 500);
		qm.sendNext("現在你已經是弓箭手了。 如果你想學習弓箭手的新技能，請打開技能窗。 我給了你一些#bSP#k，你可以用它來提升技能。");
		}
	if (status == 2)
		qm.sendNext("光是技能還不够。 内容也必須按照弓箭手的需要進行調整。 弓箭手的中心内容是敏捷，輔助内容是力量。 如果不知道内容該怎麼分配的話，請使用#b自動分配#k。");
	if (status == 3)
		qm.sendNextPrev("啊……對了……我給你準備了一份小禮物。 我新增了你的裝備和消耗道具保管箱數量。 多裝點好東西，以備不時之需吧。 ");
	if (status == 4)
		qm.sendNextPrev("還有，有一點必須注意。 成為弓箭手之後，在戰鬥中就必須更加注意。 死了的話，之前積累的經驗值就會受到損失。 這一點和新手時期不同……請不要忘記……");
	if (status == 5)
		qm.sendPrev("我能教你的就只有這些。 我送了你一件弓箭手的武器，請你一邊在各地打獵，一邊鍛煉自己。");
	if (status == 6){
		qm.dispose();
}
}