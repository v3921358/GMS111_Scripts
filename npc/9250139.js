/*
	����:	���ǻ���
	�؈D:	502040000
	����:	502040000
*/

function start() {
	var num = cm.getMap().getNumPlayersInArea(0);
	if (num == cm.getMap().getCharactersThreadsafe().size()) {
		cm.playerMessage(5, "�T�ѽ����_�ˡ�");
	if (cm.getPlayer().getEventInstance() != null) {
		cm.getPlayer().getEventInstance().setProperty("stage8", "0");
		}
	} else {
		cm.playerMessage(5, "�_�P�ϵ�����������");
		}
	cm.dispose();
}