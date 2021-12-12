/*
	名字:	弗朗西斯的日记
	地圖:	弗朗西斯的房间
	描述:	931050220
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0){
	if (cm.haveItem(4350003)) {
		cm.sendOk("拿到#v4350003:#相片了，去其它地方看看！");
		cm.dispose();
		return;
		}
		cm.sendNext("乾淨的日記本。 上面寫著#r“天才人偶師法蘭西斯的日記本，絕對不要偷看”#k的字样。");
		}
	if (status == 1)
		cm.sendNextPrevS("#b黑色之翼幹部的日記本。 要看看嗎？");
	if (status == 2)
		cm.sendNextPrevS("#b雖然是其他人的日記本，但是說不定有什麼重要的情報，應該看一看。 黑色之翼的幹部……原諒我。");
	if (status == 3)
		cm.sendNextPrev("今天在走廊裏和兔子撞了一下。 竟敢衝撞我！ 以我的魔力，稍微抬一抬手，他就會變成齏粉。 但我要是暴走的話，世界就會滅亡。");
	if (status == 4)
		cm.sendNextPrevS("#b(感覺手脚冰涼。 光是看著這些字，感覺就有某種詛咒效果……黑色之翼果然不是普通的組織。)");
	if (status == 5)
		cm.sendNextPrevS("#b(鎮靜下來，看看下一頁吧。)");
	if (status == 6)
		cm.sendNextPrev("看到那位可愛的大人，今天又充滿了力量。 要是那位大人想要，就算是天上的星星我也會幫他摘下來……\r\n\r\n#b(什麼東西掉了下來)#k");
	if (status == 7)
		cm.sendPrevS("(#v4350003:#這是什麼……看上去好像是照片。）",3);
	if (status == 8){
		cm.gainItem(4350003, 1);
		cm.dispose();
}
}