/*
	名字:	禁忌的牧师
	地圖:	雪域集市
	描述:	211000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("這次事件的原因好像是#b黑山老妖#k。 禁忌魔法的痕迹也很相似……");
	if (status == 1)
		qm.sendNextPrev("必須儘快消滅掉才行。 不知道僵屍什麼時候會再次襲擊村子……");
	if (status == 2)
		qm.sendNextPrev("黑山老妖不是那麼簡單就能對付的怪物。 必須破壞掉黑山老妖的魔力和生命的根源，才能把他除掉。 但是沒有任何人能找到那個根源，連我都無法找到。 根源沒有被破壞掉的話，就算打敗了黑山老妖，他也會重新復活。");
	if (status == 3)
		qm.sendAcceptDecline("並不是完全沒有辦法。 雖然無法封锁黑山老妖的復活，但是禁忌魔法是有辦法封锁的。 在死亡之林設定强力結界的話，就能防止禁忌魔法導致僵屍數量新增。 你想試試看嗎？");
	if (status == 4)
		qm.sendPrev("為了設定結界，需要#b結界圖騰#k。 雖然我可以用魔法製造結界圖騰，但是需要黑山老妖擁有的#b紅色契約珠#k和#b墮落者的聖經#k各1個。 請你去幫我蒐集。");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}