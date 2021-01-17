import * as React from 'react';
import {Caption, Card, Colors, Paragraph, ProgressBar, Searchbar, Title} from 'react-native-paper';
import {View, Text, TouchableHighlight} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {Context as BlogContext} from '../context/BlogContext';
import RadioGroup from './RadioGroup';
import Spacer from './Spacer';
import {navigate} from '../navigationRef';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const {state, fetchForms} = useContext(BlogContext);
    useEffect(() => {
        fetchForms();
    }, [searchQuery]);

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            {
state
    .filter(item => searchQuery == '' || item.form[0].name === searchQuery)
    .map((item, i) => (
        <TouchableHighlight key={i} underlayColor={'COLOR'} onPress={() => navigate('Meeting')}>
            <Card style={{borderColor: '#808080', borderWidth: 1, margin: 15}}>
                <Card.Content>
                    <Title>{item.form[0].subject}</Title>
                    <Caption>{item.form[0].name}</Caption>
                    <Paragraph>{item.form[0].description}</Paragraph>
                    <Title>{item.form[0].name.prize}</Title>
                    <Title style={{textAlign: 'center'}}>Maksymalna ilość osób w grupie{'\n'}<Text
                        style={{
                            color: Colors.red800,
                            fontWeight: 'bold',
                        }}>2/{item.form[0].maxMember}</Text> </Title>
                    <ProgressBar progress={0.4} color={Colors.red800}/>
                </Card.Content>
            </Card>
        </TouchableHighlight>
    ))
            }
        </View>
    );
};

export default SearchBar;
