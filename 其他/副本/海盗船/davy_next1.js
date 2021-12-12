/*
	名字:	百草堂
	地圖:	突破船头！
	描述:	925100100
*/

function enter(pi) {
try {
	var em = pi.getEventManager("Pirate");
	if (em != null && em.getProperty("stage2").equals("3")) {
		pi.warp(925100200,0); //next
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
		}
	}catch(e) {
		pi.playerMessage(5, "Error: " + e);
}
}