/*
	名字:	调查结果
	地圖:	可疑的研究室
	描述:	926100000
*/

function start() {
	var em = cm.getEventManager("Romeo");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
	return;
	}
	if (!cm.canHold(4001130,1)) {
		cm.sendOk("無法收納物品，請清理背包空間。");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getMapId() == 926100000) { //just first stage
		if (java.lang.Math.random() < 0.1) {
		if (em.getProperty("stage1").equals("0")) {
		em.setProperty("stage1", "1");
		cm.getMap().setReactorState();
		cm.playerMessage(-1, "你打開了進入實驗室的通道。");
		}
	} else if (java.lang.Math.random() < 0.05) {
		if (em.getProperty("stage").equals("0")) {
		cm.gainItem(4001130,1);
		cm.playerMessage(-1, "找到一封信！");	
		}
		}
		}
	cm.dispose();
}
