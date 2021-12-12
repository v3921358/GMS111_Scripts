/*
	名字:	兴儿
	地圖:	迎月花山丘
	描述:	910010000
*/

function start() {
	var chat = "我想吃#v4001101##b#t4001101##k \r\n#b";
	chat += "\r\n#L0#給你10個年糕";
	chat += "\r\n#L1#月妙年糕規則";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
	if (!cm.isLeader()) {
		cm.sendOk("很抱歉，我不能收下你的年糕，我只接受組長送來的年糕。");
	} else {
		if (cm.haveItem(4001101,10)) {
			cm.achievement(100);
			cm.gainItem(4001101, -10);
			cm.givePartyExp_PQ(70, 1.5);
			cm.givePartyNX(250);
			cm.addPartyTrait("will", 5);
			cm.addPartyTrait("sense", 1);
			cm.endPartyQuest(1200);
			cm.warpParty(910010300);
		} else {
			cm.sendOk("需要10個#v4001101:##b#t4001101##k");
			}
			}
			break;
	case 1:
		cm.sendOk("這是迎月花山，當6個種子都被種植，天空會出現滿月，這時候會召喚月妙兔，當月妙兔開始敲年糕時，怪物將會不斷的出現來騷擾月妙兔，你必須保護它不受傷害并且拾取年糕。途中如果“月妙兔”死了，你將無法完成任務，我將感到饑餓....");
		}
	cm.dispose();
}
