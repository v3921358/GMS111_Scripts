/*
	名字:	埃欧雷的结界
	地圖:	埃欧雷
	描述:	910150001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("#b(看到了制造结界的魔法语言。念诵咒语，可以为埃欧雷设置结界。至少在100年之内谁也无法入侵村子的强力结界……要设置结界吗？)");
	if (status == 1)
		qm.sendPrev("#b(设置了结界。这下村子应该安全了……)");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}