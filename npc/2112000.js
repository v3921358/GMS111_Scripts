/*
	名字:	犹泰
	地圖:	犹泰的办公室
	描述:	926100300
*/

function start() {
	var em = cm.getEventManager("Romeo");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (em.getProperty("stage").equals("1") && em.getProperty("stage5").equals("0")) {
		//advance to angry!
		cm.sendOk("什麼。。。 可疑的陰謀？ 這不可能。");
		em.setProperty("stage", "2");
	} else if (em.getProperty("stage5").equals("1") && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendOk("請出去，不要繼續在打攪我。");
		em.setProperty("stage5", "2");
		cm.getMap().setReactorState();
	} else {
		cm.sendOk("請出去，不要繼續在打攪我。");
		}
	cm.dispose();
}