import React,{useState} from 'react'
import { View,Text,StyleSheet,Button,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({navigation}) {
    // const pressHandler =() =>{
    //         navigation.navigate('ReviewDetails')
    //         //or navigation.push('ReviewDetails')
    // }
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const [modelOpen,setModelOpen]=useState(false)  

    const addReview= (review,)=>{
        setReviews((currentReviews)=>{return [{title:review.title,body:review.body,rating:review.rating,key:(currentReviews.length +1).toString()},...currentReviews]})
        setModelOpen(false)
    }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modal}>
          {/* how to add multiple styles */}
        <MaterialIcons name='close' size={24} style={{...styles.modalToggle,...styles.modalClose}} onPress={()=> setModelOpen(false)}/>
        <ReviewForm  addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback> 
      </Modal>
      <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={()=> setModelOpen(true)}/>
       <FlatList
       data={reviews}
       renderItem={({item})=>(
           <TouchableOpacity onPress={()=> navigation.navigate('Details',item)}>
            <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
           
           </TouchableOpacity>
       )}
       />
        
    </View >
  )
}

const styles= StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:"#f2f2f2",
    padding:10,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'white'
    
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  modal:{
          flex:1,
  }
})