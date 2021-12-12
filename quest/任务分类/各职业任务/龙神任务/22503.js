/*
	名字:	一口肉
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("妳怎麽能這樣餓死我呢？我只是個孩子。這是錯誤的！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("不，不，不，這不是我需要的。我需要更有營養的東西，主人！");
	if (status == 1)
		qm.sendNextPrevS("#bHm.…所以妳不是食草動物。妳可能是食肉動物。畢竟妳是壹條龍。豬肉怎麽樣？#k");
	if (status == 2)
		qm.sendAcceptDecline("豬肉是什麽？從來沒有聽說過，但如果它好吃，我接受！給我吃點好吃的。除了植物什麽都沒有！");
	if (status == 3)
		qm.sendPrevS("#b(試試給米爾壹些豬肉。妳必須在農場裏獵殺幾頭豬。十應該是充足的…)#k",3);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}