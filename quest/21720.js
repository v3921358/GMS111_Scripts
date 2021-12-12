/*
	名字:	人偶师的警告
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
	if (qm.getQuestStatus(21720) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21720) == 1) {
		qm.sendNext("有什麼事嗎？ 你不是一直在金銀島上修煉嗎？ 真相叔叔還帶口信說你幫了大忙了。…… 什麼？ 黑色之翼？");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b（講述有關人偶師、黑色之翼，以及黑色之翼的目的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("原來是這樣……叫黑色之翼啊。 居然還有這麼一幫人……明知很危險也要在冒險島世界裏復活黑魔法師，太不像話了。 ");
	if (status == 3)
		qm.sendNextPrevS("是，是啊……#b（他的語氣突然變得很決斷，好可怕。）#k");
	if (status == 4)
		qm.sendNextPrev("預言裏只說到英雄會蘇醒，與黑魔法師戰鬥。 但我還一直半信半疑，這下我才明白黑魔法師是真的存在的。");
	if (status == 5)
		qm.sendNextPrevS("#b是不是很可怕？");
	if (status == 6)
		qm.sendNextPrev("有什麼可怕的？ 管他是什麼黑魔法師還是什麼別的，你都會將他們一一打倒的，還有什麼好擔心的呢？ 我們只會覺得鬥志更加高漲。 啊，對了，我發現了這個#b技能#k#s21001003#  #q21001003#……看一眼嗎？");
	if (status == 7)
		qm.sendNextPrev("你正在漸漸地變得强大起來。 我會為讓你强大起來而傾盡全力幫助你的。 有什麼好害怕的呢？ 千萬不能退縮。 我們為了打敗黑魔法師不是已經等待了數百年了嗎？ 這次一定會取得勝利的。");
	if (status == 8)
		qm.sendPrev("呐，為了這個目標必須繼續修煉！ 修煉明白嗎？ 前往金銀島繼續修煉吧。 一定要練到能打敗黑魔法師的程度才行！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21001003#  #q21001003#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1700 exp");
	if (status == 9){
		qm.forceCompleteQuest();
		qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
		qm.gainExp(1700);
		qm.dispose();
}
}