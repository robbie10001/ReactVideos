import axios from "axios";



//We have defined this variable like this so we can't change it.
const KEY = "AIzaSyD4ZeoKNIOW3N3qpKMJRfJuU8dtLKRQOgM";
//this key is going to be used inside the broswer. 
//This means that when a user accesses our application, we are sending them this api key. 
//this user could easily get access to our api key. 
//in our case, we don't really care.


//we are making a preconfigured instances of axios that already has a base url,
//and some default paramaters loaded into it! 
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
//after the baseURL we add in an options object called params. 
//this will contain all the different query strings paramaters we want added to our request. 
//
    params: {
        part: "snippet",
        maxResults: 5, 
//our key comes from our const KEY 
        key: KEY, 


    }
});
//the idea of this base url, is that later on, we will be able to get an instance 
//of our axios that we are creating right here, and will be able to say something like, 
//youtube.get('/search') and this string is taken an added to the end of the base url like the following.
//https://www.googleapis.com/youtube/v3 + '/search'