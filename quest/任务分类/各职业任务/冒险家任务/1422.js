/*
	名字:	刺客之路
	地圖:	废都爵士酒吧
	描述:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想選擇刺客之路嗎？ 呼……這可不是一條容易走的路。 刺客是主要使用飛鏢的飛俠，擅長遠距離快速攻擊敵人。 移動速度非常快，攻擊力很强，被稱為1:1的最强者。");
	if (status == 1)
		qm.sendNextPrev("為了熟練使用投擲武器，需要學習#b精准暗器#k和#b快速暗器#k。 通過#b强力投擲#k，看准敵人的弱點發動致命一擊，這也是刺客的特點之一。");
	if (status == 2)
		qm.sendNextPrev("有沒有新的攻擊技能？ 當然有。 有召喚强大的風之護符，擊退敵人的#b風之護符#k，還有飛出會爆炸的飛鏢，給目標及其周圍的敵人造成傷害的#b爆裂飛鏢#k技能。");
	if (status == 3)
		qm.sendNextPrev("好像說得太多了……你想成為刺客嗎？ 那樣的話，必須通過一個簡單的考試……不是什麼複雜的考試。只要進入準備好的考場，消滅怪物，蒐集#r30個黑暗之珠#k就行。");
	if (status == 4)
		qm.sendAcceptDecline("考試的時候如果藥水用光了，必須#b放弃任務重新開始#k。 所以一定要做好充分準備之後再進去。考試馬上開始。 接受的話，我就把你送到考試沼澤去。");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(910370000,0);
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
		qm.sendYesNo("#t4031013#全部拿來啦。 很能幹嘛？ 讓你成為刺客，好像不錯。 那麼……我馬上讓你變成刺客。 準備好了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(410);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的，從現在開始你就是#b刺客#k了。 刺客是躲藏在陰影之中，刹那間將暗器插入敵人心臟的人。 希望你能更加努力修煉。");
		}
	if (status == 2)
		qm.sendOk("刺客必須變得更強。 但是决不能把那種力量用在弱者身上。把自己的力量用在正確的事情上，比變强更加困難。");
	if (status == 3){
		qm.dispose();
}
}