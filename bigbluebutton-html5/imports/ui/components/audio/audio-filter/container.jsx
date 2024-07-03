import React, { PureComponent } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AudioFilter from './component';
import Service from '../service';
import SettingsService from '/imports/ui/services/settings';
import { updateSettings } from '/imports/ui/components/settings/service';

class AudioFilterContainer extends PureComponent {
  render() {
    return (
      <AudioFilter {...this.props} />
    );
  }
}

export default withTracker(() => ({
  isAudioConnected: Service.isConnected(),
  isListenOnly: Service.isListenOnly(),
  updateSettings,
  application: SettingsService.application,
}))(AudioFilterContainer);
