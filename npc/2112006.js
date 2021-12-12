/*
	名字:	罗密欧
	地圖:	特殊实验室
	描述:	926100200
*/

function start() {
	var em = cm.getEventManager("Romeo");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendOk("很抱歉，我不能與妳交談，請告訴妳的組長與我談話。");
		cm.dispose();
		return;
		}
	switch(cm.getPlayer().getMapId()) {
	case 926100200:
		if (cm.haveItem(4001130,1)) {
			cm.sendOk("這是我之前寫的信，不過遺失了，天哪！居然讓你找到，實在太感謝了。");
			cm.gainItem(4001130,-1);
			em.setProperty("stage", "1");
		} else if (cm.haveItem(4001134,1) && cm.haveItem(4001135,1)) {
			cm.gainItem(4001134,-1);
			cm.gainItem(4001135,-1);
			cm.sendOk("有了這些資料，我就能找出這一切的根源，現在我們可以通過旁邊的門進入到下一層。");
			em.setProperty("stage4", "1");
			em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
		} else {
			cm.sendOk("在這個特殊實驗室的裏，我們要必須找到#v4001134:##b#t4001134##k和#v4001135:##b#t4001135##k才能瞭解這一切紛爭的真相！");
			}
			break;
			}
		cm.dispose();
}