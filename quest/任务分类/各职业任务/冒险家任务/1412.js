/*
	名字:	准骑士之路
	地圖:	战士圣殿
	描述:	102000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想選擇准騎士之路嗎？ 准騎士是擁有自製力，防備敵人，用强大的力量保護他人的人。 主要使用的武器是#b劍#k和#b鈍器#k。");
	if (status == 1)
		qm.sendNextPrev("作為戰士，准騎士的技能中有很多自我强化技能。 讓自己熟練使用武器的#b精准武器#k，造成强力傷害的#b終極劍鈍器#k，提高攻擊速度的#b快速武器#k，使身體變得強壯的#b物理訓練#k等等。");
	if (status == 2)
		qm.sendNextPrev("不僅如此。 對於准騎士而言，還有#b威脅#k技能，即可以在一定時間內震懾多數敵人。 也算是向敵人真實地展現冷酷的准騎士之特點吧？");
	if (status == 3)
		qm.sendNextPrev("當然還有更强大的攻擊技能。 你知道#b火焰衝擊和寒冰衝擊#k技能嗎？ 它是瞬間給武器賦予火内容或者冰内容，並以此給予敵人内容傷害的技能，若有了它，狩獵也會比之前輕鬆很多的。");
	if (status == 4)
		qm.sendNextPrev("利用#b元素衝擊#k重疊各種不同内容的衝擊技能時，亦可在一定時間內强化自身的力量。 這是非常有效的技能，你若成為准騎士的話，記得要試一試哦。");
	if (status == 5)
		qm.sendNextPrev("好了，說明就到這裡。 下麵是選擇時間。 你想選擇准騎士嗎？ 選擇的話，我就把你送到準備好的考場去。 在裡面蒐集#r#r30個含有黑暗力量的珠子#k#k，就可以成為真正的准騎士。");
	if (status == 6)
		qm.sendAcceptDecline("只要你接受任務，就可以馬上開始考試。 如果不願意的話，就現在拒絕。 拒絕之後，聽聽其他道路的說明也不錯。 怎麼樣……你想參加准騎士的考試嗎？");
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(910230000,0);
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
		qm.sendYesNo("#t4031013#全部蒐集到啦……我果然沒有看錯人。 我知道你一定可以做到。 你展現出了沉著和勇敢……好的，我來把你引上准騎士之路。 準備好了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(120);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的！ 從現在起你就是#b准騎士#k了！ 准騎士是對敵人冷靜，對隊友具有獻身精神，具有騎士道的戰士。 希望你能憑藉自己明亮的雙眼，走上正確的道路。");
		}
	if (status == 2)
		qm.sendOk("今後你會獲得比現在更强的力量，但是决不能把那種力量用在弱者身上。 必須把自己的力量用在正確的事情上，那是你的責任 。");
	if (status == 3){
		qm.dispose();
}
}