import React, { useEffect, useState } from 'react';
import "../style/Header.css";
import image1 from "../images/comparisonTable.jpg";
import image2 from "../images/newAvailableWord.jpg";
import image3 from "../images/plag-premium.jpg";
import image4 from "../images/synonym.jpg";

export const Header=()=>{
    const imageData=[image1, image2, image3, image4];
    const [imageUrl, setImageUrl] = useState(image4);
    useEffect(()=>{
        let i=0;
        setInterval(()=>{
            setImageUrl(imageData[i]);
            i=i+1;
            if(i>=imageData.length){
                i=0;
            }
        }, 5000)
    },[])
    return(
        <>
            <div className="container">
                <div className="container_title">
                    <p>Save time and write with confidence</p>
                    <button>Upgrade to QuillBot Premium</button>
                </div>
                <div className='container_card'>
                    <div className="left">
                        <div className='card'>
                            <div className='card-content'>
                                <img src={imageUrl}/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className='right-content'>
                            <p className='title'>Increase your productivity</p>
                            <p className='sub-title'>Paraphrase more text at once to finish writing faster.</p>
                                                 
                         </div>
                        <div className='right-content'>
                            <p className='title'>Access all modes</p>
                            <p className='sub-title'>Get maximum control over how you paraphrase</p>
                           
                        </div>
                        <div className='right-content'>
                            <p className='title'>Scan for plagiarism</p>
                            <p className='sub-title'>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>

                        </div>
                        <div className='right-content'>
                            <p className='title'>Compare all mode outputs at once</p>
                            <p className='sub-title'>Paraphrase in and compare outputs from all seven modes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}