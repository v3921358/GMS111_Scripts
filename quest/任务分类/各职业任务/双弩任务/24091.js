/*
	����:	��ħ
	�؈D:	Σ�յĵ�վ
	����:	931040010
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendOk("����Ҫ��С�����͵��ȹ�����һ�أ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.spawnMonster(9300435, 540,15); 
		qm.dispose();
}
}