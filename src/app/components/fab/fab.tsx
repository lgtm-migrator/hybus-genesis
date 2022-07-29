import 'react-tiny-fab/dist/styles.css';
import './fab.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Action,Fab } from 'react-tiny-fab';

import DarkImg from '/image/dark_mode_black_48dp.svg'
import Email from '/image/email_black_48dp.svg'
import Info from '/image/infoblack.svg'
import LightImg from '/image/light_mode_black_48dp.svg'
import Support from '/image/local_cafe_black_48dp.svg'

import { useDarkMode } from '../useDarkMode';
export const Fabs = () => {

  const navigate = useNavigate();
  
  const [themeMode, toggleTheme] = useDarkMode()
  const [isHovering, setIsHovering] = useState(0);
  let changeText = '';
  let changeColor = '';
  let iconColor = '';
  let dataTheme = '';
  let imgIcon = '';
    const handleEmailOnClick = (): Promise<React.FC> => {
        return new Promise((res) => {
          console.log("성공");
        })
      }
      const handleDevOnClick = (): Promise<React.FC> => {
        return new Promise((res) => {
          navigate('/devpage');
        })
      }
      const handleDarkOnClick = (): Promise<React.FC> => {
        return new Promise((res) => {
          toggleTheme()
        })
      }
      if(useDarkMode()[0] === 'dark'){
        changeText = '라이트모드';
        changeColor = '#374151';
        iconColor = 'white';
        dataTheme = "dark";
        imgIcon = LightImg;
      } else {  
        changeText = '다크모드'
        changeColor = '#ffffff'
        iconColor = 'black';
        dataTheme = 'white';
        imgIcon = DarkImg;
      }
  return (
      <Fab
      icon={<span>+</span>}
      mainButtonStyles={{backgroundColor:'#7099C1', fontSize: "40px"}}
      style={{bottom:"1.25rem", right:"1.25rem", margin: "0px", padding: "0px"}}
      alwaysShowTitle={true}
  >
  <Action
    text= {changeText}
    style={{backgroundColor: changeColor, color: iconColor}}
    onClick={handleDarkOnClick}
  ><div className='icons'><img src={imgIcon} style={{padding: 8}} data-theme={dataTheme}/></div></Action>
  <Action
    text="개발자 정보"
    style={{backgroundColor: changeColor, color: iconColor}}
    onClick={handleDevOnClick}
  ><div className='icons'><img src={Info} style={{padding: 8}} data-theme={dataTheme}/></div></Action>
  <Action
    text="후원하기"
    style={{backgroundColor: changeColor, color: iconColor}}
    onClick={handleEmailOnClick}
  ><div className='icons'><img src={Support} style={{padding: 8}} data-theme={dataTheme}/></div></Action>
  <Action
    text="문의하기"
    style={{backgroundColor: changeColor, color: iconColor}}
    onClick={handleEmailOnClick}
  ><div className='icons'><img src={Email} style={{padding: 8}} data-theme={dataTheme}/></div></Action>
</Fab>
  )
}
