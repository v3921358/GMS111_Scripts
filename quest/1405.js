/*
	名字:	想成为海盗的话
	地圖:	航海室
	描述:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 5)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("嗯，麥加說的果然沒錯，你看上去很有天賦。 見到你很高興。 我叫凱琳，是海盜船諾特勒斯號的船長，同時也是海盜們的轉職官。 聽說你對海盜感興趣，是嗎？");
	if (status == 1)
		qm.sendNextPrev("我們得先談點個人的事情。 為了對抗威脅冒險島世界的人——黑魔法師，我在不久前組建了海盜團。 諾特勒斯號的海盜們現在正在冒險島世界各地調查黑魔法師的痕迹。");
	if (status == 2)
		qm.sendNextPrev("如果你成為海盜的話，就必須幫助調查黑魔法師。 當然，這不是義務，而是建議。 雖然我是海盜們的轉職官，但不是海盜們的主人。 所以不是命令，只是建議。");
	if (status == 3)
		qm.sendNextPrev("如果你是在冒險島世界冒險的人，相信你一定願意為冒險島世界做這些事情。 不是出於獎勵，而是出於善意……呵呵。 好像扯得太長了。 你先記住這些，真正重要的在後面。");
	if (status == 4)
		qm.sendNextPrev("海盜大致分為使用短槍的人和使用體術的人，各自的技能存在很大的差別。 如果說有什麼共同點的話，那就是都有華麗的連續技。 雖然操作很難，但熟悉了的話，就會變得很强。");
	if (status == 5)
		qm.sendAcceptDecline("我好像說得太多了……你快决定吧。 到底是成為海盜，還是選擇其他職業？ 如果想成為海盜，我就使用轉職官的特權，馬上邀請你到諾特勒斯號去。#r拒絕的話，我會建議你選擇其他職業。 請別擔心#k。");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(120000101);
		qm.dispose();
		}
	if (status == 7)
		qm.sendSimple("你想選擇海盜以外的其他道路嗎？ 這也不壞。 那你想選擇什麼職業呢？\r\n#b#L1#戰士#l \r\n#b#L2#魔法師#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飛俠#l");
	if (status == 8){
		if (selection == 1)
			qm.sendOk("你想選擇戰士嗎？ 雖然很遺憾，但我尊重你的選擇。 #b武術教練#k會聯系你的。 你可以留意#b左側的任務提示#k查看。");
		if (selection == 2)
			qm.sendOk("你想走魔法師之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b漢斯#k馬上會聯系你的。 你可以留意#b左側的任務提示#k查看。");
		if (selection == 3)
			qm.sendOk("你想走弓箭手之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b赫麗娜#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
		if (selection == 4){
			qm.sendOk("你想走飛俠之路嗎？ 雖然很遺憾，但我尊重你的選擇。#b達克魯#k會聯系你的。 你可以通過#b左側的任務提示#k查看。");
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
		qm.sendOk("你還沒做好心理准備嗎？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("很高興能在這裡見到你……幹嘛這麼吃驚？ 我看上去太年輕了嗎？ 其實我的年紀比看上去要大得多，你可別小看我。 好了，我馬上讓你轉職成海盜。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1482065:#   #t1482065# \r\n#i1492065:#   #t1492065#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2945,"1");
		qm.changeJob(500);
		qm.resetStats(4, 4, 4, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1482065,1);
		qm.gainItem(1492065,1);
		qm.sendNext("好了，現在你已經是海盜的一員了。 你已經有了很多海盜技能，你可以打開技能窗看一看。 我給了你一些SP，你可以用來提升技能。 隨著等級的升高，你可以使用更多的技能。 努力修煉吧。");
		}
	if (status == 2)
		qm.sendNext("光是技能還不行。 請你打開内容窗，按照海盜的需要對自己的内容進行分配。 想成為拳手的話，就以力量為中心，想成為火槍手的話，就以敏捷為中心。 不知道的話，使用#b自動分配#k會比較方便。");
	if (status == 3)
		qm.sendNextPrev("還有一個禮物就是，我給你新增了裝備、消費、設定、其他道具保管箱的數量。 若有價值的物品就放到背包裏好了。");
	if (status == 4)
		qm.sendNextPrev("還有一件事必須記住。 你已經從新手成為了海盜，戰鬥時一定要注意體力。 死了的話，之前積累的經驗值會受到損失。 要是辛苦積累到的經驗值受到損失，豈不是很冤枉？");
	if (status == 5)
		qm.sendPrev("好了！ 我能教你的就只有這些。 我給了你幾件適合你使用的武器，希望你一邊旅行，一邊鍛煉自己。 如果遇到了黑魔法師的部下，一定要消滅掉他們！ 明白了嗎？");
	if (status == 6){
		qm.dispose();
}
}