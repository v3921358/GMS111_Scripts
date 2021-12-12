/*
	名字:	邪摩斯找回的记忆
	地圖:	邪摩斯的房间
	描述:	211000002
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("上次你幫我找到的日記本幫了我的大忙。 現在我知道了一些和自己有關的事。 但是我的精神還是很不穩定。 現在精神雖然很正常，但不知道什麼時候又會失憶。 如果日記本上的內容，以及我隱約想起來的事情是對的的話，應該會有非常危險的事情發生。 我需要你的幫助。 快來找我，朋友。");
	if (status == 1)
		qm.sendAcceptDecline("朋……朋友？ 什麼時候和邪摩斯變成朋友了啊？ 我還不知道邪摩斯到底想幹什麼呢。 我能相信他嗎？ 不管怎樣，有時間的話，先去見見#b邪摩斯吧#k。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}