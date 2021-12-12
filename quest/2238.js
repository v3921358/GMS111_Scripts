/*
	名字:	纸条的主人是？
	地圖:	寺院地下
	描述:	105100100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("打攪了，我在#b#m105020000##k發現了張#b#p1063014##k，你能告訴我紙條的主人是誰嗎？",3);
	if (status == 1)
		qm.sendPrev("無聊死了，不要打攪我睡覺，這種事情你還是找其他人問問吧。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
