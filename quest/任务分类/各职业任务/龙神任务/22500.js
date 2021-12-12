/*
	名字:	唤醒幼龙
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 12) {
		qm.sendOk("妳不相信我？格雷爾，妳把我氣瘋了!");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("我終於來了！*吸氣*啊，這壹定是我呼吸的空氣。那壹定是太陽！那是壹棵樹！那是壹株植物！那是壹朵花！Woohahahaha！這太不可思議了！這比我想象中的世界要好得多，而我卻被困在雞蛋裏。和妳。。。妳是我的主人嗎？嗯，我對妳的印象不同。");
	if (status == 1)
		qm.sendNextPrevS("#b哇，它在說話!");
	if (status == 2)
		qm.sendNextPrev("我的主人很奇怪。我想我現在不能做任何事情了，因為協議已經完成了。唉，好的，很高興見到妳。我們會看到很多彼此。");
	if (status == 3)
		qm.sendNextPrevS("#b嗯？妳什麽意思？我們會看到很多彼此？什麽協定？");
	if (status == 4)
		qm.sendNextPrev("妳是什麽意思？妳把我從蛋裏叫醒了。妳是我的主人！所以，當然，妳的責任是照顧我，訓練我，幫助我成為壹條強壯的龍。很明顯！");
	if (status == 5)
		qm.sendNextPrevS("#b什麽？壹條龍？妳是龍？我不明白…為什麽我是妳的主人？妳在說什麽？");
	if (status == 6)
		qm.sendNextPrev("妳在說什麽？妳的精神與我的靈魂達成了契約！我們現在差不多是同壹個人了。我真的需要解釋嗎？結果，妳成了我的主人。我們受到公約的約束。妳不能改變主意…公約不能被打破。");
	if (status == 7)
		qm.sendNextPrevS("#b等等，等等。讓我直說吧。妳是說我別無選擇，只能幫助妳？");
	if (status == 8)
		qm.sendNextPrev("尤尤普！嘿！脸怎么了？你……难道不想做我的主人吗？");
	if (status == 9)
		qm.sendNextPrevS("#b不。。。不是那樣…我只是不知道我是否準備好了寵物。");
	if (status == 10)
		qm.sendNextPrev("壹個P- PET？妳剛才叫我寵物嗎？怎麽敢…為什麽，我是龍！世界上最強大的人！");
	if (status == 11)
		qm.sendNextPrevS("#b...#b(妳懷疑地盯著他。他看起來像壹只蜥蜴。壹個弱小的人。)#k");
	if (status == 12)
		qm.sendAcceptDecline("妳為什麽那樣看著我？看！看看我能用我的力量做什麽。準備好了嗎？");
	if (status == 13){
		qm.forceStartQuest();
		qm.sendNext("命令我杀戮#r#o1210100#s#k!現在就做！我會告訴妳龍能打敗多快#o1210100#s!笨蛋，沖鋒!");
		}
	if (status == 14)
		qm.sendPrev("等壹下！妳分配妳的AP了嗎？我受到了我的主人和盧克的嚴重影響！如果妳真的想看看我能做什麽，在妳使用這個技能之前，分發妳的AP和妳的魔術師裝備。 ");
	if (status == 15){
		qm.evanTutorial("UI/tutorial/evan/11/0", -1);
		qm.resetStats(4, 4, 12, 12);
		qm.dispose();
}
}
