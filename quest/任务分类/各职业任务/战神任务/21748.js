/*
	名字:	被抢走的封印石
	地圖:	特鲁的情报商店
	描述:	104000004
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(21748) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21748) == 1) {
		qm.sendNext("我聽說了，為了調查黑色之翼的事件，你去了#m250000000#，#b#h0##k。 辛苦了。 不過……這次是不是又中了黑色之翼的招兒？");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b（講述#m250000000#封印石的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("……什麼？ 是英雄……過去的你把封印石交給大家的嗎？#b#m250000000##k封印石被搶走了也沒關係。 這個情報可意義重大！");
	if (status == 3)
		qm.sendNextPrevS("#b意義重大？");
	if (status == 4)
		qm.sendNextPrev("既然過去封印石是英雄的東西，那麼#b只要對英雄進行一些調查，哪怕是很瑣碎的一些情報，說不定就能發現封印石的下落了呢#k？ 那樣的話，我們就能在黑色之翼之前，找到封印石了。");
	if (status == 5)
		qm.sendNextPrevS("#b原來是這樣，真是個好辦法！");
	if (status == 6)
		qm.sendNextPrev("呵呵呵……太好了！ 現在又鬥志昂揚了吧？ 來，#b#h0##k！ 這是新的技能#s21100002#  #q21100002#！");
	if (status == 7)
		qm.sendPrev("看來應該重新調查英雄的行踪了！ 特魯大叔會繼續打聽關於黑色之翼的資訊，你還是專心修煉吧！ 一定要練到把黑色之翼鼻子打扁的程度啊。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n#s21100002#  #q21100002#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.teachSkill(21100002, qm.getPlayer().getSkillLevel(21100002), 30);
		qm.gainExp(20000);
		qm.dispose();
}
}
