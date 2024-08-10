import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { makeCall } from '/imports/ui/services/api';
import EndMeetingComponent from './component';
import Service from './service';
import logger from '/imports/startup/client/logger';
import Presentations from '/imports/api/presentations';
import { hasAnnotations } from '/imports/ui/components/whiteboard/service';

const EndMeetingContainer = (props) => <EndMeetingComponent {...props} />;

export default withTracker((props) => ({
  endMeeting: () => {
    logger.warn({
      logCode: 'moderator_forcing_end_meeting',
      extraInfo: { logType: 'user_action' },
    }, 'this user clicked on EndMeeting and confirmed, removing everybody from the meeting');

    // make call for save annotations before end meeting
    Presentations
      .find({
        'conversion.error': false,
      })
      .fetch()
      .filter((presentation) => hasAnnotations(presentation.id))
      .forEach((presentation) => makeCall('exportPresentation', presentation.id, 'Annotated'));

    makeCall('endMeeting');
    props.setIsOpen(false);
  },
  meetingTitle: Service.getMeetingTitle(),
  users: Service.getUsers(),
}))(EndMeetingContainer);
