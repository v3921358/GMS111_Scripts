/*
	����:	�������
	�؈D:	���ݲ���
	����:	610030400
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
		pi.warpS(610030300, 0);
	if (!em.getProperty("glpq3").equals("10")){
	em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
		pi.mapMessage(6, "[Expedition]һ��ð�U�ҽ��^!");
		if (em.getProperty("glpq3").equals("10")) {
		pi.mapMessage(6, "[Expedition]ͨ����һ�A�ε��T���_����");
		pi.getMap().changeEnvironment("3pt", 2);
	}
}
}
}