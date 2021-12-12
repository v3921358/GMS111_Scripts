/*
	名字:	有关龙的知识3
	地圖:	魔法密林图书馆
	描述:	101000003
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
	if (qm.getQuestStatus(22564) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22564) == 1) {
		qm.sendNext("嗯……你好像是人類，到哈夫林的村莊來幹什麼呢……呃！ 你旁邊的那條龍是瑪瑙龍？！ 是瑪瑙龍嗎？ 那麼你就是#p1032001#所說的擁有瑪瑙龍的人？");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b（咳，不愧是哈夫林，塔塔曼一下子就認出了#p1013000#是瑪瑙龍。但是他是哈夫林，應該不會傷害#p1013000#。");
	if (status == 2)
		qm.sendNextPrev("真，真讓人吃驚……沒想到現在還有活著的瑪瑙龍存在。 不，不僅是活著的，看它這麼小，好像孵化出來還沒多久。 沒想到它真的存在……");
	if (status == 3)
		qm.sendNextPrevS("#b……看來#p1032001#發現了#p1013000#是瑪瑙龍，但是卻裝作不知道……");
	if (status == 4)
		qm.sendNextPrev("據我所知！ 瑪瑙龍是通過契約才能誕生的特殊的龍！ 如果沒有契約者的話，它可能連最低等的龍都比不上。 你的龍看上去非常强！ 你難道是……");
	if (status == 5)
		qm.sendNextPrev("#b是的，我是龍神。#p1013000#，你也來打個招呼。");
	if (status == 6)
		qm.sendNextPrev("我不想和主人以外的人說話。",1013000);
	if (status == 7)
		qm.sendNextPrevS("#b呃……對不起，它有點怕難為情。");
	if (status == 8)
		qm.sendNextPrev("沒事，哈哈哈……聽說瑪瑙龍很警惕，看來果然是真的。 沒想到我真的能親眼看到瑪瑙龍……");
	if (status == 9)
		qm.sendNextPrevS("#b……瑪瑙龍很警惕，但為什麼滅絕了呢？");
	if (status == 10)
		qm.sendNextPrev("這……嗯……這件事早就被人遺忘了，你可能不知道。 在數百年前，有個想要讓冒險島世界滅亡的非常强大而可怕的人，是他讓瑪瑙龍滅絕了");
	if (status == 11)
		qm.sendNextPrevS("#b……為什麼呢？");
	if (status == 12)
		qm.sendNextPrev("這我就不知道了。 聽說瑪瑙龍和他對抗，所以被他滅絕了。 我當時還小，所以只知道這些。");
	if (status == 13)
		qm.sendNextPrevS("但是看來還沒有滅絕啊。 現在就有一條瑪瑙龍在我們的眼前……你在生活上沒有遇到什麼不便嗎？#m240000000#是有很多用於飼養龍的便利設施，你願意在這裡住下來嗎？");
	if (status == 14)
		qm.sendNextPrev("不要，我喜歡呆在主人身邊。",1013000);
	if (status == 15)
		qm.sendNextPrev("聽說對於瑪瑙龍來說，和契約者的關係比它們的本能還要重要，看來是真的……也是，擁有契約者的瑪瑙龍，它的潜力要比任何龍都要强…");
	if (status == 16)
		qm.sendNextPrev("你知道嗎？ 瑪瑙龍的靈魂和契約者緊密相連。 契約者的力量可以讓瑪瑙龍變强，而契約者則可以自由地使用瑪瑙龍的力量。");
	if (status == 17)
		qm.sendNextPrev("但是不是任何人都可以簽訂契約。 瑪瑙龍非常挑剔，除非是擁有强大靈魂的人，否則它們是不會輕易和人簽訂契約的。 看來你一定擁有非常强大的靈魂。");
	if (status == 18)
		qm.sendNextPrev("能看到本以為已經滅絕的瑪瑙龍，真讓人高興。 雖然很希望它能待在#m240000000#，但恐怕太勉强了。 看到了你，我想其他地方應該還有其他瑪瑙龍存在。 我和#p1032001#不會就此放弃，我們會繼續尋找的");
	if (status == 19)
		qm.sendPrev("如果你有所發現，#p1032001#會與你聯系的。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 7500 exp");
	if (status == 20){
		qm.forceCompleteQuest();
		qm.gainExp(7500);
		qm.dispose();
}
}