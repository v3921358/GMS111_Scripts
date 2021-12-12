/*
	名字:	普尼的委托
	地圖:	普尼的原野
	描述:	140020110
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("可以幫助我的只有英雄你了。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("英雄，你好？我是飼養雪橇專用哈士奇的#p1202007#。這麼突然找你很抱歉但可以幫助我的只有英雄你了。你不忙可以聽我說嗎？");
	if (status == 1)
		qm.sendNextPrev("就是不久前的事情。 我像平時一樣照看可愛的哈士奇犬們，卻發現有個奇怪的傢伙夾在他們中間。 毛色光澤都很不一樣，牙齒也銳利很多……怎麼看都不像一隻哈士奇犬。");
	if (status == 2)
		qm.sendNextPrev("我開始還以為是只變種的哈士奇犬。 後來一查才發現那傢伙不是哈士奇，而是只#b狼#k！#m140000000#島上根本沒有狼，也不知道是從哪裡混進來的……很奇怪不是嗎？");
	if (status == 3)
		qm.sendNextPrev("我也知道不能把狗和狼一起養，但這小狼崽才剛剛出生，丟掉又太不近人情了。 再加上小狼崽的身體還很弱。 所以，我打算把這只小狼崽養到他能自食其力的大小。");
	if (status == 4)
		qm.sendNextPrev("雖然我很精通犬類的飼養，但如何養狼卻是一竅不通。 所以必須找人幫忙。#b水下世界#k的某個地方#k住著一個叫#b#p2060000##k的人，懂得飼養狼的辦法。 所以想請英雄去見見她，請求她的幫助。 謝謝你了。");
	if (status == 5)
		qm.sendPrev("得到納努科的同意後，她應該會給你一個東西，你把那個東西帶回來給我就行。 我的家就在裡恩村旁邊，#b白雪平原2附近#k。");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}