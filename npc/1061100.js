/*
	名字:	宾馆服务员
	地圖:	林中之城旅馆大厅
	描述:	105000010
*/

var status = -1;

var regcost = 499;
var vipcost = 999;
var tempvar;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	}
	if (mode == 0 && status == 1) {
	cm.sendOk("我們也提供其他服務，決定好之前請仔細想想。");
	cm.dispose();
	return;
	}
	if (status == 0) {
		cm.sendSimple("歡迎來到奇幻村旅館。我們致力為您提供最好的服務。如果您累了，來這裡休息一下如何？我們提供兩種房間，請選擇你想要的。\r\n#b#L0#一般桑拿室 (每次 " + regcost + " 楓幣)#l\r\n#L1#高級桑拿室 (每次" + vipcost + " 楓幣)#l");
		}
	if (status == 1) {
		tempvar = selection;
		if (tempvar == 0) {
		cm.sendYesNo("你選擇了一般桑拿室，你的HP和MP會回復得很快，你也可以在裡面購買商品，你確定要進入嗎？");
		}
		if (tempvar == 1) {
		cm.sendYesNo("你選擇了高級桑拿室，你的HP和MP會比一般桑拿室回復得更快，也可以在裡面找到特殊的物品，你確定要進入嗎？");
		}
		}
	if (status == 2) {
		if (tempvar == 0) {
		if (cm.getMeso() >= regcost) {
			cm.warp(105000011);
			cm.gainMeso(-regcost);
		} else {
			cm.sendOk("很抱歉，看起來您似乎沒有足夠的楓幣。你至少要有 " + regcost + " 楓幣才能待在我們的一般桑拿室。");
			}
			}
		if (tempvar == 1) {
		if (cm.getMeso() >= vipcost) {
			cm.warp(105000012);
			cm.gainMeso(-vipcost);
		} else {
			cm.sendOk("很抱歉，看起來您似乎沒有足夠的楓幣。你至少要有 " + vipcost + " 楓幣才能待在我們的高級桑拿室。");
			}
			}
		cm.dispose();
}
}