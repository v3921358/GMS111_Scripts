/*
	名字:	弩弓手之路
	地圖:	弓箭手培训中心
	描述:	100000201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 7) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想成為真正的射手（Crossbow Man）嗎？ 射手是在弓和弩當中使用#b弩#k的弓箭手，雖然它的攻擊速度較慢，但是卻能射出比任何人都要强力精准的致命一擊。");
	if (status == 1)
		qm.sendNextPrev("當然必須熟悉可以熟練使用弩的#b精准弩#k，可以快速使用弩的#b快速弩#k，以及#b終極弩#k。 為了用好弩，還不能忘了學習#b物理訓練#k。");
	if (status == 2)
		qm.sendNextPrev("你不妨感受一下發射可以穿透敵人的鋼鐵箭矢的#b穿透箭#k，就會明白遠程攻擊的最强者為何會是弓箭手了。");
	if (status == 3)
		qm.sendNextPrev("要想使用弩，當然必須帶著箭矢。 但是如果學習了#b無形箭#k，就算箭矢全部用光，也不用擔心。 因為可以借助靈魂的力量，不需要箭矢就能使用弩。");
	if (status == 4)
		qm.sendNextPrev("過去有人說弓箭手的走路速度太慢，機動性比較差，但是使用名叫#b二階跳#k的技能，可以彌補這個弱點。 在跳躍過程中再跳躍一次，可以移動很遠的距離。");
	if (status == 5)
		qm.sendNextPrev("解釋得太長了嗎？ 弓箭手的魅力在於只有親身體驗過的人才能够真正感受得到，如果你想要選擇真正的射手之路，就請告訴我，我會考驗一下你，看你是否具備成為射手的資格，雖然內容並不是很難，但也請你不要放鬆警惕。");
	if (status == 6)
		qm.sendNextPrev("考試很簡單。 只要進入事先準備的考場，消滅那裡的怪物，蒐集#r30個含有黑暗力量的珠子#k就行。那裡的怪物比普通怪物防禦力高，請一定要注意。");
	if (status == 7)
		qm.sendAcceptDecline("考試的過程中藥水不够的話，就只能#b放弃任務重新開始#k。 囙此需要做好充分的準備。 你想馬上開始考試嗎？ 接受的話，我就把你送到考試寺院去…..");
	if (status == 8){
		qm.forceStartQuest();
		qm.warp(910070000,0);
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
		qm.sendYesNo("#t4031013#全部集齊了。 我充分確認了你的能力。 我現在就指引你前往弓箭手的道路……你準備好了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(320);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的。 從現在起，你就是#b弩弓手#k了。 弩弓手是憑藉銳利的眼睛，將箭射入敵人胸膛的賢明之人……希望你繼續努力修煉。");
		}
	if (status == 2)
		qm.sendOk("弩弓手必須變得更強。 但是决不能把那種力量用在弱者身上。 把自己的力量用在正確的事情上……遠比變强更難。");
	if (status == 3){
		qm.dispose();
}
}