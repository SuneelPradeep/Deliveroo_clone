import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity'

const Categories = () => {
  
   const [category,setcategory] = useState([])

   useEffect(()=>{
         client.fetch(`*[_type =='category']{
          ...,
        }`).then(data => setcategory(data))
   },[])

  //  console.log('the category data is',category);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal: 15,paddingTop: 10}}>
      {category?.map((cat)=> (
        <CategoryCard  key={cat._id} title={cat.name} 
      imgUrl={urlFor(cat?.image).width(200).url()} />
      )) 
      }
      
     
    </ScrollView>
  )
}

export default Categories