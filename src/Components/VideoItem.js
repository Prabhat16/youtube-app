import "./VideoItem.css";
import React from "react";

const VideoItem = ({video, onVideoSelect}) =>{
    let asset=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
   
    let time='', tArr=asset.exec(video.contentDetails.duration);
    if (tArr[1]) {
        time=tArr[1]+':';
    }
    if (tArr[2]) {
        time+=tArr[2]+':';
    } 
    // else {
    //     time+='00'+':';
    // }
    if (tArr[3]) {
        time+=tArr[3];
    } 
    else {
        time+='00';
    }

    return (
        <div onClick = {() => onVideoSelect(video)} className = "video-item item">
        `   <div className="img-wrapper">
                <img alt = {video.snippet.title} className ="ui image" src = {video.snippet.thumbnails.medium.url} />
                <div className = 'duration-time'>
                {time} &nbsp;
                </div>
            </div>`
            
                <div className = "content title_">
                    <div className = "header">{video.snippet.title}</div>
                </div>
        </div>
    )
};

export default VideoItem;