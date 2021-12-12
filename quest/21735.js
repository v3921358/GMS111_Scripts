/*
	名字:	金银岛的封印石
	地圖:	特鲁的情报商店
	描述:	104000004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#t4032323#我已經找到了。 你看，呵呵呵。#i4032323:#");
	if (status == 1)
		qm.sendNextPrevS("#b！！……你怎麼找到的？");
	if (status == 2)
		qm.sendNextPrev("上次被人偶師攻擊後，我動員了所有的情報網搜遍了整個金銀島。 我怎麼可能坐以待斃？ 一定要搶在他們前面找到他們想要的東西……也算是報了上次一箭之仇。 ");
	if (status == 3)
		qm.sendNextPrev("不過，黑色之翼的傢伙們已經認識我了，我再拿著這個恐怕不太安全。 英雄大人拿著它走來走去，弄丟了也不好……要不還是交給#b#p1201000##k保管吧。");
	if (status == 4)
		qm.sendNextPrev("#m140000000#島上一直都只有#m140000000#一族生活。 為了不讓其他人類接近，他們在島上設定了各種咒術。 黑色之翼要想找到他們恐怕沒那麼容易。");
	if (status == 5)
		qm.sendNextPrev("我打算以後不再讓你去做收集情報的工作了，你現在已經對冒險島有了一定的瞭解，現在也是時候自己去積累經驗了吧？");
	if (status == 6)
		qm.sendPrev("不過我打算集中全力，去收集與黑色之翼相關事件的情報，更何况，#b關於那個封印石也有必要繼續打聽，如果有什麼消息，我會聯系你的#k。 日後再見，英雄。");
	if (status == 7){
		if(!qm.canHold(4032323, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(4032323, 1)) qm.gainItem(4032323, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("對於黑色翅膀的行動從真實叔叔那裡一直聽說了，前段時間也被襲擊了，你怎麼樣啊？嗯？這是…這就是#b#v4032323:##t4032323##k嗎？結果還是被真實叔叔比他們先找到了#t4032323#。");
	if (status == 1)
		qm.sendPrev("不知道這顆寶石到底有什麼用……只知道這個東西肯定和黑魔法師有關。 既然那些傢伙在找這個東西，我們一定要保護好這個東西。 看來不論發生什麼，你都要不斷地變得更強，才行。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 6037 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032323, -1);
		qm.gainExp(6037);
		qm.dispose();
}
}