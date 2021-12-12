/*
	名字:	天上的岛——克里塞
	地圖:	天空之城公园
	描述:	200000200
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("你還沒做好準備嗎？ 如果你改變了主意，可以再來找我。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(31000) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31000) == 1) {
		qm.sendNext("怎麼現在才來？ 你不知道我等了多久。");
		}
		}
	if (status == 1)
		qm.sendNextPrev("在天空之城的上空，有一個名叫克裏塞的空中之島。 那裡生活著體型巨大，但是性格善良的巨人族。但是從不久前開始，克裏塞開始變得越來越遠，聯絡也中斷了。一定是發生了什麼事……要是可以的話，我真想馬上過去看看。 但是你也知道，我無法離開這裡。");
	if (status == 2)
		qm.sendAcceptDecline("你能幫我去確認一下克裏塞到底發生了什麼事情嗎？我把你送到克裏塞去。 回來之後，一定要告訴我發生了什麼事情。");
	if (status == 3)
		qm.sendPrev("我們現在就開始出發，這將會是一段很長的旅程。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.warp(200100001);
		qm.dispose();
}
}
