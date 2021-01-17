import { GiftedChat} from 'react-native-gifted-chat'
import React, { useContext } from 'react';
import TrackListScreen from './TrackListScreen';
import {View} from 'react-native';
import Text from 'react-native-paper';
class Meetings extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            //nie wiem czemu tu nie moge dodac czegos
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />

        )
    }
}
export default Meetings;
