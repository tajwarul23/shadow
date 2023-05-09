// // import PhoneIcon from '@mui/icons-material/Phone';
// import PhoneIcon from '@mui/icons-material/Phone';
import './App.css';
import photo from './shadow.jpg';
function App() {
  return (
    <div className="App bg-neutral-700">
    <h1 className='justify-center text-2xl pb-5'>Welcome To Shadow Property</h1>
    <div className='flex justify-center items-center'>
    <img className='justify-center' src={photo} height={500} width={500} alt='' />
    </div>
    <h1 className='justify-center text-2xl pb-5'>Website Coming soon...</h1>
    <div  className='justify-center text-2xl'>
      <h2>Call:+14372339078</h2>
      <h2>Email:shadowpropertycare@gmail.com
</h2>
    </div>
    </div>
  );
}

export default App;
