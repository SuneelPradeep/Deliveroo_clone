export default {
    name : 'dish',
    type :'document',
    title : 'Dish',
    fields : [
        {
              name : 'name',
              type :'string',
              title : 'Name of the Dish',
              validation : (Rule) => Rule.required(),

        },
        {
               name : 'short_description',
               type : 'string',
               title : 'Short Description',
               validation : (Rule) => Rule.required(),
        },
         {
            name : 'price',
            type :'number',
            title : 'Price of the Dish in INR',
         },
         {
            name : 'image',
            type :'image',
            title : 'Image of the Dish',
         }

    ]
}