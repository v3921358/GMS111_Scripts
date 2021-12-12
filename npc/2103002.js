/*
	名字:	王妃的装饰柜
	地圖:	阿里安特宫殿&amp;lt;王室&gt;
	描述:	260000303
*/

function start() {
	if (cm.isQuestActive(3923) && !cm.haveItem(4031578)) {
		cm.sendOk("你在高贵的装饰柜裏拿到了#b#t4031578##k！#i4031578:#");
		cm.gainItem(4031578, 1);
        } else {
		cm.sendOk("只是一個高贵的装饰柜。");
		}
	cm.dispose();
}
