/*
	名字:	生命炼金，及失踪的炼金术士
	地圖:	研究所中央走廊
	描述:	261020000
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
	if (qm.getQuestStatus(3314) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3314) == 1) {
		qm.sendYesNo("#v2022198:#有帶過來麼？");
		}
		}
	if (status == 1) {
	if (qm.haveItem(2022198)) {
		qm.sendNext("這次估計又要麻煩你了，呵呵！");
	} else {
		qm.sendOk("你身上根本沒有#v2022198:#……請你再去拿一次。");
		qm.dispose();
		}
		}
	if (status == 2){
		qm.gainItem(2022198, -1);
		qm.sendSimple("呼呼呼呼….看你面色蒼白看來真的很有效果啊.這次的實驗成功了！ 呃哈哈哈哈！ 果然可以用在能打倒洛伊德的堅強的人身上！\r\n#L0##b（果然真的是人體實驗嘛！）#k#l");
		}
	if (status == 3)
		qm.sendSimple("很驚訝的表情嘛？ 不用太擔心.不是很危險的藥…不，雖然是危險的藥但是有解毒藥…呼呼呼呼…\r\n#L0##b（給病又給藥…天啊！）#k#l");
	if (status == 4)
		qm.sendSimple("如此一來，任意改變人體的狀態會變得更為容易…這樣…搞不好可以幫那傢伙達成願望…\r\n#L0##b那傢伙？# k#l");
	if (status == 5)
		qm.sendNextPrev("是的……在生命煉金方面，他是第一人，他的能力比任何人都要强……只要有他在的話，這種研究很快就能解决……但是他失踪了……");
	if (status == 6)
		qm.sendNextPrev("誰都不知道那傢伙為什麼會消失.不知從什麼時候開始那傢伙就變得暴躁，人們不知道他到底在做什麼實驗.那傢伙大概半年左右一直是瘋瘋癲癲的狀態.研究，研究，研究…不斷地在做實驗.有關生命煉金的…結果，#b那個事件#k終於發生了…");
	if (status == 7)
		qm.sendNextPrev("就算是號稱練金術士之村的瑪加提亞…也未曾發生過像那樣的劇烈爆炸事件…不曉得那傢伙到底做了什麼實驗，我怎麼猜也猜不透…他到底是在做什麼驚人的研究呢？ 既然已經對他家進行了調查，我想協會會長應該知道些什麼，但他也不肯透露…");
	if (status == 8)
		qm.sendNextPrev("這項研究..其實一開始也是和他一起合作，但他卻消失無蹤，而這項研究也無法繼續下去。 我對藥物雖然還算有自信，但還真不容易啊！ 既然是和那傢伙一起開始的，雖然斷斷續續還在持續下去，但是…那傢伙為什麼會想要研究改變人體的狀態呢？");
	if (status == 9)
		qm.sendPrev("那傢伙應該還活著…那傢伙…有活下去的理由！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/5/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  12500 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# 洞察力 40");
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainItem(2050004, 10);
		qm.gainItem(2022199, 20);
		qm.gainExp(12500);
		qm.dispose();
}
}
