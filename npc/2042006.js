/*
	����:	�ݱ˵���
	�؈D:	�ݱ˵����İ칫��
	����:	980030000
*/

var status = -1;

var request;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status = 0;
	if (status == 0) {
		request = cm.getNextCarnivalRequest();
		if (request != null) {
			cm.sendYesNo(request.getChallengeInfo() + "\r\n����Ҫ�@Щⷰ酢�c����Ĺ�������A2���?")
		} else {
			cm.dispose();
			}
			}
	if (status == 1) {
		try {
		cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
		cm.dispose();
		} catch (e) {
		cm.sendOk("��������Ч��");
		}
		cm.dispose();
}
}