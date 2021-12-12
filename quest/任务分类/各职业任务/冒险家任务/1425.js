/*
	名字:	拳手之路
	地圖:	航海室
	描述:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想選擇拳手之路嗎？ 那是用拳頭或指節拳甲和敵人戰鬥的勇敢的海盜。 雖然動作華麗，但操作起來卻很不容易……你對自己有自信嗎？");
	if (status == 1)
		qm.sendNextPrev("最具代表性的技能是#b龍捲風拳#k。 用力向上猛擊，創造出真正的龍捲風。# b貫骨擊#k也是非常帥的技能，可以向前突進，攻擊敵人。");
	if (status == 2)
		qm.sendNextPrev("當然，基本技能也很重要。 學會#b精准拳甲#k和#b急速拳#k後，可以讓你的拳甲更快、更强。 通過#b血量新增#k，可以提高血量。 通過增强忍耐力的#b忍耐#k，可以持續恢復體力和魔量。");
	if (status == 3)
		qm.sendNextPrev("通過讓內心平靜提高自己的攻擊力和命中值的#b靜心#k，也是拳手不可或缺的覈心技能之一。");
	if (status == 4)
		qm.sendNextPrev("說明好像太長了嗎？ 好的，拳手的考試馬上開始。 你必須通過簡單的考試才行。 只要進入準備好的考場，消滅所有怪物，把#r它們掉落的物品#k交給我就行。 但是怪物們的防禦力很高，對付起來可能不太容易。 這些一定要記住。");
	if (status == 5)
		qm.sendAcceptDecline("考試的時候如果藥水用光了，必須#b放弃任務重新開始#k。 為了防止發生這種事情，一定要事先準備好充足的藥水。考試馬上開始。 接受的話，我馬上把你送到考試船艙去。");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(912040000,0);
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
		qm.sendYesNo("#t4031013#全部拿來啦。 成績不錯。 不，應該說是比較優秀。 你一定會成為一個好拳手。 我馬上讓你成為拳手\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(510);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("很好。 從現在起你已經是#b拳手#k了。 拳手可以赤手空拳地鎮壓敵人。 囙此，它要比任何人更要努力修煉才是。 若在修煉的過程中遇到困難的話，我也會幫你的。");
		}
	if (status == 2)
		qm.sendOk("拳手必須要變得更強。 但是那種强大卻不能用於弱者的身上。 拳手要把自己的力量用於正途。而這要比變得强大還要更加艱難。");
	if (status == 3){
		qm.dispose();
}
}