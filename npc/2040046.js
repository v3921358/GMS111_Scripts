/*
	名字:	哈尔里
	地圖:	玩具城
	描述:	220000000
*/

function start() {
	cm.sendYesNo("你好！你不想擴大你的好友名單嗎？只需花費#b100,000#k楓幣，我會在你的好友列表中添加#b 2個插槽#k，為了你以後的發展，這個價錢並不貴！");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("我懂了。。。你沒有我想像的那麼多朋友？不管怎樣，如果你改變主意，回來我們談生意。當然，也就是說，一旦你得到了一些經濟上的救濟。。呵呵。。");
	} else {
		var capacity = cm.getBuddyCapacity();
		if (capacity >= 50 || cm.getMeso() < 100000) {
		cm.sendOk("嘿！你確定你身上有#b100,000 #k楓幣？ 如果楓幣足够，那就是你的好友列表已經超過最大限制！#b 50個插槽#k！");
	} else {
		var newcapacity = capacity + 2;
		cm.gainMeso(-100000);
		cm.updateBuddyCapacity(newcapacity);
		cm.sendOk("好友列表插槽已添加成功！它一次只適用於一個角色，囙此不會影響您帳戶上的任何其他角色。");
		}
		}
	cm.dispose();
}