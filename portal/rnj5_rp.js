/*
	名字:	隐藏地图
	地圖:	实验室通道3
	描述:	926100303
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage6_" + (((pi.getMapId() % 10) | 0) - 1) + "_" + (pi.getPortal().getName().substring(2, 3)) + "_" + (pi.getPortal().getName().substring(3, 4)) + "").equals("1")) {
		pi.warpS(pi.getMapId(),(pi.getPortal().getId() >= 31 ? (pi.isGMS() ? 35 : 13) : (pi.getPortal().getId() + 4)));
		pi.playerMessage(-1, "Correct combination!");
	if (pi.isGMS()) { //TODO JUMP
		pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(2, 4), 2);
		}
	} else {
		pi.warpS(pi.getMapId(), (pi.getPortal().getId() <= 4 ? (pi.isGMS() ? 13 : 0) : (pi.getPortal().getId() - 4)));
		pi.playerMessage(-1, "Incorrect combination.");
}
}