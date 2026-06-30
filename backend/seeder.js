require ('dotenv').config()
const mongoose = require ('mongoose')
const Product = require ('./models/Product')

mongoose.connect(process.env.MONGO_URI)

async function getProduct() {
    try {
        await Product.deleteMany({})

        const result = await Product.insertMany([
    { title: 'Foundation & BB Creams',
      description: 'Used to even out skin tone. Brands like Maybelline and LA Girl are highly popular for their matte and luminous finishes.', price: 15,
      stock: 100,
      image:'https://via.placeholder.com/300',
      category: 'Cosmetics'
    },

    { title: 'Concealer',
      description: 'Helps to hide blemishes, dark spots, and under-eye circles.',
      price: 10,
      stock: 100,
      image: 'https://via.placeholder.com/300',
      category: 'Cosmetics'
    },

    { title: 'Blush',
      description: 'Applied to the apples of the cheeks for a rosy, youthful flush.',
      price: 15,
      stock: 100,
      image: 'https://via.placeholder.com/300',
      category: 'Cosmetics'
    }])
        console.log('Products seeded!');
        console.log(result)
    } catch (err) {
        console.log(err);
        
    }
}

getProduct()