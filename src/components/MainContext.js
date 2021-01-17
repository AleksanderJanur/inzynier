import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Caption } from 'react-native-paper';
import { ProgressBar, Colors } from 'react-native-paper';
import Spacer from '../components/Spacer';
import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';

const MainContext = ({title, caption,paragraph}) => {

    return (
        <Spacer>
        <Card style={{borderColor:"#808080",borderWidth: 1}}>
            <Card.Content>
                <Title>{title}</Title>
                <Caption>{caption}</Caption>
                <Paragraph>{paragraph}</Paragraph>
                <Title>Cena - 200 PLN </Title>
                <Title style={{textAlign: 'center'}}>Maksymalna ilość osób w grupie - <Text style={{color:Colors.red800, fontWeight: "bold"}}>2/5</Text> </Title>
                <ProgressBar progress={0.4} color={Colors.red800} />
            </Card.Content>
        </Card>
        </Spacer>
);
}

export default MainContext;
