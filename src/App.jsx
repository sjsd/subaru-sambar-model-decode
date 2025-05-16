import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const data = {
   chassis: {
    S: 'truck',
    V: 'van'
   },
   drivetrain: {
    3: '660cc 2WD (5th gen)',
    4: '660cc 4WD (5th gen)'
   },
   modelbreak: {
    A: 'Mar 1990 Low Roof',
    B: 'Sep 1991 Low Roof',
    C: 'Oct 1992 Low Roof',
    D: 'Dec 1993 Low Roof',
    E: 'Oct 1995 Low Roof',
    F: 'Sep 1996 Low Roof',
    H: 'Mar 1990 High Roof (High Roof Break A)',
    J: 'Sep 1991 High Roof (High Roof Break B)',
    K: 'Oct 1992 High Roof (High Roof Break C)',
    L: 'Dec 1993 High Roof (High Roof Break D)',
    M: 'Oct 1995 High Roof (High Roof Break E)',
    N: 'Sep 1996 High Roof (High Roof Break F)',
   },
   bodystyle: {
    1: '1-way Open Bed',
    3: '3-way Open Bed',
    5: '5 Doors',
    8: 'Panel Van',
    C: 'Sun Sun Roof',
   },
   grade: {
    1: 'STD',
    2: 'SDX',
    3: 'High Custom,Super Custom P/S, SDX Classic, Dias EZ',
    4: 'RJ, Dias, Dias S',
    5: 'RJ A/C, Dias Extra S, Dias II',
    6: 'XS, Dias II, Dias II Maleza',
    7: 'XV, Dias Classic',
    8: 'Dias S2',
    A: 'Farming/JA',
    B: 'NTT (Nippon Telephone)',
    C: 'Japan Post',
    D: 'Cab Chassis',
    E: 'Cab Chassis w/bed',
    F: 'Farming/JA Cab Chassis',
    G: 'Akabou',
    H: 'Mini Handy Cab',
    J: 'STD 2-Seater',
    K: 'Japan Post 2-Seater',
    L: 'Akabou 2-Seater',
    M: 'Farming/JA Super Custom P/S',
    N: 'Farming/JA Exclusive',
    P: 'NTT Ladder Storage',
    R: 'Cool Van',
    S: 'STD Special, STD Special II',
    T: 'Cab Chassis, Low Floor',
    W: 'JA Classic',
    U: 'SDX Classic',
   },
   drivetrain2: {
    A: '2WD eCVT Carb (1990-97), 2WD 3AT NA-EFI (1997-98)',
    B: '5 speed 2WD NA-EFI',
    C: '2WD eCVT NA-EFI',
    D: 'Full Time 4WD 3AT NA-EFI',
    E: '5 speed 4WD NA-EFI',
    F: '5 speed 4WD SC',
    G: 'LPG',
    H: '5 speed 4WD NA-EFI w/Extra Low',
    J: '5 Speed 4WD SC w/Extra Low',
    K: '5 Speed 2WD SC',
    L: '2WD eCVT SC',
    M: '5 speed 2WD Carb',
    N: '5 speed 4WD Carb w/Extra Low',
    P: 'Full Time 4WD 5 speed',
    R: 'Full Time 4WD 5 speed SC (1990-97), 2WD 3AT SC (1997-98)',
    S: 'Full Time 4WD eCVT SC',
    T: '5 speed 4WD Carb',
    W: 'Full Time 4WD 5 speed NA-EFI',
    X: 'Full Time 4WD 3AT SC',
    Y: 'Full Time 4WD 5 speed SC',
   }
  } 

  const [emissionsCertification, setEmissionsCertification] = useState('V');
  const [family, setFamily] = useState('K');
  const [chassis, setChassis] = useState('');
  const [driveTrain, setDriveTrain] = useState('');
  const [modelBreak, setModelBreak] = useState('');
  const [bodyStyle, setBodyStyle] = useState('');
  const [grade, setGrade] = useState('');
  const [driveTrain2, setDriveTrain2] = useState('');

  const [showImage, setShowImage] = useState(false);

  const handleKeyUp = (el) => {
    const key = el.keyCode;
    // (number) || (uppercase) || (lowercase)
    if ( (key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122) ) {
      if (el.target.value.length === 1) {
        const next = el.target.tabIndex;
        if (next < document.getElementById("myForm").length) {
          document.getElementById("myForm").elements[next].focus();
        }
      }      
    }

    if (key === 8) {
      if (el.target.value.length === 0 && el.target.tabIndex !== 1) {
        const prev = el.target.tabIndex - 2;
        if (prev < document.getElementById("myForm").length) {
          document.getElementById("myForm").elements[prev].focus();
        }        
      }
    }
  }

  const handleDemoVin = () => {
    setEmissionsCertification('V');
    setFamily('K');
    setChassis('S');
    setDriveTrain('4');
    setModelBreak('B');
    setBodyStyle('3');
    setGrade('2');
    setDriveTrain2('J');
  }

  return (
    <div className='container mx-auto px-4 min-h-svh flex flex-col'>
      <h1 className="text-4xl font-black text-center my-6 text-gray-100 border-b border-gray-50 pb-6">Subaru Sambar model decode</h1>
      <p className="text-center mb-6">This breakdown is specific to the 5th Generation Sambar (1990-1998 models). This model code is found on the VIN plate. <button type="button" onClick={() => setShowImage(!showImage)} className='underline hover:no-underline cursor-pointer'>See an example here</button> or try <button type="button" onClick={() => handleDemoVin()} className='underline hover:no-underline cursor-pointer'>V-KS4B32J</button>.</p>

      {showImage && (
        <div className='max-w-4xl mx-auto my-6'>
          <img src="/src/assets/vinplate.jpeg" />
        </div>
      )}      
      
      <form id="myForm" className='flex justify-center items-center space-x-1'>
        <input type="text" size="1" maxLength="1" tabIndex="1" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setEmissionsCertification(e.target.value.toUpperCase)} value={emissionsCertification} disabled className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold bg-gray-800' />
        <span>&ndash;</span>
        <input type="text" size="1" maxLength="1" tabIndex="2" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setFamily(e.target.value.toUpperCase())} value={family} disabled className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold bg-gray-800'/>
        <input type="text" size="1" maxLength="1" tabIndex="3" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setChassis(e.target.value.toUpperCase())} value={chassis} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>
        <input type="text" size="1" maxLength="1" tabIndex="4" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setDriveTrain(e.target.value.toUpperCase())} value={driveTrain} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>
        <input type="text" size="1" maxLength="1" tabIndex="5" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setModelBreak(e.target.value.toUpperCase())} value={modelBreak} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>
        <input type="text" size="1" maxLength="1" tabIndex="6" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setBodyStyle(e.target.value.toUpperCase())} value={bodyStyle} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>
        <input type="text" size="1" maxLength="1" tabIndex="7" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setGrade(e.target.value.toUpperCase())} value={grade} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>
        <input type="text" size="1" maxLength="1" tabIndex="8" onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setDriveTrain2(e.target.value.toUpperCase())} value={driveTrain2} className='border-3 border-gray-500 w-10 h-14 text-center text-2xl font-semibold'/>        
      </form>

      <div className='flex flex-col md:flex-row justify-center gap-4 mt-10'>
        {chassis !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Chassis:</div>
            <div className='text-2xl text-white capitalize'>{data.chassis[chassis]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{chassis}</div>
          </div>
        )}

        {driveTrain !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Drivetrain:</div>
            <div className='text-2xl text-white capitalize'>{data.drivetrain[driveTrain]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{driveTrain}</div>
          </div>
        )}

        {modelBreak !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Model Break Start (Year) and Roof:</div>
            <div className='text-2xl text-white capitalize'>{data.modelbreak[modelBreak]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{modelBreak}</div>
          </div>
        )}

        {bodyStyle !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Body style:</div>
            <div className='text-2xl text-white capitalize'>{data.bodystyle[bodyStyle]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{bodyStyle}</div>
          </div>
        )} 

        {grade !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Grade:</div>
            <div className='text-2xl text-white capitalize'>{data.grade[grade]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{grade}</div>
          </div>
        )}                

        {driveTrain2 !== '' && (
          <div className='border border-gray-300 relative w-full md:w-1/6 p-4 overflow-hidden'>
            <div className='font-semibold text-lg text-gray-200'>Drivetrain:</div>
            <div className='text-2xl text-white capitalize'>{data.drivetrain2[driveTrain2]}</div>
            <div className='absolute -top-4 right-0.5 text-9xl opacity-5 font-black'>{driveTrain2}</div>
          </div>
        )} 
      </div>

      <div className='mt-auto py-6 border-t border-gray-500'>
        <p className='text-center'>
          A big thank you to Robert Krenicki who made this data available. The source of the data is based on his collection and available in the <a href="https://docs.google.com/spreadsheets/d/1mASg41uyMmMQCKHPuEAaKd6tTgOhHdlgUGOQIc_ojwo/edit?gid=954714826#gid=954714826" target="_blank" title="Subaru Sambar" nofollow className='underline hover:no-underline'>Google Docs document</a>.
        </p>
        <p className='text-center'>
          Made by <a href="https://www.helgejohnsen.no/" title="Helge Johnsen" target="_blank" className='underline hover:no-underline'>Helge Johnsen</a>
        </p>        
      </div>
    </div>
  )
}

export default App
