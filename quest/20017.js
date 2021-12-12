/*
	名字:	为了成为骑士的第一次训练
	地圖:	修炼森林1
	描述:	130010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嗯？ 是#b#p1101002##k派你過來的嗎？ 啊哈！ 你是這次新來的嗎？ 很高興認識你。 很高興認識你！ 我的名字是#b#p1102000##k。 是專門教你這種貴族的騎士訓練師。 嗯…你怎麼這麼看著我…啊，你好像是第一次見到菲約吧。");
	if (status == 1)
		qm.sendNextPrev("我們種族被稱為菲約。 你和女王旁邊的#p1101001#說過話嗎？ 菲約是和#p1101001#一樣的種族。 雖然派系有些不同…差不多。 我們只生活在聖地，雖然會有些陌生，但很快就會熟悉的。");
	if (status == 2)
		qm.sendNextPrev("啊，你或許知道吧？ 在這聖地根本不存在怪物。 擁有邪惡力量的存在是無法涉足聖地的。 不過不要擔心。 訓練是以#p1101001#所創造的幻想生物絹毛鳥作為對象來進行的。 那麼開始訓練嗎？");
	if (status == 3)
		qm.sendAcceptDecline("運好氣了吧！ 那麼…看你的實力，你應該可以捕獵比中等稍强一點的絹毛鳥。 捕獵在#b#m130010100##k的15只#b#o0100122##k該足够了吧？ 怎麼樣？ 能搞定#o0100122#嗎？");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}