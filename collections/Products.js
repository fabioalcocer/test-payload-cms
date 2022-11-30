const Products = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text"
    },
    {
      name: "sizes",
      type: "array",
      fields: [
        {
          name: "size",
          type: "text"
        }
      ]
    },
    {
      name: "category",
      type: "text"
    },
    {
      name: "price",
      type: "number"
    },
    {
      name: "quantity",
      type: "number"
    },
    {
      name: "imageSrc",
      type: "upload",
      relationTo: "media"
    }
  ],
}

export default Products
