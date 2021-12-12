/*
	名字:	[十字猎人]降魔十字旅团-十字猎人
	地圖:	降魔十字旅团据点
	描述:	931050500
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
		qm.sendAcceptDecline("對於這突然的建議感到吃驚吧。 不好意思，能不能先確認下您有沒有資格和我們一起共事呢？ 因為我們不能對沒有資格的人隨便說話的。 沒關係吧？");
	if (status == 1)
		qm.sendPrev("好的，那麼請協助我做一些簡單的測試吧，在規定時間內擊敗我的小狗哈比的話就行了，那麼開始吧。 ");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(931050510,0);
		qm.getMap(931050510).resetFully();//地图刷新
		qm.spawnMob(9300474,0,0);
		qm.dispose();
}
}
