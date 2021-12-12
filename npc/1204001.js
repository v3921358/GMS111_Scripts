/*
	名字:	弗朗西斯
	地圖:	人偶师的洞穴
	描述:	910510200
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("我是黑色之翼的人偶師法蘭西斯。 你把我安置的好幾個人偶都給找出來了……壞了我的好事。 雖然我很惱火，不過這次先放你一馬。 你要是再敢和我作對……我以黑魔法師大人的名義發誓，絕不放過你。");
	if (status == 1)
		cm.sendPrevS("#b（……黑色之翼？ 作對？…… 到底是怎麼回事？ 在怪獸的身上找到人偶與黑魔法師有什麼關係？ 該去找特魯商量商量。)#k", 3);
	if (status == 2){
		cm.forceStartQuest(21760, "0");
		cm.warp(102010100, 3);
		cm.dispose();
}
}