/*
	����:	�������
	�؈D:	���������
	����:	610030200
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq2").equals("5")){
		pi.warp(610030300, 0);
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}
}