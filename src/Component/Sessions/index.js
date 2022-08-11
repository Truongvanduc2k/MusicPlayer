import React from 'react'
import Button from './Component/Sessions/session01/Button/index';
import Search from './Component/Sessions/session01/Seacrh';
import Card from './Component/Sessions/session01/Card';
import BlockUI06 from './Component/Sessions/Session02/Block-UI-06';
import BlockUI05 from './Component/Sessions/Session02/Block-UI-05';

function Sessions() {
    return (
        <div>
            {/* // Bài tập session01 */}
            <div className="session01">
                <div className='row1'>
                    <Button />
                    <Button textColor='#000000'
                        backgroundColor='#ffffff'
                        imgName='google'
                        textContent='Continue with Google !'
                    />
                    <Button textColor='#000000'
                        backgroundColor='#ffffff'
                        imgName='facebook'
                        textContent='Continue with Facebook !'
                    />
                </div>
                <div className='row2'>
                    <Search toggle='block' textHolder='' textColor='' weightText='' toggle2='none' imgName='' />

                    <Search toggle='block' textHolder='Search' textColor='#778289' weightText='400' toggle2='none' imgName='' />

                    <Search toggle='block' textHolder='Textfield' textColor='#000000' weightText='600' toggle2='none' imgName='' />

                    <Search toggle='block' textHolder='Search in the web' textColor='#778289' weightText='400' toggle2='block' imgName='hug4' />

                    <Search toggle='block' textHolder='Search crypto' textColor='#778289' weightText='400' toggle2='block' imgName='hug5' />

                    <Search toggle='none' textHolder='Phone number' textColor='#778289' weightText='400' toggle2='block' imgName='hug6' />

                    <Search toggle='block' textHolder='Search in the web' textColor='#778289' weightText='400' toggle2='block' imgName='hug7' />

                </div>
                <div className='row3'>
                    <Card />
                </div>
                <div className='row4'></div>
            </div>


            {/* // Bài tập session2 */}
            <div className='session02'>
                <div className='blockUI5'>
                    <BlockUI05 />
                    <BlockUI05 srcImage='2.png' namePeople='JAMES SMITH' location='Designer' email='smith12@gmail.com' phone='3478965231' color1='#31c8dd' color2='#619cec' />
                    <BlockUI05 srcImage='3.png' namePeople='TOM HANKS' location='UI Designer' email='peter1@gmail.com' phone='2486157953' color1='#f78153' color2='#fcd518' />
                    <BlockUI05 srcImage='4.png' namePeople='SILVESTER STALIN' location='Testing' email='point12@gmail.com' phone='1235486549' color1='#cb79e7' color2='#fe60e8' />
                </div>
                <div className='blockUI6'>
                    <BlockUI06 />
                    <BlockUI06 prodImage='2.jpg' prodName='SEQUITUR MUTATIONEM' />
                    <BlockUI06 prodImage='3.jpg' prodName='CONSUETUDIUM LECTORUM' />
                    <BlockUI06 prodImage='4.jpg' prodName='PARUM CLARAM' />
                </div>
            </div>
        </div>
    )
}

export default Sessions