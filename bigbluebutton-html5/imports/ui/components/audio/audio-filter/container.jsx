import React, { PureComponent } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AudioFilter from './component';
import Service from '../service';

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
}))(AudioFilterContainer);
