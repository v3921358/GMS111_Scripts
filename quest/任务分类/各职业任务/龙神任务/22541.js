/*
	名字:	书的下落？1
	地圖:	魔法密林图书馆
	描述:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1 && mode == 0 || status == 2 && mode == 0 || status == 3 && mode == 0) {
		qm.dispose();
		return;
	}
	if (status == 4 ) {
		qm.sendOk("嗯嗯... 好像看起來不是很需要這本書啊. 那就沒有辦法了。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("是來借書的嗎? 也是。不會因為擁有強的力量就停止原地不動， 以更努力的心態更上ㄧ層才是最重要... 呵呵。好， 想要看什麼書呢?\r\n想要看#L0##b#t4161049#的下集。#l\n#k");
	if (status == 1)
		qm.sendSimple("啊... 指在#m240000000#發現的這本書啊。我來看看... (上)集明明不久前借給 #m100000000#的ㄧ個青年 (下)集則... 唉唷, 這本書被誰借走了。\r\n#L0##b#b什麼~ 已經有人借走了? 是誰借走了?#l\n#k");
	if (status == 2)
		qm.sendSimple("知道#b#m103000000##k 的 #b#p1052106##k少年嗎? 想要飛翔天邊的這少年借走的。借有斷時間了， 但是還沒有還... 呼.\r\n#L0##b啊, 到底何時會還呢？#l\n#k");
	if (status == 3)
		qm.sendSimple("這個嘛... 因為#m101000003#沒有租借期限... 啊， 對了。如果沒有關係， 請你去 #m103000000#從#p1052106#少年拿到#t4161050#後，閱讀完後還給我， 如何？\r\n#L0##b那, #m103000000#嗎? (太遠好麻煩.......)#l\n#k");
	if (status == 4)
		qm.sendAcceptDecline("嗯嗯, #m103000000#是個遠地方， 只要你沒有關係#b從這裡直接送到 #m103000000##k 如何?要去見#m103000000#的 #p1052106#取得書嗎？");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}