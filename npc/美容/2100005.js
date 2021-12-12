/*
	名字:	夏特
	地圖:	阿里安特
	描述:	260000000
*/

var status = -1;

var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0){
		var chat = "嘿！我是沙蒂，我是瑪茲拉的學徒，請問有什麼要幫助你的？只需持有 #v5150053:##v5151035:#  就可以享受我們的專業服務！那麼，讓我給你換個樣样怎麼樣？\r\n#b";
		chat += "\r\n#L0##v5150053:##t5150053#";
		chat += "\r\n#L1##v5151035:##t5151035#";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

		if (cm.getPlayerStat("GENDER") == 0) {
			hair_Colo_new = [30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590];
		} else {
			hair_Colo_new = [31510, 31520, 31450, 31540, 31550, 31560, 31570, 31580, 31590];
			}
			for (var i = 0; i < hair_Colo_new.length; i++) {
			hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
			}
			cm.sendYesNo("如果你使用#v5150053:#，你的原貌可能會變成一個隨機的新形象，你還打算使用麼？");
			}
		if (selection == 1) {
			var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
			hair_Colo_new = [];
			beauty = 2;

			for (var i = 0; i < 8; i++) {
			hair_Colo_new[i] = currenthaircolo + i;
			}
			cm.sendYesNo("如果你使用#v5151035:#，你的原貌可能會變成一個隨機的新形象，你還打算使用麼？");
			}
			}
	if (status == 2){
		if (beauty == 1){
		if (cm.setRandomAvatar(5150053, hair_Colo_new) == 1) {
			cm.sendOk("享受你新的开始吧!");
		} else {
			cm.sendOk("嗯……看來你沒有我們指定的優惠券……恐怕沒有它我不能給你幫助。我很抱歉。");
			}
		} else {
			if (cm.setRandomAvatar(5151035, hair_Colo_new) == 1) {
			cm.sendOk("享受你新的开始吧!");
		} else {
			cm.sendOk("嗯……看來你沒有我們指定的優惠券……恐怕沒有它我不能給你幫助。我很抱歉。");
			}
			}
			cm.dispose();
}
}