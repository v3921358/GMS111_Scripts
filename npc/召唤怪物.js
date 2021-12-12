/*mia
	spawn NPC
	- EI Nath
	- by 稻、香
*/

var status = 0;
var mob = Array(2220000, 3220000, 5220000, 7220000,8220000,8220001,3220001,4220000,5220002,6220000,6220001,7220001,7220002,8220002,8220003,9300151,9300151);
var mobname = Array("红蜗牛王", "树妖王", "寄居蟹", "肯德熊","艾里杰","负狼雪人","大宇","歇尔夫","浮士德","多尔","朱诺","九尾狐","妖怪绅士","吉米拉","大海兽","人造人","愤怒人造人"
);
var mobcost = Array(1000000, 1500000, 2000000, 250000,300000,350000,300000,300000,300000,300000,300000,300000,300000,300000,500000,300000,300000);


var boss = Array(100100,8220012);
var bossname = Array("一只很可爱的蓝色蜗牛","欧碧拉");
var bosscost = Array(10000000,5000);
var selectedmob = -1;
var mobkind;
var mobid;
var mobna;
var price;
var qty=1;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("#b谢谢下次再光顾.");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
			cm.sendNext("#bHi, 我是伯尼，我可以为你服务吗.");
		} else if (status == 1) {
			cm.sendNextPrev("#b你确定你有能力拯救金银岛？")
		} 

 		else if (status == 2) {
			cm.sendSimple ("#r请选择黑暗?\r\n#L1#BOSS怪物#l");
		} 
		else if (status == 3) {

			var selStr = "#r选择.#b";
		if (selection == 0) {
				mobkind=0;
				for (var i = 0; i < mob.length; i++) {
					selStr += "\r\n#L" + i + "#" + mobname[i] + "(" + mobcost[i] + " 点券)#l";
				}
			cm.sendSimple(selStr);}
		else if (selection == 1){
				mobkind=1;
				for (var i = 0; i < boss.length; i++) {
					selStr += "\r\n#L" + i + "#" + bossname[i] + "(" + bosscost[i] + " 点券)#l";
				}
			cm.sendSimple(selStr);
		}else cm.dispose();

}
 else if (status == 4) {
			if (mobkind==0) {
		var prompt = "#b你想召唤多少只？";
		mobid  =mob[selection];
		mobna =mobname[selection];
		price=mobcost[selection];
		cm.sendGetNumber(prompt,1,1,100)
			}
			else if (mobkind==1){
		mobid  =boss[selection];
		mobna =bossname[selection];
		price=bosscost[selection];
		cm.sendYesNo("#d杀死#r"+mobna+"#d需要#r"+price+"#d点券，你确定？");
			}
			else cm.dispose();	
		} 


 else if (status == 5) {
			if (mobkind==0) {
				qty = selection;
				cm.sendYesNo("#d召唤#r"+qty+"#d只#r"+mobna+"#d需要#r"+price*qty+"#d点券，你确定要召唤？");
			}
			else if (mobkind==1){
				if (cm.getMeso() >= price)
				{ 
				cm.spawnMonster(mobid);
				cm.gainDJ(-price);
				cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你点券不足.");
			cm.dispose();
				
			}
			else cm.dispose();	
		} 
else if (status == 6) {				
			if (cm.getMeso() >= price*qty)
				{ 
				cm.spawnMonster(mobid,qty);
				cm.gainDJ(-price*qty);
				cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你点券不足.");
			cm.dispose();
		}
	}
}	