import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImagesRow() {
  return (
    <ImageList sx={{ width: 800, height: 600 }} cols={3} rowHeight={264} gap={30}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img: 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/es/4/0.0/Principal/001%20ME7A0244Cusco%20Trekking%20GER%2019%20_preview.jpg',
    title: 'Peruan Mountains',
  },
  {
    img: 'https://www.nuevatribuna.es/asset/thumbnail,992,558,center,center/media/nuevatribuna/images/2019/09/13/2019091317165554348.jpg',
    title: 'Damasco',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyTcTbMeYv2gRj7jgQeOgUGvIt8sLWHZJkw&usqp=CAU',
    title: 'Dubai',
  },
];
