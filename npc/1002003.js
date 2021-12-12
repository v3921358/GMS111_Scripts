/*
	名字:	智慧爷爷
	地圖:	明珠港
	描述:	104000000
*/

function start() {
	cm.sendYesNo("你好！你看起來會像是有一大堆朋友的人，想不想擴展你的好友列表？ 只需花費#b100,000#k楓幣，我會在你的好友列表中添加#b 2個插槽#k，為了你以後的發展，這個價錢並不貴！");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你將來會有很多朋友，你只是不想花#b100000 #k楓幣楓幣來擴充自己的好友欄！");
	} else {
		var capacity = cm.getBuddyCapacity();
		if (capacity >= 50 || cm.getMeso() < 100000) {
		cm.sendOk("嘿！不要看我是老頭子就欺負我，你確定你身上有#b100,000 #k楓幣？ 如果楓幣足够，那就是你的好友列表已經超過最大限制！#b 50個插槽#k！");
	} else {
		var newcapacity = capacity + 2;
		cm.gainMeso(-100000);
		cm.updateBuddyCapacity(newcapacity);
		cm.sendOk("好友列表插槽已添加成功！它一次只適用於一個角色，囙此不會影響您帳戶上的任何其他角色。");
		}
		}
	cm.dispose();
}