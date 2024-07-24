import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl';
import JoinVideoButton from './component';
import VideoService from '../service';
import {
  updateSettings,
} from '/imports/ui/components/settings/service';
import Settings from '/imports/ui/services/settings';

const JoinVideoOptionsContainer = (props) => {
  const {
    updateSettings,
    hasVideoStream,
    disableReason,
    status,
    intl,
    ...restProps
  } = props;

  return (
    <JoinVideoButton {...{
      hasVideoStream, updateSettings, disableReason, status, ...restProps,
    }}
    />
  );
};

export default injectIntl(withTracker(() => ({
  hasVideoStream: VideoService.hasVideoStream(),
  updateSettings,
  disableReason: VideoService.disableReason(),
  status: VideoService.getStatus(),
  disabledCams: Session.get('disabledCams') || [],
  settingsSelfViewDisable: Settings.application.selfViewDisable,
}))(JoinVideoOptionsContainer));
