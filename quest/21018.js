/*
	名字:	基础体力测试
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("難道，5隻太少了嗎？要是為了修煉想多消滅幾隻的話，我是不會反對的。雖然有點心痛，但是為了英雄的修煉這次我就睜一隻眼閉一隻眼吧…");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("好，那就開始檢驗一下你的體力吧。方法很簡單，去消滅這島上最強，最兇惡的怪物#b#o0100134##k就可以！幫我們消滅50隻得話再好不過了…");
	if (status == 1)
		qm.sendAcceptDecline("但是把沒有幾隻的#o0100134#全部消滅掉的話，對生態環境也是不好的所以就除掉5隻吧。為環境和自然照相的修煉，真是美麗啊…");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}