import RedisPubSub from '/imports/startup/server/redis';
import handleMeetingCreation from './handlers/meetingCreation';
import handleGetAllMeetings from './handlers/getAllMeetings';
import handleMeetingEnd from './handlers/meetingEnd';
import handleMeetingDestruction from './handlers/meetingDestruction';
import handleMeetingLocksChange from './handlers/meetingLockChange';
import handleGuestPolicyChanged from './handlers/guestPolicyChanged';
import handleGuestLobbyMessageChanged from './handlers/guestLobbyMessageChanged';
import handleUserLockChange from './handlers/userLockChange';
import handleUserChatLockChange from './handlers/handleUserChatLockChange';
import handleRecordingStatusChange from './handlers/recordingStatusChange';
import handleRecordingTimerChange from './handlers/recordingTimerChange';
import handleTimeRemainingUpdate from './handlers/timeRemainingUpdate';
import handleChangeWebcamOnlyModerator from './handlers/webcamOnlyModerator';
import handleSelectRandomViewer from './handlers/selectRandomViewer';
import handleBroadcastLayout from './handlers/broadcastLayout';
import handleNotifyAllInMeetingEvtMsg from './handlers/handleNotifyAllInMeetingEvtMsg';
import handleNotifyUserInMeeting from './handlers/handleNotifyUserInMeeting';
import handleNotifyRoleInMeeting from './handlers/handleNotifyRoleInMeeting';
import handleBroadcastPushLayout from './handlers/broadcastPushLayout';

RedisPubSub.on('MeetingCreatedEvtMsg', handleMeetingCreation);
RedisPubSub.on('SyncGetMeetingInfoRespMsg', handleGetAllMeetings);
RedisPubSub.on('MeetingEndingEvtMsg', handleMeetingEnd);
RedisPubSub.on('MeetingDestroyedEvtMsg', handleMeetingDestruction);
RedisPubSub.on('LockSettingsInMeetingChangedEvtMsg', handleMeetingLocksChange);
RedisPubSub.on('UserLockedInMeetingEvtMsg', handleUserLockChange);
RedisPubSub.on('LockUserChatInMeetingEvtMsg', handleUserChatLockChange);
RedisPubSub.on('RecordingStatusChangedEvtMsg', handleRecordingStatusChange);
RedisPubSub.on('UpdateRecordingTimerEvtMsg', handleRecordingTimerChange);
RedisPubSub.on('WebcamsOnlyForModeratorChangedEvtMsg', handleChangeWebcamOnlyModerator);
RedisPubSub.on('GetLockSettingsRespMsg', handleMeetingLocksChange);
RedisPubSub.on('GuestPolicyChangedEvtMsg', handleGuestPolicyChanged);
RedisPubSub.on('GuestLobbyMessageChangedEvtMsg', handleGuestLobbyMessageChanged);
RedisPubSub.on('MeetingTimeRemainingUpdateEvtMsg', handleTimeRemainingUpdate);
RedisPubSub.on('SelectRandomViewerRespMsg', handleSelectRandomViewer);
RedisPubSub.on('BroadcastLayoutEvtMsg', handleBroadcastLayout);
RedisPubSub.on('NotifyAllInMeetingEvtMsg', handleNotifyAllInMeetingEvtMsg);
RedisPubSub.on('NotifyUserInMeetingEvtMsg', handleNotifyUserInMeeting);
RedisPubSub.on('NotifyRoleInMeetingEvtMsg', handleNotifyRoleInMeeting);
RedisPubSub.on('BroadcastPushLayoutEvtMsg', handleBroadcastPushLayout);
