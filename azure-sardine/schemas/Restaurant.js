export default {
    name: 'restaurant',
    type: 'document',
      title: 'Restaurant',
    fields: [
      {
        name : 'name',
        title: 'Restaurant Name',
        type: 'string',
        Validition : (Rule) => Rule.required()
      },
      {
        name : 'short_description',
        type: 'string',
        title : 'Short Description',
        Validition : (Rule) => Rule.max(200)
      },
     {
        name : 'image',
        type: 'image',
        title : 'Image of the Restaurant'
     },
     {
     name : "lat",
     type : 'number',
     title : 'Lattitude of the Restaurant'
     },
     {
        name : 'Long',
        type : 'number',
        title : 'Longitude of the Restaurant'
     },
     {
        name : 'address',
        type : 'string',
        title : 'Restaurant Address',
        validition : (Rule)=> Rule.required()
     },
     {
        name : 'rating',
        type : 'number',
        title : 'Enter a Rating from (1-5 Stars)',
        validition : (Rule)=> Rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
     },
     {
        name :'type',
        title : 'Category',
        validition : (Rule)=> Rule.required(),
        type : 'reference',
        to : [{type: 'category'}]
     },
     {
        name : 'dishes',
        type: 'array',
        title : 'Dishes',
        of : [{type: 'reference', to : [{type: 'dish'}]}],
     }

    ]
  }