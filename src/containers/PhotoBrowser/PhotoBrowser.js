import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer.css';
import Auxiliary from "../../hoc/Auxiliary";
import PhotoBrowserDisplayer from "../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer";

const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);

  useEffect(async () => {

     await axios.get( process.env.REACT_APP_BACK_URL + '/albums/1/photos')
       //?id=1
      .then( response => {
        //console.log(response.data);
        setPhotos(updateUrls(response.data));
      } );


  }, []);

  //QuickFix for the https problem with jsonplaceholder
  const updateUrls = (photos) => {
    let newPhotos = photos.map(function(x) {
      x.url = x.url.slice(0,4) + x.url.slice(5);
      x.thumbnailUrl = x.thumbnailUrl.slice(0, 4) + x.thumbnailUrl.slice(5);
      return x;
    });

    return newPhotos;
  };

  const ShowImageViewerHandler = (clickedImageId) => {
    //console.log(clickedImageId);

    const allPhotos = photos;
    let index = allPhotos.findIndex(photo => photo.id === clickedImageId);
    let newActiveImage = allPhotos[index];
    props.history.push("/gallery/" + clickedImageId);
  };

    return (
      <Auxiliary>
            <PhotoBrowserDisplayer
              thumbnails={photos}
              showImageViewer={ShowImageViewerHandler}/>
      </Auxiliary>
    );
};

export default PhotoBrowser;
