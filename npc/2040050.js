/*
	名字:	流浪煉金術士
	地圖:	金银岛
	描述:	105000000
*/

var status = -1;

var menu = "";
var set;
var makeitem;
var access = true;
var reqitem = new Array();
var cost = 4000;
var makeditem = new Array(4006000,4006001);
var reqset = new Array([[[4000046,20],[4000027,20],[4021001,1]],
	[[4000025,20],[4000049,20],[4021006,1]],
	[[4000129,15],[4000130,15],[4021002,1]],
	[[4000074,15],[4000057,15],[4021005,1]],
	[[4000054,7],[4000053,7],[4021003,1]]],

	[[[4000046,20],[4000027,20],[4011001,1]],
	[[4000014,20],[4000049,20],[4011003,1]],
	[[4000132,15],[4000128,15],[4011005,1]],
	[[4000074,15],[4000069,15],[4011002,1]],
	[[4000080,7],[4000079,7],[4011004,1]]]);

function action(mode, type, selection) {
	if(mode == 0 && (status ==0 || status == 1)) {
	cm.dispose();
	return;
	}
	if(mode == 0) {
		cm.sendOk("材料不够，是嗎？ 別擔心。 獲得它們的方法有很多，無論是狩獵還是從別人那裡購買都能够實現，所以繼續去籌備吧。");
		cm.dispose();
	}
	if(mode == 1) {
	status++;
	}
	if(status == 0)
		cm.sendSimple("我只是一個旅行的煉金術士。 我可能正在訓練，如果你有需要，我可以幫你做一些簡單的東西。 你想看看嗎？\r\n\r\n#L0##b製作魔石#k#l\r\n#L1##b製造召喚石#k#l");
	if(status == 1){
		set = selection;
		makeitem = makeditem[set];
		for(i=0; i < reqset[set].length; i++) {
		menu += "\r\n#L"+i+"##bMake it using #t"+reqset[set][i][0][0]+"# and #t"+reqset[set][i][1][0]+"##k#l";
		}
		cm.sendSimple("Haha... #b#t"+makeitem+"##k is a mystical rock that only I can make. Many travelers seems to need this for most powerful skills that require more than just MP and HP. There are 5 ways to make #t"+makeitem+"#. Which way do you want to make it?"+menu);
		}
	if(status == 2){
		if (selection < 0 ) {
		cm.dispose();
		return;
		}
		set = reqset[set][selection];
		reqitem[0] = new Array(set[0][0],set[0][1]);
		reqitem[1] = new Array(set[1][0],set[1][1]);
		reqitem[2] = new Array(set[2][0],set[2][1]);
		menu = "";
		for(i=0; i < reqitem.length; i++) {
		menu += "\r\n#v"+reqitem[i][0]+"# #b"+reqitem[i][1]+" #t"+reqitem[i][0]+"#s#k";
		}
		menu += "\r\n#i4031138# #b"+cost+" mesos#k";
		cm.sendYesNo("To make #b5 #t"+makeitem+"##k, I'll need the following items. Most of them can be obtained through hunting, so it won't be terriblt difficult for you to get them. What do you think? Do you want some?\r\n"+menu);
		}
	if(status == 3){
		for(i=0; i < reqitem.length; i++) {
		if(!cm.haveItem(reqitem[i][0],reqitem[i][1]))
		access = false;
		}
		if(access == false || !cm.canHold(makeitem) || cm.getMeso() < cost) {
			cm.sendOk("請檢查您是否擁有所需的所有物品，或者您的 Etc 庫存是否已滿");
		} else {
			cm.sendOk("Here, take the 5 pieces of #b#t"+makeitem+"##k. Even I have to admit, this is a masterpiece. Alright, if you need my help down the road, by all means come back and talk to me!");
			cm.gainItem(reqitem[0][0],-reqitem[0][1]);
			cm.gainItem(reqitem[1][0],-reqitem[1][1]);
			cm.gainItem(reqitem[2][0],-reqitem[2][1]);
			cm.gainMeso(-cost);
			cm.gainItem(makeitem,5);
			}
		cm.dispose();
}
}