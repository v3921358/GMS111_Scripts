/*
	名字:	金銀島
	地圖:	金銀島中巴
	描述:	104000000
*/

var status = -1;

var maps = Array(104000000, 100000000, 102000000, 101000000, 103000000, 120000000);
var rCost = Array(1200, 1000, 1000, 800, 1000, 1000);
var costBeginner = Array(120, 100, 100, 80, 100, 100);
var cost = new Array("1,200", "1,000", "1,000", "800", "1,000", "1,000");
var show;
var sCost;
var selectedMap = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1 && mode == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("金銀島中巴竭誠為您服務，想要往其他村莊安全又快速的移動嗎? 如果是這樣 為了優先考量滿足顧客, 請使用 #b#p1012000##k 親切的送你到想要到達的地方！");
	if (status == 1){
		if (!cm.haveItem(4032313)) {
			var job = cm.getJob();
		if (job == 0 || job == 1000 || job == 2000) {
			var selStr = "我們有特殊90%折扣，對於新手選擇你的目的地#b";
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 楓幣)#l";
			}
		} else {
			var selStr = "請選擇目的地.#b";
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 楓幣)#l";
			}
			}
			cm.sendSimple(selStr);
		} else {
			cm.sendYesNo("嘿!您看起來有一張優惠票我可以免費帶你帶你去#b弓箭手村#k。");
			}
			}
	if (status == 2){
		if (!cm.haveItem(4032313)) {
			var job = cm.getJob();
		if (job == 0 || job == 1000 || job == 2000) {
			sCost = costBeginner[selection];
			show = costBeginner[selection];
		} else {
			sCost = rCost[selection];
			show = cost[selection];
			}
			cm.sendYesNo("你在這裡沒有任何事情做，是吧? #b#m" + maps[selection] + "##k 那將花費你的 #b" + show + " 楓幣#k.");
			selectedMap = selection;
		} else {
			cm.gainItem(4032313, -1);
			cm.warp(100000000, 6);
			cm.dispose();
			}
			}
	if (status == 3){
		if (cm.getMeso() < sCost) {
			cm.sendOk("很抱歉由於你沒有足夠的楓幣 所以你將無法乘坐出租車!");
		} else {
			cm.gainMeso(-sCost);
			cm.warp(maps[selectedMap]);
			}
		cm.dispose();
}
}