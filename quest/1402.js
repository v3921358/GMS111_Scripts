/*
	名字:	想成为法师的话
	地圖:	魔法密林图书馆
	描述:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("你好，#h0#哦，你就是麥加說的那個人啊。 你好？ 聽說你對魔法師之路感興趣。 那麼，我魔法師轉職官漢斯可以幫助你。");
	if (status == 1)
		qm.sendNextPrev("相信你應該已經對魔法師有所瞭解了。 那是以較高的智力為基礎，使用魔法的職業。 雖然遠距離和近距離戰鬥都很出色，但體力稍微有點弱……但是魔法師創造出了很多魔法來克服這一缺點，不要太擔心。");
	if (status == 2)
		qm.sendAcceptDecline("你看上去好像充分具備成為魔法師的貭素……你想成為魔法師嗎？ 接受的話，我就使用轉職官的特權，邀請你到#b魔法密林的魔法圖書館#k去。 和我見個面，然後幫你轉職。#r但是就算拒絕，也不是沒有別的路可走。 拒絕的話，我可以為你介紹魔法師以外的職業。#k。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(101000003);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("你不喜歡魔法師之路嗎？ 很遺憾。 但是我尊重你的選擇。 那你想走哪條道路呢？\r\n#b#L1#戰士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飛俠#l \r\n#b#L5#海盜#l");
	if (status == 5){
		if (selection == 1)
			qm.sendOk("你想選擇戰士嗎？ 雖然很遺憾，但我尊重你的選擇。 #b武術教練#k會聯系你的。 你可以留意#b左側的任務提示#k。");
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
		qm.sendOk("嗯？ 還想再考慮一下嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("你來啦。 很高興能在這裡見到你……你一定可以成為一名好魔法師。 我馬上就讓你成為魔法師。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1372043:#   #t1372043#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2790,"1");
		qm.changeJob(200);
		qm.resetStats(4, 4, 25, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1372043, 1);
		qm.sendNext("至此，你已經能够使用各種魔法技能了。 我給了你一些#bSP#k，那就不妨打開#bSkill#k來學習自己想擁有的技能吧。 最好學一些#b攻擊魔法#k哦。");
		}
	if (status == 2)
		qm.sendNext("僅靠技能還不够。 難道你不想把自己的内容也改造成符合魔法師的特性嗎？ 魔法師的覈心内容為INT，補助内容為LUK。 你若覺得更改内容很麻煩，不妨使用#b自動分配#k。");
	if (status == 3)
		qm.sendNextPrev("對了，我還要給你這個變成魔法師而有些忘乎所以的奔向狩獵場的人一句忠告。 變成魔法師之後一旦死亡時，就有可能完全喪失在這期間所累積的經驗值哦。 誰讓魔法師的體力相對較弱呢，所以千萬要小心啊。");
	if (status == 4)
		qm.sendPrev("我已經把能教你的全部都教給你了。 為了你的修煉，我還將送給你一個短杖，你可要好好使用哦。 那就祝你好運吧。");
	if (status == 5){
		qm.dispose();
}
}