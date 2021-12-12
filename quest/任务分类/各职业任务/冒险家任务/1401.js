/*
	名字:	想成为战士的话
	地圖:	战士圣殿
	描述:	102000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("你就是麥加推薦的那個人啊。 聽說你想轉職成戰士……對嗎？ 我就是戰士轉職官武術教練。 我可以為想要以戰士身份冒險的人提供幫助。");
	if (status == 1)
		qm.sendNextPrev("你對戰士瞭解多少呢？ 戰士是以强大的力量和體力為基礎，揮舞近戰武器打倒敵人的職業。 在最接近敵人的地方戰鬥的無畏的人。 是不是很有魅力？");
	if (status == 2)
		qm.sendAcceptDecline("你好像充分擁有了資格。 像你這樣的人想成為戰士，我隨時表示歡迎。 你想成為戰士嗎？ 接受的話，我就使用轉職官的特權，邀請你到#b勇士部落的戰士聖殿#k去。#r但是就算拒絕，也不是沒有別的路可走。 拒絕的話，我可以引導你走其他職業的道路#k。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(102000003);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("你不想走戰士之路嗎？ 不願意的話，我就不能勉强。 那你就去選擇其他道路吧。 除了戰士之外，還有四條道路可供選擇。\r\n#b#L2#魔法師#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飛俠#l \r\n#b#L5#海盜#l");
	if (status == 5){
		if (selection == 2)
			qm.sendOk("你想走魔法師之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b漢斯#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 3)
			qm.sendOk("你想走弓箭手之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b赫麗娜#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
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
		qm.sendOk("哎呀……沒想到你這麼膽小。 難道你失去成為戰士的自信了嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("很高興能在這裡見到你……我來把你變成戰士吧。 做好心理准備了嗎？ 臨陣退縮的人，不配成為戰士。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1302077:#   #t1302077#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2849,"1");
		qm.changeJob(100);
		qm.resetStats(25, 4, 4, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1302077, 1);
		qm.sendNext("成為戰士的你已然變得更強。 並且你也有了作為戰士可使用的技能，那就趕緊拿出來試一試吧。");
		}
	if (status == 2)
		qm.sendNext("另外，你的能力值也得進行適當修改，以便更加適合戰士的特點。 顯然對於戰士而言，STR才是覈心内容，而DEX為補助内容。 若不清楚的話，不妨使用#b自動分配#k也好。");
	if (status == 3)
		qm.sendNextPrev("為了紀念你已成為戰士，我還將適當給你新增背包空間。 你可以收集更多的武器和防具，讓自己變得更加强大。");
	if (status == 4)
		qm.sendNextPrev("對了，有一點需要注意。 雖然新手的時候沒關係，但是成為戰士的瞬間開始，必須小心不要死掉……萬一死了的話，之前積累的經驗值可能會受到損失……");
	if (status == 5)
		qm.sendPrev("我能教你的只有這些……我送了你一把#b劍#k，現在你去鍛煉自己，讓自己變得更強吧。");
	if (status == 6){
		qm.dispose();
}
}

