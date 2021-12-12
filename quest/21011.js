/*
	名字:	消失的武器
	地圖:	寒冷森林2
	描述:	140090200
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2 && mode == 0) {
		qm.dispose();
		return;
		}
	if (status == 3) {
		qm.sendOk("哦，那樣啊。英雄果然很忙啊....哭哭。要是改變主意了，隨時可以來找我。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(21011) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21011) == 1) {
		qm.sendNext("剛才我好像聽到說「英雄回來了...」，是我聽錯了嗎？什麼？沒聽錯嗎？真的這位...這位是英雄嗎?");
		}
		}
	if (status == 1)
		qm.sendNextPrev("...真是高興啊...竟然能這樣見到英雄，真是榮幸啊！求您握個手吧，順便再抱一下我就更好了，但首先還是先簽個名吧....");
	if (status == 2)
		qm.sendSimple("可是...英雄怎麼沒有帶武器呢？？\r\n#b#L0#據我所知英雄有自己武器...啊...應該是和黑魔法師決鬥時弄掉了。");
	if (status == 3)
		qm.sendAcceptDecline("湊合著用可能會太寒酸，不過#b請你先收下這把劍吧！#k 這是我送給英雄的禮物。英雄空著手總是有點奇怪.. \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(1302000,1);
		qm.gainExp(35);
		qm.sendOkS("#b(連技能一點都不像英雄...連劍都好陌生。我之前真的有用過劍嗎？劍該怎麼配戴呢?)#k",3);
		}
	if (status == 5){
		qm.summonMsg(16);
		qm.dispose();
}
}