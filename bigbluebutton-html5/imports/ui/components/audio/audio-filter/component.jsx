import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import Styled from './styles';
import ApplicationMenu from '/imports/ui/components/settings/submenus/application/component';

const propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  isAudioConnected: PropTypes.bool.isRequired,
  isListenOnly: PropTypes.bool.isRequired,
  updateSettings: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
  transcription: PropTypes.object.isRequired,
};

const intlMessages = defineMessages({
  audioFilterEnabledButtonText: {
    id: 'app.audioFilter.audioFilterEnabledButtonText',
    description: 'Turn on original sound (headphones required)',
  },
  audioFilterDisabledButtonText: {
    id: 'app.audioFilter.audioFilterDisabledButtonText',
    description: 'Turn off original sound',
  },
  audioFilterEnabledAlertText: {
    id: 'app.audioFilter.audioFilterEnabledAlertText',
    description: 'Original sound turned on',
  },
  audioFilterDisabledAlertText: {
    id: 'app.audioFilter.audioFilterDisabledAlertText',
    description: 'Original sound turned off',
  },
});

class AudioFilter extends React.Component {
  constructor(props) {
    super(props);

    const { application } = this.props;

    this.state = {
      audioFilterEnabled: ApplicationMenu.isAudioFilterEnabled(
        application.microphoneConstraints,
      ),
    };

    this.updateSettings = props.updateSettings;
    this.handleAudioFilterToggle = this.handleAudioFilterToggle.bind(this);
  }

  handleAudioFilterToggle() {
    const { audioFilterEnabled } = this.state;
    const { application, transcription } = this.props;

    const _newConstraints = {
      autoGainControl: !audioFilterEnabled,
      echoCancellation: !audioFilterEnabled,
      noiseSuppression: !audioFilterEnabled,
    };

    this.updateSettings({
      transcription,
      application: {
        ...application,
        microphoneConstraints: _newConstraints,
      },
    }, audioFilterEnabled ? intlMessages.audioFilterEnabledAlertText : intlMessages.audioFilterDisabledAlertText);

    this.setState({ audioFilterEnabled: !audioFilterEnabled });
  }

  render() {
    const { intl, isAudioConnected, isListenOnly } = this.props;
    const { audioFilterEnabled } = this.state;
    const label = audioFilterEnabled ? intl.formatMessage(intlMessages.audioFilterEnabledButtonText) : intl.formatMessage(intlMessages.audioFilterDisabledButtonText);

    if (isAudioConnected && !isListenOnly) {
      return (
        <Styled.AudioFilterButton onClick={this.handleAudioFilterToggle} $enabled={audioFilterEnabled}>{label}</Styled.AudioFilterButton>
      );
    }
  }
}

AudioFilter.propTypes = propTypes;

export default injectIntl(AudioFilter);
