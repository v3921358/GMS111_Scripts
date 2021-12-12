/*
	名字:	追随骑士的轨迹
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("真是的…你這麼悠閒。讓你這樣有實力的人閒著這是騎士團的損失呢…");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("好久不見。這段時間你真的變強了。目前皇家騎士團應該沒有比你更強的騎士吧。因為騎士團長也會對你招架不住呢...閒聊到此為止，進入正題吧。");
	if (status == 1)
		qm.sendNextPrev("這是新的任務。根據不久前收集的情報#r黑色翅膀#k的成員中有人企圖對女皇不利。雖然騎士團的上級騎士#b#p1103000##k已經採取行動以防未然，但是憑她自己還是會有困難。");
	if (status == 2)
		qm.sendAcceptDecline("金銀島還行，而神秘島是連騎士團的情報員都不太瞭解的地方，囙此需要支援。 你能去支援#p1103000#嗎？ 她最後一次和我們聯系是在#b#m211000000##k，你先去那裡找找#p1103000#。");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}