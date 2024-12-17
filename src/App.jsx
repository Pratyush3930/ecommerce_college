import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Category from "./components/category/Category";
import Navbar from "./components/navbar/Navbar";

function App() {

  const productCategories = [
    { 
      id: 1,
      title : "Electronics",
      items : [
        {
          img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578506_sd.jpg",
          name: "Google Pixel 8a",
          price: "$400",
        },
        {
          img: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha",
          name: "Sony Headphones",
          price: "$70",
        },
        {
          img : "https://img.drz.lazcdn.com/static/np/p/cea15b71ce045044a23b360ec094ca8c.png_200x200q80.png_.webp",
          name: "Apple Watch",
          price: "$100",
        },
        {
          img: "https://img.drz.lazcdn.com/static/np/p/93e306914755f85d59a2e5d4a6e07e63.jpg_200x200q80.jpg_.webp",
          name: "Gaming Keyboard",
          price: "$50",
        },
      ]
    },
    {
      id: 2,
      title : "Sports",
      items : [
        {
          img: "https://img.drz.lazcdn.com/static/np/p/219608ce612ff128536584b8f978f25b.jpg_200x200q80.jpg_.webp",
          name: "Sports Shoes",
          price: "$30",
        },
        {
          img: "https://img.drz.lazcdn.com/static/np/p/fdbdbb9bf75453fadbe44eae49940456.jpg_200x200q80.jpg_.webp",
          name: "Basketball",
          price: "$15",
        },
        {
          img : "https://img.drz.lazcdn.com/static/np/p/32655945018582ca7ee2bd6183ea9752.jpg_200x200q80.jpg_.webp",
          name: "Football",
          price: "$10",
        },
        {
          img: "https://img.drz.lazcdn.com/static/np/p/3bdcb6f5f8ca566ae9bb25024fcd568f.jpg_200x200q80.jpg_.webp",
          name: "Volleyball",
          price: "$10",
        },
      ]
    },
    {
      id: 3,
      title : "Home Decorations",
      items : [
        {
          img: "https://img.drz.lazcdn.com/static/np/p/a9a38949899b170730fe85de83ba1223.jpg_200x200q80.jpg_.webp",
          name: "One Piece Wanted Posters",
          price: "$8",
        },
        {
          img: "https://img.drz.lazcdn.com/static/np/p/b7c048f35ad73b5101d1fc1281608494.jpg_200x200q80.jpg_.webp",
          name: "Wall Decorations",
          price: "$30",
        },
        {
          img : "https://img.drz.lazcdn.com/static/np/p/e7ddcc9e3e5b6af571cff40c0101a1c8.jpg_200x200q80.jpg_.webp",
          name: "Ceramic Vase",
          price: "$25",
        },
        {
          img: "https://img.drz.lazcdn.com/static/np/p/f0310a1bc156e442567b30bece87414b.png_200x200q80.png_.webp",
          name: "Small Side Table",
          price: "$20",
        },
      ]
    },
  ]

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="mx-4">   
        <Carousel />
        <Category products={productCategories[0]}/>
        <Category products={productCategories[1]}/>
        <Category products={productCategories[2]}/>
      </div>
    </div>
  );
}

export default App;
