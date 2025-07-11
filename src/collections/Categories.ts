import type { CollectionConfig } from 'payload';


export const Categories: CollectionConfig = {
    slug:"categories",
    fields:[
        {
            name : "name",
            type:"text",
            required: true,
        },

        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            index:true,

        },
        {
            name:"color",
            type:"text",
        },
        { //if category doesnt have parent, then category is parent itself.
            name:"parent",
            type: "relationship",
            relationTo: "categories" ,
            hasMany: false,


        },
        {
            name:"subcategories",
            type:"join",
            collection:"categories",
            on: "parent",
            hasMany: true,
        },
    ],


};

