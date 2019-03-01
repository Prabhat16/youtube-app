import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = {
        videos : [],
        selectedVideo : null
    };

    componentDidMount(){
        
        this.onSerachItemSubmit("technology")
    };

    onSerachItemSubmit = async (searchItem) =>{
        const response = await youtube.get("/search", {
            params :{
                q : searchItem,
            }
        });

        var ids = '';
        var arr = [];
        arr = response.data.items;
       
        for(let i = 0;i<arr.length;i++){

            if(i === 0){
               ids=arr[i]["id"].videoId
            }
            else{
               ids+= arr[i]["id"].videoId
            }
            if(i<arr.length-1){
                  ids+=","
            }
        }
      

        const response1 = await youtube.get("/videos", {
            params :{
                q : searchItem,
                part:'snippet,contentDetails',
                id:ids
            }
        })
       
        
       
       this.setState({videos : response1.data.items, selectedVideo : response1.data.items[0]})
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video})
    };

    render(){
        return(
            <div className = 'ui container'>
                <SearchBar onFormSubmit = {this.onSerachItemSubmit} />
                    <div className = "ui grid">
                        <div className = "ui row">
                            <div className = 'eleven wide column'>
                                <VideoDetail video = {this.state.selectedVideo}/>
                            </div>
                            <div className = "five wide column">
                                <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos} />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
};

export default App;