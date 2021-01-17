import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {useEffect, useState, useContext} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Appbar} from 'react-native-paper';
import {navigate} from '../navigationRef';
import {Button} from 'react-native-paper';
import {Context as BlogContext} from '../context/BlogContext';
import { useToast } from 'react-native-styled-toast'
import {sub} from 'react-native-reanimated';

const FromsElements = ({}) => {
    const [name, setName] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [prize, setPrize] = React.useState('');
    const [maxMember, setmaxMember] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [educationLevel, setEducationLevel] = React.useState('');
    const {createForm} = useContext(BlogContext);
    const { toast } = useToast();
    // const hasErrors = () => {
    //     return !text.includes('@');
    // };
    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
    const tab =[]
    console.log('subject', subject);
    const checkEverything = ()=>{
        if(name===''){
            toast({message:"Wprowadź maila"});
        }
        if(subject===''){
            toast({message:"Wybierz przedmiot"});
        }
        if(prize===''){
            toast({message:"Wprowadź cene"});
        }
        if(maxMember===''){
            toast({message:"Wybierz ilość uczniów"});
        }
        if(!isNumeric(prize)&&prize!==''){
            toast({message:"Cena musi być liczbą"});
        }
        if(!isNumeric(maxMember)&&maxMember!==''){
            toast({message:"Ilość uczestników musi być liczbą"});
        }
        if(description===''){
            toast({message:"Wprowadź opis"});
        }
        if(educationLevel===''){
                toast({message:"Wybierz poziom edukacji"});
            }
        if(name!==''&&subject!==''&&prize!==''&&maxMember!==''&&description!==''&&educationLevel!==''){
            createForm(name, subject, prize, maxMember, description, educationLevel, tab);
        }

        }


    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigate('TrackList')}/>
                {/*czemu to tak dziwnie dziala*/}
                <Appbar.Content title="MyApp" subtitle="Stwórz ogłoszenie" />
                {/*<Appbar.Action icon="magnify" />*/}
                {/*<Appbar.Action icon="dots-vertical"  />*/}
            </Appbar.Header>
            <TextInput style={styles.littleSpacer} label="Imie i Nazwisko" value={name} onChangeText={setName}/>
            <TextInput style={styles.littleSpacer} label="Maksymalna ilość uczniów" value={maxMember}
                       onChangeText={setmaxMember}/>
            <TextInput style={styles.littleSpacer} label="Cena" value={prize} onChangeText={setPrize}/>
            <TextInput style={styles.littleSpacer} multiline label="Opis" value={description}
                       onChangeText={setDescription}/>
            {/*to szybko pewnie da sie zrobic ide dalej chce tutaj po prostu widziec te rzeczy co mam do wyboru*/}
            <View style={styles.selectView}>
                <RNPickerSelect
                    value={subject}
                    style={{inputAndroid: {color: 'grey'}, inputAndroidContainer: {backgroundColor: '#3f3f40', borderBottomColor: '#000', borderBottomWidth: 1}}}
                    placeholder={{
                        label: 'Wybierz przedmiot...',
                    }}
                    onValueChange={
                        (value, index) => {
                            console.log(value);
                            setSubject(value);
                        }
                    }

                    items={[
                        {label: 'football', value: 'football'},
                        {label: 'Baseball', value: 'baseball'},
                        {label: 'Hockey', value: 'hockey'},
                    ]}
                />
            </View>
            <View style={styles.selectView}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Wybierz poziom nauczania...',
                    }}
                    style={{inputAndroid: {color: 'grey'}, inputAndroidContainer: {backgroundColor: '#3f3f40', borderBottomColor: '#000', borderBottomWidth: 1}}}
                    value={educationLevel}
                    onValueChange={setEducationLevel}
                    items={[
                        {label: 'edukacja wczesnoszkolna', value: 'edukacja wczesnoszkolna'},
                        {label: 'szkoła podstawowa', value: 'szkoła podstawowa'},
                        {label: 'szkoła ponadpodstawowa', value: 'szkoła ponadpodstawowa'},
                        {label:'studia',value:'studia'}
                    ]}
                />
            </View>
            {/*tutaj jakies zabezpieczenie, zeby po ilus slowach zjechalo na doł*/}
            <Button style={{marginTop: 20}} mode="contained" onPress={checkEverything}>
                Stwórz Ogłoszenie
            </Button>
        </View>

    );

};
const styles = StyleSheet.create({
    littleSpacer: {
        marginTop: 15,
    },
    selectView: {
        marginTop: 15,
        backgroundColor: '#e7e7e7',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 2
    }
});


export default FromsElements;
