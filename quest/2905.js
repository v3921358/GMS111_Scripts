/*
	名字:	照看奶牛
	地圖:	餐厅
	描述:	120000103
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("我知道你其實一點都不忙！ 你是希望看到那些牛餓著肚子吧？ 真是冷淡的朋友..");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你現在很忙嗎？ 如果不忙，能不能幫我一個忙？ 牧場裡的牛到了該吃飯的時候了，但是我一直忙著準備料理，忘記了。\r\n");
	if (status == 1)
		qm.sendAcceptDecline("尤其是小乳牛，食欲非常好，馬上就會餓的。 若現在不給他們吃的，也許會變得非常狂暴呢。 \r\n怎麼樣？ 你願意去嘗試一下嗎？");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}