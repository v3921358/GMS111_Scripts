/*
	名字:	火枪手之路
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
		qm.sendNext("你想選擇火槍手之路嗎？ 火槍手是用#b短槍#k攻擊遠處的敵人的遠距離職業。 使用手槍的各種技能比弓箭更華麗，但是難度也更高。 當然，也更好玩。");
	if (status == 1)
		qm.sendNextPrev("當然，最重要的是基本技能。#b精准手槍#k和#b速射#k是最最基本的技能。 可以讓槍變得更強、更快、更準確。");
	if (status == 2)
		qm.sendNextPrev("但是真正的樂趣來自於攻擊技能。 用肉眼幾乎看不到的速度向多個敵人快速發射3發子彈的#b快槍手#k、向一個敵人連續發射3發子彈的#b三連射殺#k、向後方緊急回避同時用槍射擊的#b激退射殺#k等技能，既很强，又很好玩。");
	if (status == 3)
		qm.sendNextPrev("通過可以一瞬間高高跳起的#b輕羽鞋#k跳躍後，持續按住技能鍵，可以緩慢降落。 在降落的時候也可以開槍射擊。 重要的是要根據情况使用相應的技能。");
	if (status == 4)
		qm.sendNextPrev("說明是不是太長了？ 下麵讓我們進行火槍手考試吧？ 考試非常簡單。 只要進入準備好的考場，消滅掉所有怪物，然後把#r它們掉落的物品#k交給我就行。 但是怪物們的防禦力很高，對付起來可能不太容易。 這些一定要記住。");
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
		qm.sendYesNo("#t4031013#全部拿來啦。 成績不錯。 不，應該說是比較優秀。 你一定會成為一個好火槍手。 我馬上讓你成為火槍手\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(520);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("很好。 從現在起你已經是#b火槍手#k了。 火槍手可以用槍給予敵人施加淩厲的攻擊……你若想變得更強，還需要不斷地努力修煉才是。 若在修煉的過程中遇到困難的話，我也會幫你的。");
		}
	if (status == 2)
		qm.sendOk("火槍手需要變得更強。 但是那種强大卻不能用於弱者的身上。 拳手要把自己的力量用於正途……而這要比變得强大還要更加艱難。");
	if (status == 3){
		qm.dispose();
}
}