/*
	名字:	先恢复体力
	地圖:	浅海滩
	描述:	3000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("吱吱～吱，吱！吱吱吱！吱吱～！吱！吱？");
	if (status == 1)
		qm.sendNextPrevS("我明明是想到冒险岛世界去当一个冒险家的……到底是怎么回事？");
	if (status == 2)
		qm.sendNextPrev("吱吱吱吱～吱！吱吱！吱吱吱吱吱！");
	if (status == 3)
		qm.sendNextPrevS("和船长说话的时候看了看守卫，好像是……没错！蝙蝠怪！蝙蝠怪出现了！然后我……就那样掉下了船？那怎么会没事呢？虽然我#b知道游泳的方法#k，但是在这个过程中，我不可能神智清醒啊……难道，我是个游泳神童吗？");
	if (status == 4)
		qm.sendNextPrevS("吱吱吱吱吱！吱！吱！(有只小猴子好像很不满地在那里上窜下跳。看上去好像还很小。我醒来之后看到的第一个面孔，好像就是它……)");
	if (status == 5)
		qm.sendNextPrevS("嗯……？从刚才开始，你就一直想跟我说话吗？嗯？手上拿着的是……(猴子从怀里拿出一个苹果。看上去很好吃的熟透的苹果。但是……给我苹果干什么？)\r\n\r\n#i2010000#");
	if (status == 6)
		qm.sendAcceptDecline("吱吱吱吱吱～咕嘟！(猴子一脸郁闷的表情，把苹果递给我，做出吃的动作。难道……它知道我体力很虚弱，让我吃掉它！这家伙，心地还挺善良的！)");
	if (status == 7){
		qm.forceStartQuest();
		qm.gainItem(2010000, 1);
		qm.sendPrevS("(获得了看上去很好吃的苹果。吃一口看看吧。按#bI#k键，可以打开背包吗～？)",3);
		}
	if (status == 8){
		qm.dispose();
}
}