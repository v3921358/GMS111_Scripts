/*
	����:	�������
	�؈D:	��ʦ������
	����:	610030600
*/

function enter(pi) {
try {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq6") == null || !em.getProperty("glpq6").equals("3") || pi.getPlayer().getEventInstance() == null || !pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")){
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
	} else {
		pi.warp(610030700, 0);
		}
		}
	} catch(e) {
		pi.playerMessage("Error: " + e);
}
}