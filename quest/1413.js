/*
	名字:	枪骑士之路
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
		qm.sendNext("你想選擇槍騎士之路嗎？ 槍騎士就如同名字一樣，是使用槍或矛等長柄武器的職業。 在戰士中攻擊範圍最遠，動作最華麗。");
	if (status == 1)
		qm.sendNextPrev("作為戰士，槍騎士的技能中有很多自我强化技能。 讓自己熟練使用武器的#b精准武器#k，造成强力傷害的#b終極槍矛#k，提高攻擊速度的#b快速武器#k，使身體變得強壯的#b物理訓練#k等等。");
	if (status == 2)
		qm.sendNextPrev("當然還有更强大的攻擊技能。 你知道#b貫穿刺透#k技能嗎？ 它是攻擊近距離敵人時會新增額外的暴擊幾率，而攻擊遠距離敵人時會新增總體傷害的强大技能。");
	if (status == 3)
		qm.sendNextPrev("但是槍騎士的技能中最後名的應該是#b神聖之火#k。 那是可以暫時提高包括自己在內的全體隊員的最大血量和最大魔量的技能，在角色等級較高的時候仍然很有用。");
	if (status == 4)
		qm.sendNextPrev("#b極限防禦#k也是不能不提到的技能。 因為它可以在一定時間內提高隊員的物理防禦力和魔法防禦力。 當然……對於那些覺得喝很多藥水也沒事的人來說，應該沒什麼關係？");
	if (status == 5)
		qm.sendNextPrev("說明就到此為止。 現在是選擇的時間了。 你想當槍騎士嗎？ 如果願意，我就把你送到我準備的考場去。 你只要在裡面找到#r30個蘊含黑暗力量的珠子#k，你就能成為真正的槍騎士。");
	if (status == 6)
		qm.sendAcceptDecline("只要你接受任務，就可以馬上開始考試。 如果不願意的話，就現在拒絕。 拒絕之後，聽聽其他道路的說明也不錯。 怎麼樣……你想參加槍騎士的考試嗎？");
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
		qm.sendYesNo("#t4031013#全部蒐集到啦。 在你身上可以看到成為槍騎士的貭素。 你一定可以把槍用得比劍更好。 好的，你想成為槍騎士嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(130);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的！ 從現在起你就是#b槍騎士#k了！ 用長柄武器不斷地騷擾敵人的執著的戰士——槍騎士。 希望你能相信自己的力量，繼續前進。");
		}
	if (status == 2)
		qm.sendOk("今後你會獲得比現在更强的力量，但是决不能把那種力量用在弱者身上。 必須把自己的力量用在正確的事情上，那是你的責任。");
	if (status == 3){
		qm.dispose();
}
}