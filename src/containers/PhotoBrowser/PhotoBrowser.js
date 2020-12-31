import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer.css';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import PhotoBrowserDisplayer from "../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer";
import Albums from "../../components/PhotoBrowserDisplayer/Albums/Albums";

const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);

  const {albumId} = props.match.params;

  useEffect(  () => {
     fetchAlbums();
     fetchPhotos(albumId);
  }, [albumId]); // follow the albumId to fetch correct photos based on the selected album

   function fetchAlbums() {
     axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums')
      .then( response => {
        console.log(response.data);
        setAlbums(response.data);
      }).catch(() => setHasError(true));
   }

   function fetchPhotos(albumId) {
     axios.get( process.env.REACT_APP_BACK_URL + '/albums/'+ albumId +'/photos')
      .then( response => {
        setPhotos(updateUrls(response.data));
      }).catch(() => setHasError(true));
   }

  //QuickFix for the https problem with jsonplaceholder
  const updateUrls = (photos) => {
    let newPhotos = photos.map(function(x) {
      x.url = x.url.slice(0,4) + x.url.slice(5);
      x.thumbnailUrl = x.thumbnailUrl.slice(0, 4) + x.thumbnailUrl.slice(5);
      return x;
    });

    return newPhotos;
  };

  const ShowImageViewerHandler = (album, clickedImageId) => {
    props.history.push("/gallery/album/"+ album + "/image/" + clickedImageId);
  };

  const changeAlbum = (clickedAlbumId) => {
    props.history.push("/gallery/album/"+ clickedAlbumId);
  };

    return (
      <Auxiliary>
        {hasError? <div>There was an error</div>
          :
          <Auxiliary>
            <div className="AlbumsContainer">
              <Albums
                albums={albums}
                changeAlbum={changeAlbum}/>
            </div>
            <PhotoBrowserDisplayer
              thumbnails={photos}
              showImageViewer={ShowImageViewerHandler}/>
          </Auxiliary>
        }

      </Auxiliary>
    );
};

export default PhotoBrowser;
