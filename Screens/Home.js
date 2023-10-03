import { View,Image, Text, TextInput, ScrollView} from 'react-native'
import React , { useLayoutEffect,useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {UserIcon, ChevronDownIcon,MagnifyingGlassIcon, AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../Components/Categories'
import FeaturedRow from '../Components/FeaturedRow';
import client from '../sanity';



const Home = () => {
    const navigation = useNavigation()
    const [featuredCategories,setfeaturedCategories] = useState([])
    useLayoutEffect(()=>{
        navigation.setOptions({
         headerShown : false,
        })
    },[])

    useEffect(()=>{
      client.fetch(`*[_type == 'featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...,
          }
        }
      }`).then((data)=> setfeaturedCategories(data))
    },[])

// console.log('the featuredCategoriesdata is',featuredCategories);

  return (
    <SafeAreaView className='bg-white pt-5 '>  
      {/* Header */}
      
        <View className='flex-row items-center mx-4 space-x-2 pb-3'>
            <Image source={{uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'}}
            className='h-7 w-7 rounded-full bg-gray-300 p-4'  
           // style={{width:70,height : 70}} 
            />
        
        <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'> Deliver Now </Text>
       <Text className='text-xl font-bold'> Current Location
       <ChevronDownIcon size={20} color='#00CCBB' /></Text>
       </View>
       <UserIcon size={35} color={'#00CCBB'} />
       </View>
       
       {/* Search */}
       <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
        <View className='flex-1 flex-row bg-gray-200 p-3 space-x-4' >
         <MagnifyingGlassIcon size={25} color='gray'  />
         <TextInput placeholder='Restaurants & Cuisine' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon size={30} color='#00CCBB' />
       </View>

       {/* content */}
       <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:100}}>
           {/* Categories */}
          <Categories /> 
      
      {featuredCategories?.map((category)=> (
        <FeaturedRow key={category._id} id={category._id} title={category.name} description={category.short_description}  />
      ))}
       </ScrollView>
  </SafeAreaView>
  )
}

  
export default Home