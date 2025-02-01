export const PhotoService = {
    getImages: () => {
      return Promise.resolve(
        [...Array(20)].map((_, index) => ({
          itemImageSrc: require(`../assets/img/galeri/${index + 1}.jpg`), 
          thumbnailImageSrc: require(`../assets/img/galeri/${index + 1}.jpg`),
          alt: `Fotoğraf ${index + 1}`,
          title: `Başlık ${index + 1}`
        }))
      );
    }
  };
  