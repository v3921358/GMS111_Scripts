/*
	����:	�������
	�؈D:	��������
	����:	610030100
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq1").equals("1")) {
		em.setProperty("glpq1", "2");
		pi.warp(pi.getMapId(), 0);
		pi.mapMessage("[Expedition] һ��ð�U�Ҵ��^����ڣ�");
	} else if (em.getProperty("glpq1").equals("2")){
		pi.warp(610030200, 0);
	} else {
		pi.playerMessage(-7,"[Portal]�M�LՈ���c�ܿ˶���Մ���t�����");
}
}
}