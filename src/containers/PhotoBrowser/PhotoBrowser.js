import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer.css';
import Auxiliary from "../../hoc/Auxiliary";
import PhotoBrowserDisplayer from "../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer";

const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(1);
  const {albumId, imageId} = props.match.params;

  useEffect( () => {
    fetchAlbums();
    fetchPhotos(albumId);
  }, []);

  async function fetchAlbums(selectedAlbum) {
    await axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums')
      //?id=1
      .then( response => {
        console.log(response.data);
        setAlbums(response.data);
      } );
  };

  async function fetchPhotos(albumId) {
    console.log("selected album at photo fetch: " + selectedAlbum);
    await axios.get( process.env.REACT_APP_BACK_URL + '/albums/'+ albumId +'/photos')
      //?id=1
      .then( response => {
        //console.log(response.data);
        setPhotos(updateUrls(response.data));
        setSelectedAlbum(albumId);
      } );
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
    //console.log(clickedImageId);

    // const allPhotos = photos;
    // let index = allPhotos.findIndex(photo => photo.id === clickedImageId);
    // let newActiveImage = allPhotos[index];
    props.history.push("/gallery/album/"+ album + "/image/" + clickedImageId);
  };

  const changeAlbum = (clickedAlbumId) => {
    console.log(clickedAlbumId + " adasdasd");
    setSelectedAlbum(clickedAlbumId);
    props.history.push("/gallery/album/"+ clickedAlbumId);

    fetchPhotos(clickedAlbumId);
  };

    return (
      <Auxiliary>
            <PhotoBrowserDisplayer
              thumbnails={photos}
              albums={albums}
              showImageViewer={ShowImageViewerHandler}
              changeAlbum={changeAlbum}/>
      </Auxiliary>
    );
};

export default PhotoBrowser;
