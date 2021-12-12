/*
	名字:	百草堂
	地圖:	击退海盗！
	描述:	925100400
*/

function act() {
	var em = rm.getEventManager("Pirate");    //获取钥匙关门
	if (em != null) {
		rm.mapMessage(6, "One of the doors have been activated.");
		em.setProperty("stage4", parseInt(em.getProperty("stage4")) + 1);
	if (em.getProperty("stage4").equals("4")) { //all 5 done
		rm.mapMessage(6, "Proceed!");
}
}
}