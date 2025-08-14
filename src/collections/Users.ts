import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: () => true, 
    read: () => true,   
  },
  fields: [
    {
      name: "username",
      required: true,
      unique: true,
      type: "text",

    },


  ],
};
