import React, {useContext, useEffect, useState} from 'react';
import Spacer from '../components/Spacer'
import {Alert, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import {Context as AuthContext} from '../context/AuthContext';
import Input from 'react-select/src/components/Input';
import {HelperText, TextInput} from 'react-native-paper';
import {useToast} from 'react-native-styled-toast';



const list = [
            {
                    helper: 'myName',
                    title: 'Imię i nazwiwsko',
                    icon: 'people'
            },
            {
                    helper: 'email',
                    title: 'E-mail',
                    icon: 'email'
            },
    {
        helper: 'contact',
        title: "Kontakt",
        icon: 'phone'
    },
    {
        helper:'aboutMe',
        title:"O mnie",
        icon:"description"
    },
    {
        helper:'educationLevel',
        title:"Poziom edukacji",
        icon:"school"
    }

    ]

const AccountDetails = () => {
    // const accountDetailTab = [];
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = useState('');
    const {state,updateUser,fetchUser } = useContext(AuthContext);
    const [field, setField] = React.useState('');
    const { toast } = useToast();
    const [ title, setTitle ] = useState('');
    // accountDetailTab.push(state.token.myName);
    // accountDetailTab.push(state.token.email);
    // accountDetailTab.push(state.token.contact);
    // accountDetailTab.push(state.token.aboutMe);
    // accountDetailTab.push(state.token.educationLevel);
    const checkEmailAndContact = ()=>{
        if(field==='email'&&!item.includes('@')){
                toast({message:"Mail musi zawierać @"});
            }
            else if(field==='contact'&&(item.length!==9||item.length!==10)){
                toast({message:"Numer telefonu musi mieć 9 lub 10 cyfr"});
        }
            else{
                updateUser(field,item);
                toast({message:"Edytowałeś "+title+"!",  textStyle: {
                    textAlign: 'center'
                }});
                setModalVisible(!modalVisible);
            }
    }
    const createView = (index)=> {
        switch (index) {
            case 0:
                return state.token.myName;
            case 1:
                return state.token.email;
            case 2:
                return state.token.contact;
            case 3:
                return state.token.aboutMe;
            case 4:
                return state.token.educationLevel
            default:
                return null;

        }
    }


    const createModal = ()=>{
        if(modalVisible){
            return (
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <TouchableOpacity
                            style={styles.centeredView}
                            activeOpacity={1}
                            onPressOut={() => setModalVisible(!modalVisible)}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput
                                    style={{borderColor: 'gray', borderWidth: 1,marginBottom:5, width:150,height:50,textAlign: 'center'}}
                                    onChangeText={text => setItem(text)}
                                    value={item}
                                    placeholder ={item}
                                />
                                <TouchableHighlight
                                    style={{ ...styles.openButton,textAlign: 'center', backgroundColor: "#660066" }}
                                    onPress={() => {
                                        checkEmailAndContact();
                                    }}
                                >
                                    <Text style={styles.textStyle}>Edytuj</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            );
        }
    }
    useEffect(() => {
        fetchUser();
    }, [modalVisible]);
    return(
        <Spacer>
            {/*ten map chyba do wywalenia trzeba bedzie zrobic wszystko osobno bo tak to musi leciec map, zeby cos uzupelnic i brzykdo to wyglada*/}
            <View>
                {
                    list.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon} />
                            <ListItem.Content>
                                <ListItem.Subtitle>{item.title}</ListItem.Subtitle>
                                <ListItem.Title>{createView(i)}</ListItem.Title>
                            </ListItem.Content>
                            <TouchableHighlight key={item.title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);
                            setItem(createView(i));setField(item.helper); setTitle(item.title); }}>
                                <Icon name="edit"/>
                            </TouchableHighlight>
                        </ListItem>

                    ))
                }
            {/*    <ListItem key={0} bottomDivider>*/}
            {/*                    <Icon name={list[0].icon} />*/}
            {/*                    <ListItem.Content>*/}
            {/*                        <ListItem.Subtitle>{list[0].title}</ListItem.Subtitle>*/}
            {/*                        <ListItem.Title>{createView(0)}</ListItem.Title>*/}
            {/*                    </ListItem.Content>*/}
            {/*                    <TouchableHighlight key={list[0].title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);*/}
            {/*                    setItem(createView(0));setField(list[0].helper); setTitle(list[0].title); }}>*/}
            {/*                        <Icon name="edit"/>*/}
            {/*                    </TouchableHighlight>*/}
            {/*                </ListItem>*/}

            {/*    <ListItem key={1} bottomDivider>*/}
            {/*        <Icon name={list[1].icon} />*/}
            {/*        <ListItem.Content>*/}
            {/*            <ListItem.Subtitle>{list[1].title}</ListItem.Subtitle>*/}
            {/*            <ListItem.Title>{createView(1)}</ListItem.Title>*/}
            {/*        </ListItem.Content>*/}
            {/*        <TouchableHighlight key={list[0].title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);*/}
            {/*            setItem(createView(1));setField(list[1].helper); setTitle(list[1].title); }}>*/}
            {/*            <Icon name="edit"/>*/}
            {/*        </TouchableHighlight>*/}
            {/*    </ListItem>*/}

            {/*    <ListItem key={2} bottomDivider>*/}
            {/*        <Icon name={list[2].icon} />*/}
            {/*        <ListItem.Content>*/}
            {/*            <ListItem.Subtitle>{list[2].title}</ListItem.Subtitle>*/}
            {/*            <ListItem.Title>{createView(2)}</ListItem.Title>*/}
            {/*        </ListItem.Content>*/}
            {/*        <TouchableHighlight key={list[0].title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);*/}
            {/*            setItem(createView(2));setField(list[2].helper); setTitle(list[2].title); }}>*/}
            {/*            <Icon name="edit"/>*/}
            {/*        </TouchableHighlight>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem key={3} bottomDivider>*/}
            {/*        <Icon name={list[3].icon} />*/}
            {/*        <ListItem.Content>*/}
            {/*            <ListItem.Subtitle>{list[3].title}</ListItem.Subtitle>*/}
            {/*            <ListItem.Title>{createView(3)}</ListItem.Title>*/}
            {/*        </ListItem.Content>*/}
            {/*        <TouchableHighlight key={list[3].title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);*/}
            {/*            setItem(createView(3));setField(list[3].helper); setTitle(list[3].title); }}>*/}
            {/*            <Icon name="edit"/>*/}
            {/*        </TouchableHighlight>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem key={4} bottomDivider>*/}
            {/*        <Icon name={list[4].icon} />*/}
            {/*        <ListItem.Content>*/}
            {/*            <ListItem.Subtitle>{list[4].title}</ListItem.Subtitle>*/}
            {/*            <ListItem.Title>{createView(4)}</ListItem.Title>*/}
            {/*        </ListItem.Content>*/}
            {/*        <TouchableHighlight key={list[4].title} underlayColor={"COLOR"}  onPress = {() =>{setModalVisible(true);*/}
            {/*            setItem(createView(4));setField(list[4].helper); setTitle(list[4].title); }}>*/}
            {/*            <Icon name="edit"/>*/}
            {/*        </TouchableHighlight>*/}
            {/*    </ListItem>*/}
            </View>
            {createModal()}
        </Spacer>
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default AccountDetails;

