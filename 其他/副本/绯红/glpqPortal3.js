/*
	����:	�������
	�؈D:	���ݲ���
	����:	610030300
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (!em.getProperty("glpq3").equals("10")){
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
	} else {
		pi.warp(610030400, 0);
}
}
}