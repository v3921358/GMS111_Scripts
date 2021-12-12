/*
	名字:	冬青
	地圖:	地铁售票口
	描述:	103020000
*/

var status = -1;

var meso = new Array(500, 1200, 2000);
var item = new Array(4031036, 4031037, 4031038);
var selector;
var menu = "";

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
	cm.dispose();
	return;
	} else if (status == 1 && mode == 0) {
	cm.sendOk("一旦你買了票，你就可以進入這個工地。我聽說那裡到處都是奇怪的設備，但最後，珍貴的東西在等著你。如果你決定改變主意，請告訴我。");
	cm.dispose();
	return;
	}
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0) {
		if (cm.getPlayerStat("LVL") <= 19) {
			cm.sendNext("一旦你買了票，你就可以進入這個工地。然而，你似乎不能進入這裡。有些外國的設備可能會讓你無法處理，所以請訓練自己，做好準備，然後再回來。");
			cm.dispose();
		} else {
			for(var x=0; x < 3; x++) {
		if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") <= 29) {
			menu += "\r\n#L" + x + "##b工地B" + x + "門票#k#l";
			break;
		} else if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 39 && x < 2) {
			menu += "\r\n#L" + x + "##b工地B" + x + "門票#k#l";
		} else {
			menu += "\r\n#L" + x + "##b工地B" + x + "門票#k#l";
			}
			}
			cm.sendSimple("你必須買票入場。一旦你購買了，你可以通過右邊的檢票口進入。你想買什麼？" + menu);
			}
			}
	if (status == 1) {
			selector = selection;
			selection += 1;
			cm.sendYesNo("你想購買 #b工地B" + selection + "門票#k? 需要" + meso[selector] + "楓幣。在購買之前，請確認你的背包有一個空格。");
			}
	if (status == 2) {
		if (cm.getMeso() < meso[selector]) {
			cm.sendOk("請檢查你是否有足夠的楓幣，或者背包有一個空格。");
			cm.dispose();
		} else {
		if (selector == 0)
			cm.sendOk("你可以把票插入檢票口。祝你好運。");
		if (selector == 1) {
			cm.sendOk("你可以把票插入檢票口。祝你好運。");
		} else {
			cm.sendOk("你可以把票插入檢票口。祝你好運。");
			}
			cm.gainMeso(-meso[selector]);
			cm.gainItem(item[selector], 1);
			cm.dispose();
}
}
}