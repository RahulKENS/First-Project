import Images from "../UI/Images";
import Card from '../Contents/Card';

function Home(){
    let dummydata = [
        {
            id : '1',
            title : 'Sauvage',
            text : 'Nude is a fragrance that brings back memories of a summer romance. From the very first note, the fragrance reveals a mix of floral.',
            image1 : 'https://staticimg.titan.co.in/Skinn/Catalog/FW04PFL_2.jpg'
        },
        {
            id : '2',
            title : 'Jadore',
            text : 'Pristine is inspired by the unexpected yet refreshing drizzle on a fine spring morning - with enlivened citrus and green top notes.',
            image1 : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fragrance-women2020b-1589562509.jpg?crop=0.405xw:0.811xh;0.288xw,0.0962xh&resize=640:*'
        },
        {
            id : '3',
            title : 'Poison',
            text : 'From the very first note, the fragrance reveals a mix of floral, fruity and woody elements that compliments fruity and woody elements.',
            image1 : 'https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_2.jpg?impolicy=pqmed&imwidth=640'
        },
        {
            id : '4',
            title : 'Dolce Vita',
            text : 'A very marine heart. A comforting patchouli and musk finish. Pristine was designed to be a modern take on femininity.',
            image1 : 'https://media.allure.com/photos/614351d3934fb87214166c42/1:1/w_1196,h_1196,c_limit/Yves%20Saint%20Laurent%20Mon%20Paris.jpeg'
        },
        {
            id : '5',
            title : 'Fahrenheit',
            text : 'A very marine heart. A comforting patchouli and musk finish. Pristine was designed to be a modern take on femininity.',
            image1 : 'https://www.yslbeauty.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwc81a9ff0/square/Fragrance/For%20Her/Mon%20Paris%20Couture/3614271992468_50ml_mon-paris-couture_Alt1.jpg?sw=465&sfrm=jpg&q=70'
        },
        {
            id : '6',
            title : 'Dune pour Homme',
            text : 'From the very first note, the fragrance reveals a mix of floral, fruity and woody elements that compliments fruity and woody elements.',
            image1 : 'https://www.rd.com/wp-content/uploads/2020/10/flowerbomb-by-viktor-and-rolf-via-amazon.jpg'
        },
        {
            id : '7',
            title : 'Eau Sauvage',
            text : 'Pristine is inspired by the unexpected yet refreshing drizzle on a fine spring morning - with enlivened citrus and green top notes.',
            image1 : 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920/coco-mademoiselle-eau-de-parfum-intense-spray-3-4fl-oz--packshot-default-116660-8848376889374.jpg'
        },
        {
            id : '8',
            title : 'Dior Addict',
            text : 'Nude is a fragrance that brings back memories of a summer romance. From the very first note, the fragrance reveals a mix of floral.',
            image1 : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-womens-perfume-reviews-1635941831.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'
        }
  ]
    return(
        <div>
            <Images />      
            <Card data={dummydata}/>
        </div>
        
    );
}

export default Home;