/*
	名字:	比克·爱德华
	地圖:	射手村美发店
	描述:	100000104
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
		var chat = "歡迎光臨，請問有什麼要幫助你的？只需持有 #v5150052:##v5151036:#  就可以享受我們的專業服務！那麼，讓我給你換個樣样怎麼樣？\r\n#b";
		chat += "\r\n#L0##v5150052:##t5150052#";
		chat += "\r\n#L1##v5151036:##t5151036#";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

		if (cm.getPlayerStat("GENDER") == 0) {
			hair_Colo_new = [32150, 32160, 32310, 32320, 32330, 32340, 32350, 32360, 32370, 32380, 32390, 32400, 32410, 32420, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090];
		} else {
			hair_Colo_new = [32150, 32160, 32310, 32320, 32330, 32340, 32350, 32360, 32370, 32380, 32390, 32400, 32410, 32420, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090];
			}
			for (var i = 0; i < hair_Colo_new.length; i++) {
			hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
			}
			cm.askAvatar("優質的服務能讓你有新的改變可以讓你得到夢想的一切！！.", hair_Colo_new);
			}
		if (selection == 1) {
			var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
			hair_Colo_new = [];

			beauty = 2;
			for (var i = 0; i < 8; i++) {
			hair_Colo_new[i] = currenthaircolo + i;
			}
			cm.askAvatar("優質的服務能讓你有新的改變可以讓你得到夢想的一切！", hair_Colo_new);
			}
			}
	if (status == 2){
		if (beauty == 1){
		if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
			cm.sendOk("甜心，享受你新的開始吧！");
		} else {
			cm.sendOk("...看起來你沒有這個地方的優惠券。很抱歉這麼說，但是沒有優惠券，你就沒有整形手術了。。");
			}
		} else {
		if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
			cm.sendOk("甜心，享受你新的開始吧！");
		} else {
			cm.sendOk("...看起來你沒有這個地方的優惠券。很抱歉這麼說，但是沒有優惠券，你就沒有整形手術了。。");
			}
			}
			cm.dispose();
}
}