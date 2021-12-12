/*
	名字:	饥饿的幼龙
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("妳怎麽能拒絕餵妳的龍？這是虐待兒童！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("喲，主人。現在我已經向妳展示了我能做什麽，輪到妳了。證明給我……妳可以找到食物！我餓死了。妳現在可以利用我的力量，所以妳必須照顧我。");
	if (status == 1)
		qm.sendNextPrevS("#b唉，我還是不明白發生了什麽，但是我不能讓像妳這樣的可憐的小家夥挨餓，對吧？食物，妳說呢？妳想吃什麽？");
	if (status == 2)
		qm.sendNextPrev("海，我剛剛出生幾分鐘前。我怎麽知道我吃什麽？我只知道我是壹條龍…我是妳的龍。妳是我的主人。妳必須善待我！");
	if (status == 3)
		qm.sendAcceptDecline("我想我們應該壹起學習。但我餓了。主人，我想吃東西。記住，我是個嬰兒！我馬上就要哭了！");
	if (status == 4)
		qm.sendOkS("#b(嬰兒龍看起來非常饑餓。妳必須餵他。也許妳爸爸可以給妳壹些關於龍吃的建議。)",3);
	if (status == 5){
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
		qm.sendNext("是什麽，小不點？妳想知道龍吃什麽嗎？妳為什麽…呵呵？妳找到龍了？");
	if (status == 1)
		qm.sendNextPrevS("#b(妳給爸爸看米爾)#k");
	if (status == 2)
		qm.sendNextPrev("唉…那是壹條龍？妳確定它不是壹只大蜥蜴嗎？嗯，所有的生命都是寶貴的，所以我想妳可以保留它。");
	if (status == 3)
		qm.sendNextPrevS("#b(爸爸似乎不相信米爾是壹條龍。嗯，他很小。如果他聽到米爾的話，爸爸會相信嗎？)");
	if (status == 4)
		qm.sendNextPrev("如果這是壹條真正的龍，那就太危險了。如果它放火怎麽辦？我不認為這是壹條龍，但也許我們應該請壹個冒險家來殺它，以防萬壹。");
	if (status == 5)
		qm.sendNextPrevS("b(什麽？殺了米爾但他沒有做錯什麽 !!)");
	if (status == 6)
		qm.sendNextPrev("當然，我敢肯定這不是壹條龍。龍只出現在奧西裏亞大陸的小葉上。");
	if (status == 7)
		qm.sendNextPrevS("#b哈。。。哈。。。妳肯定是對的！我懷疑他是壹條龍。他可能只是壹只蜥蜴！壹定地！#k");
	if (status == 8)
		qm.sendNextPrev("是的，我很確定。這是壹種奇怪的蜥蜴，但看起來並不危險。妳可以保留它。");
	if (status == 9)
		qm.sendNextPrevS("#b(為了自己的安全，妳最好不要讓任何人知道米爾是壹條龍。)#k");
	if (status == 10)
		qm.sendPrev("哦，妳說妳在找東西餵蜥蜴？我不確定…讓我考慮壹下。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 180 exp");
	if (status == 11){
		qm.forceCompleteQuest();
		qm.gainExp(180);
		qm.dispose();
}
}