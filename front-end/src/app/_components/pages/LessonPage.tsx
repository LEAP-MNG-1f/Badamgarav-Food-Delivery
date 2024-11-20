import LessonPage from "../lesson/Lesson";

export default function HomePage() {
  return (
    <>
      <LessonPage />
    </>
  );
}

// return (
//   <div>
//     {props.foods.map((food, index) => {
//       return (
//         <div>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={food.image}
//                 alt="green iguana"
//               />

//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {food.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                   {food.price}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </div>
//       );
//     })}
//   </div>
// );
