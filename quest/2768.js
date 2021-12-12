/*
	名字:	潘喜的测试2
	地圖:	巨大的树
	描述:	101030000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("雖然我很清楚你的實力，但是還是需要進行測試~喵。 和上次一樣，我會把你送到獨立的空間裏去~喵。 在那裡有#r#o3230100#的强化版#k在等著你。 你只要消滅掉40個就行~喵。 準備好了嗎~喵~喵~？");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100120);
		qm.dispose();
}
}