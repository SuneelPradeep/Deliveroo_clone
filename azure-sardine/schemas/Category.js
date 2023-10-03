export default {
    name : "category",
    type : 'document',
    title : 'Menu Category',
    fields :[
        {
            name : 'name',
            title : 'Category Name',
            type :'string',
            validation : (Rule)=> Rule.required()
        },
        {
            name : 'image',
            title : 'Image of Category',
            type : 'image'
        }
    ]
}