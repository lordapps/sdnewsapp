import { useEffect, useState } from 'react';
import {MeetupList, Layout} from '../components'
import {MongoClient} from 'mongodb'


function HomePage(props) {
    //const [loadeMeetups, setloadeMeetups] = useState([]);
    // useEffect(()=>{
    //     setloadeMeetups(DUMMY_MEETUPS);
    // }, []);
    return <MeetupList meetups = {
        props.meetups
    } />
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//     }
// }
export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://allord:allordP@ssw0rd@cluster0.mg81e.mongodb.net/mmsdb?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description
            }))
        },
        revalidate: 10
    }
}

export default HomePage
