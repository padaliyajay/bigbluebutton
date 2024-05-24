import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import Styled from './styles';
import Settings from '/imports/ui/services/settings';
import ApplicationMenu from '/imports/ui/components/settings/submenus/application/component';

const propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  isAudioConnected: PropTypes.bool.isRequired,
  isListenOnly: PropTypes.bool.isRequired,
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
});

class AudioFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audioFilterEnabled: ApplicationMenu.isAudioFilterEnabled(
        Settings.application.microphoneConstraints,
      ),
    };

    this.handleAudioFilterToggle = this.handleAudioFilterToggle.bind(this);
  }

  handleAudioFilterToggle() {
    const { audioFilterEnabled } = this.state;

    const _newConstraints = {
      autoGainControl: !audioFilterEnabled,
      echoCancellation: !audioFilterEnabled,
      noiseSuppression: !audioFilterEnabled,
    };
    Settings.application.microphoneConstraints = _newConstraints;
    Settings.save();

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
