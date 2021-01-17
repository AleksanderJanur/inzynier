import React, {useContext, useEffect, useState} from 'react';
import {Modal, ScrollView, StyleSheet, TouchableHighlight, View} from 'react-native';
import SearchBar from '../components/SearchBar'

import {BottomNavigation, Text, TextInput} from 'react-native-paper';    //czy to jest fajne czy lepsze to zwykle sobe wysylizowac
import {navigate} from '../navigationRef'
import { Context as BlogContext } from '../context/BlogContext';
import { Appbar } from 'react-native-paper';
import {Context as AuthContext} from '../context/AuthContext';
import RNPickerSelect from 'react-native-picker-select';
// import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { Button, Overlay } from 'react-native-elements';
import {useToast} from 'react-native-styled-toast';

const TrackListScreen = ({}) => {

    const { formState, fetchForms } = useContext(BlogContext);
    const { state,updateUser,fetchUser } = useContext(AuthContext);
    const [subject, setSubject] = React.useState('');
    const [visible, setVisible] = React.useState(true);
    const [educationLevel, setEducationLevel] = React.useState('');
    const { toast } = useToast()

        const toggleOverlay = () => {
            toast({message:"Musisz wybrać poziom edukacji!"});
        };



    const chooseEducationLevel = ()=>{
        if(state.token.role==='uczen'&&state.token.educationLevel===null){
             return (
                 <View>
                     {/*<Button title="Open Overlay" onPress={toggleOverlay} />*/}

                     <Overlay isVisible={visible}onBackdropPress={toggleOverlay}>
                         <Text>Hello from Overlay!</Text>
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
                             {/*<Button style={{margin:10}} mode="contained" onPress={() => console.log('Pressed')}>*/}
                             {/*    Save*/}
                             {/*</Button>*/}
                             <TouchableHighlight
                                 style={{ ...styles.openButton, backgroundColor: "#2196F3",margin:10 }}
                                 onPress={() => {
                                     updateUser("educationLevel",educationLevel);
                                     setVisible(false);
                                     toast("Wybrałeś poziom edukacji:"+educationLevel)
                                 }}
                             >
                                 <Text style={styles.textStyle}>Hide Modal</Text>
                             </TouchableHighlight>
                         </View>

                     </Overlay>
                 </View>
                // <View>
                //     <Button onPress={showDialog}>Show Dialog</Button>
                //     <Portal>
                //         <Dialog visible={visible} onDismiss={hideDialog}>
                //             <Dialog.Title>Alert</Dialog.Title>
                //             <Dialog.Content>
                //                 <Paragraph>This is simple dialog</Paragraph>
                //             </Dialog.Content>
                //             <Dialog.Actions>
                //                 <Button onPress={hideDialog}>Done</Button>
                //             </Dialog.Actions>
                //         </Dialog>
                //     </Portal>
                // </View>
                // <View style={styles.centeredView}>
                //     <Modal
                //         animationType="slide"
                //         transparent={true}
                //         visible={modalVisible}
                //         onRequestClose={() => {
                //             setModalVisible(!modalVisible);
                //         }}
                //     >
                //         {/*<TouchableOpacity*/}
                //         {/*    style={styles.centeredView}*/}
                //         {/*    activeOpacity={1}*/}
                //         {/*    onPressOut={() => setModalVisible(!modalVisible)}*/}
                //         {/*>*/}
                //         <View style={styles.centeredView}>
                //             <View style={styles.modalView}>
                //                 <View style={styles.selectView}>
                //                     <RNPickerSelect
                //                         value={subject}
                //                         style={{inputAndroid: {color: 'grey'}, inputAndroidContainer: {backgroundColor: '#3f3f40', borderBottomColor: '#000', borderBottomWidth: 1}}}
                //                         placeholder={{
                //                             label: 'Wybierz przedmiot...',
                //                         }}
                //                         onValueChange={
                //                             (value, index) => {
                //                                 console.log(value);
                //                                 setSubject(value);
                //                             }
                //                         }
                //
                //                         items={[
                //                             {label: 'football', value: 'football'},
                //                             {label: 'Baseball', value: 'baseball'},
                //                             {label: 'Hockey', value: 'hockey'},
                //                         ]}
                //                     />
                //                 </View>
                //                 <TouchableHighlight
                //                     style={{ ...styles.openButton,textAlign: 'center', backgroundColor: "#660066" }}
                //                     onPress={() => {
                //                         setModalVisible(!modalVisible);
                //
                //                     }}
                //                 >
                //                     <Text style={styles.textStyle}>Wybierz poziom edukacji</Text>
                //                 </TouchableHighlight>
                //             </View>
                //         </View>
                //         {/*</TouchableOpacity>*/}
                //     </Modal>
                // </View>
             );


        }
    }



    useEffect(() => {
        fetchForms();
        fetchUser();


    }, []);

    return (
        //tutaj to scrolowanie jak tak zwane !!#$@!
        <View>
            <Appbar.Header>
                {/*czemu to tak dziwnie dziala*/}
                <Appbar.Content title="MyApp" subtitle="Stwórz ogłoszenie" />
                {/*<Appbar.Action icon="magnify" />*/}
                {/*<Appbar.Action icon="dots-vertical"  />*/}
            </Appbar.Header>

        <ScrollView>
            {chooseEducationLevel()}
            <SearchBar/>
        </ScrollView>
        </View>


    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    littleSpacer: {
        marginTop: 15,
    },
    selectView: {
        height:100,
        width:250,
        marginTop: 15,
        backgroundColor: '#e7e7e7',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 2
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


export default TrackListScreen;
