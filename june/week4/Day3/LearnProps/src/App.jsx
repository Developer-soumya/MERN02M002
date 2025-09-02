
import './App.css'
import Card from './components/Card';
import Home from './components/Home'


function App() {


  let a=10;
  let str="xyz"
  let obj={
    name:"xy",
    age:20,
    email:"xy@gmail.com"
  }

  let arr=[1,2,3,4,5]

  let img1="https://cdn.pixabay.com/photo/2019/05/24/21/55/cat-4227330_1280.jpg";
  let img2="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg";
  let img3="https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg";
  return (
    
    <div className='w-screen  bg-amber-400 flex flex-wrap gap-2'>
        {/* <h1>Hello welcome to react</h1> */}
        {/* <Home a={a} str={str} obj={obj} arr={arr}/> */}

      <Card img={img1} name="Cat"  desc="this is paper cat"/>
      <Card img={img2} name="Tiger" desc="tiger with balika"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      <Card img={img3} name="Cow" desc="nice  hair style of cow"/>
      


      
      </div>
  )
}

export default App
