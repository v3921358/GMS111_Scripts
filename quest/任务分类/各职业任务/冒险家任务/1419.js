/*
	名字:	猎人之路
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
		qm.sendNext("你想成為真正的獵人嗎？ 獵人是使用弩和弓中的#b弓#k的職業，可以快速射箭，擊退敵人。");
	if (status == 1)
		qm.sendNextPrev("當然必須熟悉可以熟練使用弓的#b精准弓#k，可以快速使用弓的#b快速箭#k，以及#b終極弓#k。 為了用好弓，還不能忘了學習#b物理訓練#k。");
	if (status == 2)
		qm.sendNextPrev("你不妨感受一下發射裝備炸彈的箭矢來使敵人昏迷的#b爆炸箭#k，就會明白遠程攻擊的最强者為何會是弓箭手了");
	if (status == 3)
		qm.sendNextPrev("要想使用弓，當然必須帶著箭矢。 但是如果學習了#b無形箭#k，就算箭矢全部用光，也不用擔心。 因為可以借助靈魂的力量，不需要箭矢就能使用弓。");
	if (status == 4)
		qm.sendNextPrev("過去有人說弓箭手的走路速度太慢，機動性比較差，但是使用名叫#b二階跳#k的技能，可以彌補這個弱點。 在跳躍過程中再跳躍一次，可以移動很遠的距離。");
	if (status == 5)
		qm.sendNextPrev("..說明是不是太長了？ 弓箭手的魅力只有親自體驗過的人才能感受得到。 如果你真的想選擇獵人之路，請跟我說。我會對你進行考試，看看你有沒有成為獵人的資格。 雖然不是什麼困難的內容，但是也不能掉以輕心。");
	if (status == 6)
		qm.sendNextPrev("考試很簡單。 只要進入事先準備的考場，消滅那裡的怪物，蒐集#r30個含有黑暗力量的珠子#k就行。那裡的怪物比普通怪物防禦力高，請一定要注意。");
	if (status == 7)
		qm.sendAcceptDecline("考試的過程中藥水不够的話，就只能#b放弃任務重新開始#k。 囙此需要做好充分的準備。 你想馬上開始考試嗎？ 接受的話，我就把你送到考試寺院去……");
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
		qm.sendYesNo("#t4031013#全部蒐集到了啊。 我確認了你的能力。 從現在開始，我來把你引上獵人之路……準備好了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(310);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的。 從現在起，你就是#b獵人#k了。 獵人是憑藉銳利的眼睛，將箭射入敵人胸膛的賢明之人……希望你繼續努力修煉。");
		}
	if (status == 2)
		qm.sendOk("獵人必須變得更強。 但是决不能把那種力量用在弱者身上。 把自己的力量用在正確的事情上……遠比變强更難。");
	if (status == 3){
		qm.dispose();
}
}