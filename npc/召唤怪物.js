/*mia
	spawn NPC
	- EI Nath
	- by ������
*/

var status = 0;
var mob = Array(2220000, 3220000, 5220000, 7220000,8220000,8220001,3220001,4220000,5220002,6220000,6220001,7220001,7220002,8220002,8220003,9300151,9300151);
var mobname = Array("����ţ��", "������", "�ľ�з", "�ϵ���","�����","����ѩ��","����","Ъ����","��ʿ��","���","��ŵ","��β��","������ʿ","������","����","������","��ŭ������"
);
var mobcost = Array(1000000, 1500000, 2000000, 250000,300000,350000,300000,300000,300000,300000,300000,300000,300000,300000,500000,300000,300000);


var boss = Array(100100,8220012);
var bossname = Array("һֻ�ܿɰ�����ɫ��ţ","ŷ����");
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
			cm.sendOk("#bлл�´��ٹ��.");
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
			cm.sendNext("#bHi, ���ǲ��ᣬ�ҿ���Ϊ�������.");
		} else if (status == 1) {
			cm.sendNextPrev("#b��ȷ�������������Ƚ�������")
		} 

 		else if (status == 2) {
			cm.sendSimple ("#r��ѡ��ڰ�?\r\n#L1#BOSS����#l");
		} 
		else if (status == 3) {

			var selStr = "#rѡ��.#b";
		if (selection == 0) {
				mobkind=0;
				for (var i = 0; i < mob.length; i++) {
					selStr += "\r\n#L" + i + "#" + mobname[i] + "(" + mobcost[i] + " ��ȯ)#l";
				}
			cm.sendSimple(selStr);}
		else if (selection == 1){
				mobkind=1;
				for (var i = 0; i < boss.length; i++) {
					selStr += "\r\n#L" + i + "#" + bossname[i] + "(" + bosscost[i] + " ��ȯ)#l";
				}
			cm.sendSimple(selStr);
		}else cm.dispose();

}
 else if (status == 4) {
			if (mobkind==0) {
		var prompt = "#b�����ٻ�����ֻ��";
		mobid  =mob[selection];
		mobna =mobname[selection];
		price=mobcost[selection];
		cm.sendGetNumber(prompt,1,1,100)
			}
			else if (mobkind==1){
		mobid  =boss[selection];
		mobna =bossname[selection];
		price=bosscost[selection];
		cm.sendYesNo("#dɱ��#r"+mobna+"#d��Ҫ#r"+price+"#d��ȯ����ȷ����");
			}
			else cm.dispose();	
		} 


 else if (status == 5) {
			if (mobkind==0) {
				qty = selection;
				cm.sendYesNo("#d�ٻ�#r"+qty+"#dֻ#r"+mobna+"#d��Ҫ#r"+price*qty+"#d��ȯ����ȷ��Ҫ�ٻ���");
			}
			else if (mobkind==1){
				if (cm.getMeso() >= price)
				{ 
				cm.spawnMonster(mobid);
				cm.gainDJ(-price);
				cm.dispose();
				}
				else
			cm.sendOk("#b�Բ������ȯ����.");
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
			cm.sendOk("#b�Բ������ȯ����.");
			cm.dispose();
		}
	}
}	