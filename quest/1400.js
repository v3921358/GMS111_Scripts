/*
	名字:	五种冒险的方法
	地圖:	冒险家修炼场入口
	描述:	1010000
*/

var status = -1;
var selctioned = 0;

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
		qm.sendNext("你的水準有著良好的提升。 你現在决定好你想要的職業了嗎？ 你可以成為一個擁有强大力量與HP的戰士、一個擁有許多法術的魔法師、一個用箭矢持續掃射的弓箭手、一個使用快速攻擊的飛俠，或者使用各種華麗連鎖技的海盜！");
	if (status == 1){
		var chat = "有五大冒險家職業，你想選擇哪個職業\r\n#b";
		chat += "\r\n#L0#我想成為戰士";
		chat += "\r\n#L1#我想成為魔法師";
		chat += "\r\n#L2#我想成為弓箭手";
		chat += "\r\n#L3#我想成為飛俠";
		chat += "\r\n#L4#我想成為海盜";
		qm.sendSimple(chat);
		}
	if (status == 2){
		if (selection == 0)
			qm.sendNext("你想成為一個戰士，嗯？你會變得更加厲害的！ 好吧，我會把我的推薦信寄給#b戰士職業教練#k。去成為偉大的戰士吧！");
		if (selection == 1)
			qm.sendNext("你想成為一個魔法師，嗯？你會變得更加厲害的！ 好吧，我會把我的推薦信寄給#b魔法師職業教練#k。去成為偉大的魔法師吧！");
		if (selection == 2)
			qm.sendNext("你想成為一個弓箭手，嗯？你會變得更加厲害的！ 好吧，我會把我的推薦信寄給#b弓箭手職業教練#k。去成為偉大的弓箭手吧！");
		if (selection == 3)
			qm.sendNext("你想成為一個飛俠，嗯？你會變得更加厲害的！ 好吧，我會把我的推薦信寄給#b飛俠職業教練#k。去成為偉大的飛俠吧！");
		if (selection == 4){
			qm.sendNext("你想成為一個海盜，嗯？你會變得更加厲害的！ 好吧，我會把我的推薦信寄給#b海盜職業教練#k。去成為偉大的海盜吧！");
		}
		selctioned = selection;
		}
	if (status == 3){
		if (selctioned == 0){
			qm.sendOk("等級到10級的時候，#b戰士職業教練#k會聯系你的。");
			qm.forceStartQuest(1406,"1");
			qm.forceCompleteQuest();
			}
		if (selctioned == 1){
			qm.sendOk("等級到8級的時候，#b魔法師職業教練#k會聯系你的。");
			qm.forceStartQuest(1406,"2");
			qm.forceCompleteQuest();
			}
		if (selctioned == 2){
			qm.sendOk("等級到10級的時候，#b弓箭手職業教練#k會聯系你的。");
			qm.forceStartQuest(1406,"3");
			qm.forceCompleteQuest();
			}
		if (selctioned == 3){
			qm.sendOk("等級到10級的時候，#b飛俠職業教練#k會聯系你的。");
			qm.forceStartQuest(1406,"4");
			qm.forceCompleteQuest();
			}
		if (selctioned == 4){
			qm.sendOk("等級到10級的時候，#b海盜職業教練#k會聯系你的。");
			qm.forceStartQuest(1406,"5");
			qm.forceCompleteQuest();
		}
		qm.dispose();
}
}