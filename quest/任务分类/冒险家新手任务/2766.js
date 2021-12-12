/*
	名字:	潘喜的测试1
	地圖:	巨大的树
	描述:	101030000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("好的，讓我們進入下一項修煉~喵。 剛才的修煉雖然只是熱身運動，但是你的實力應該已經提高了一些~喵。 所以需要測定一下實力，不是嗎～喵？");
	if (status == 1)
		qm.sendAcceptDecline("喵嗚～喵～從現在開始，你要對付的是#r#o9100015##k~喵。 和剛才對付的#o2230100#不可同日而語~喵。 我會把你送到怪物所在的地方去，你去消滅30個，然後回來找我~喵。 你想挑戰嗎～喵？");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(910100110);
		qm.dispose();
}
}