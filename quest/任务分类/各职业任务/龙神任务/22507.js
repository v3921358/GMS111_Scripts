/*
	名字:	什么是龙神？
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 14) {
		qm.sendOk("唉，妳在開玩笑吧？告訴我妳的手指滑倒了！勇往直前，接受挑戰。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("我早就知道了！我知道我們是有聯系的，主人！當妳變得更強壯時，我也變得更強。當我變得更強壯時，妳可以用我的力量！這是我們的協定。我知道我選了壹個好主人！");
	if (status == 1)
		qm.sendNextPrevS("#b我懂了。我們到底是怎麽結束這項協議的?#k");
	if (status == 2)
		qm.sendNextPrev("我不知道。我只是壹個雞蛋。我真的記不起來了…雖然我隱約記得妳，師父，在壹片霧氣中向我走來。我記得妳見到我時的驚訝。我向妳呼喊著作為回報。");
	if (status == 3)
		qm.sendNextPrevS("#b(等待！聽起來就像妳曾經做過的夢…妳們兩個在夢中相遇了嗎？妳在夢中看到的巨龍有可能是米爾嗎？#k");
	if (status == 4)
		qm.sendNextPrev("主人，妳和我在精神上是壹體的。我壹看見妳就知道了。這就是為什麽我想和妳達成協議的原因。沒有其他人。當然，妳必須支付我設定的價格。");
	if (status == 5)
		qm.sendNextPrevS("#b我付出了代價？ #k");
	if (status == 6)
		qm.sendNextPrev("妳不記得了嗎？當妳認出我並撫摸我的時候？這是我設定的壹個條件。當妳觸摸我的蛋的時候，妳和我在精神上成為壹體。");
	if (status == 7)
		qm.sendNextPrevS("#b…精神壹體?");
	if (status == 8)
		qm.sendNextPrev("對！精神契約！妳和我有不同的身體，但我們分享壹種精神。這就是為什麽當我變得更強時，妳變得更強，反之亦然！棒極了，對吧？至少，我想是這樣。");
	if (status == 9)
		qm.sendNextPrevS("#b我不知道妳在說什麽，但聽起來挺了不起的。#k");
	if (status == 10)
		qm.sendNextPrev("當然，這是壹個大問題，愚蠢的主人！妳再也不用擔心怪物了。妳現在要我保護妳！去試壹試我。事實上，我們現在就走吧！");
	if (status == 11)
		qm.sendNextPrevS("#b但這裏很平靜。周圍沒有危險的怪物。#k");
	if (status == 12)
		qm.sendNextPrev("什麽？這沒意思！妳不喜歡冒險嗎，主人？為妳的人民戰鬥怪物，戰勝邪惡，拯救無辜者，以及所有這些？妳不喜歡那種事嗎？");
	if (status == 13)
		qm.sendNextPrevS("#b這不是我五年計劃的壹部分。我只是開玩笑，但說真的，我是壹個農民的兒子…#k");
	if (status == 14){
		qm.sendAcceptDecline("嗯，讓我告訴妳吧。龍主人不可能過上平靜的生活。我會有很多機會來證明我的技能。相信我，我們的人生將是壹次偉大的冒險。答應我妳會和我在壹起，好嗎?");
		}
	if (status == 15)
		qm.sendNext("呵呵，好吧，大師。讓我們開始吧!");
	if (status == 16)
		qm.sendNextPrevS("#b(妳有點迷惑，但是妳現在正在和米爾龍壹起旅行。也許妳會壹起冒險，就像他說的那樣。)#k");
	if (status == 17)
		qm.sendPrevS("#b(妳還有壹個差事要辦。妳爸爸需要和妳談談，所以現在去看看他.)#k",3);
	if (status == 18){
		qm.forceStartQuest();
		qm.dispose();
}
}