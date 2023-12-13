 let favoritesArray = [];

let videoArry = [];

let recentlyPlayedArray = [];

document.addEventListener("DOMContentLoaded", function() {
    const videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach(container => {
        const video = container.querySelector("video");
        const title = container.querySelector(".video-title").textContent;
        
        videoArry.push({ title: title, link: video.src });

           // Event listener for the "play" event
    // iframe.addEventListener("play", function () {
    //     const playingTitle = title;
    //     const playingLink = iframe.src;

    //     // Addind the played video to the recently played array
    //     recentlyPlayedArray.unshift({ title: playingTitle, link: playingLink });

    //     // Limiting the recently played array to a certain number of items (e.g., 10)
    //     if (recentlyPlayedArray.length > 10) {
    //         recentlyPlayedArray.pop(); // Remove the last item
    //     }

    //     
    //     saveRecentlyPlayed();

    //    
    //     showRecentlyPlayedVideos();
    // });

    });

   
    

    

    const addMovieBtn = document.getElementById("addMovieBtn");
    const recentlyAddedMovies = document.getElementById("recentlyAddedMovies");

    addMovieBtn.addEventListener("click", function () {
        const movieName = prompt("Enter movie name:");
        const movieLink = prompt("Enter movie link:");

        if (movieName && movieLink) {

            const videoDataItem = { title: movieName, link: movieLink };
            videoArry.push(videoDataItem);
    

            const movieItem = document.createElement("div");
            movieItem.classList.add("col-md-3", "mb-4");

            const videoContainer = document.createElement("div");
            videoContainer.classList.add("video-container");
           

            const newVideo = document.createElement("video");
            newVideo.width = "320";
            newVideo.height = "400";
            newVideo.src = movieLink;
            newVideo.controls = true;
            newVideo.autoplay = true;
            newVideo.style.backgroundColor = 'white';
            
            
           
            const videoTitle = document.createElement("p");
            videoTitle.classList.add("video-title", "mt-2");
            videoTitle.textContent = movieName;
            
            recentMsg.hidden = false;

            videoContainer.appendChild(newVideo);
            movieItem.appendChild(videoContainer);
            movieItem.appendChild(videoTitle);

            recentlyAddedMovies.appendChild(movieItem);
            saveVideo();
            if (saveVideo) {
                console.log('video saved');
            }
           
        }
    });

    function saveVideo() {
        const videoString = JSON.stringify(videoArry);
        localStorage.setItem('videoArry', videoString);
    }

    function getVideo() {
     const storedVideo = JSON.parse(localStorage.getItem('videoArry'));
    
        if (storedVideo) {
            videoArry = storedVideo;  
        }
        console.log('video retrived');
    }
    
   
    // getVideo();

    const addToFavButtons = document.querySelectorAll(".video-container button");

    
    const favouritesSection = document.getElementById("favouriteSection");

    
    addToFavButtons.forEach(button => {
        button.addEventListener("click", function() {
    
            const videoContainer = button.parentElement;
            
            
            const videoTitle = videoContainer.querySelector(".video-title").textContent;
            const videoSrc = videoContainer.querySelector("video").getAttribute("src");
            
            
            const favoriteVideo = document.createElement("div");
                 
            favoriteVideo.className = "favorite-video";
            favoriteVideo.innerHTML = `
                <video autoplay class="bg-light" width="320"  height="400" controls src="${videoSrc}"></video>
                <p class="video-title">${videoTitle}</p>
            `;
            
    
            favouritesSection.appendChild(favoriteVideo);
            favoritesArray.push({title: videoTitle, link: videoSrc})
            
            if (favoritesArray.length >= 1) {
                favouriteMsg.hidden = false;
            }
            saveFavorites()
        });
    });


function saveFavorites() {
    localStorage.setItem("favoriteVideos", JSON.stringify(favoritesArray));
}

function retrieveFavorites() {
    const favs = JSON.parse(localStorage.getItem("favoriteVideos"));

    if(favs) {
        favoritesArray = favs;
    }
}

});

// retrieveFavorites();




// https://www.youtube.com/embed/thSq2nQvBSU




// function showRecentlyPlayedVideos() {
    //     const recentlyPlayedSection = document.getElementById("recentlyPlayedMovies");
    //     recentlyPlayedSection.innerHTML = "";
    
    //     recentlyPlayedArray.forEach(video => {
    //         const videoItem = document.createElement("div");
    //         videoItem.classList.add("col-md-3", "mb-4");
    
    //         const videoContainer = document.createElement("div");
    //         videoContainer.classList.add("video-container");
    
    //         const iframe = document.createElement("iframe");
    //         iframe.width = "320";
    //         iframe.height = "320";
    //         iframe.src = video.link;
    //         iframe.title = video.title;
    //         iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    //         iframe.allowFullscreen = true;
    
    //         const videoTitle = document.createElement("p");
    //         videoTitle.classList.add("video-title", "mt-2");
    //         videoTitle.textContent = video.title;
    
    //         videoContainer.appendChild(iframe);
    //         videoItem.appendChild(videoContainer);
    //         videoItem.appendChild(videoTitle);
    
    //         recentlyPlayedSection.appendChild(videoItem);
    //     });
    // }

    
    
// getRecentlyPlayed();

// showRecentlyPlayedVideos();


 // function saveRecentlyPlayed() {
    //     localStorage.setItem("recentlyPlayedVideos", JSON.stringify(recentlyPlayedArray));
    // }
    
    // function getRecentlyPlayed() {
    //     const storedRecentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayedVideos"));
    
    //     if (storedRecentlyPlayed) {
    //         recentlyPlayedArray = storedRecentlyPlayed;
    //     }
    // }









