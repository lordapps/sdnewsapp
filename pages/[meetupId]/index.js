import {MongoClient, ObjectId} from 'mongodb'
import {MeetupDetail} from '../../components'

function MeetupDetails(props){
    return (
        <>
            <MeetupDetail 
                image = {props.meetupsData.image}
                title = {props.meetupsData.title}
                address = {props.meetupsData.address}
                description = {props.meetupsData.description}
            />
        </>
    );
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://allord:allordP@ssw0rd@cluster0.mg81e.mongodb.net/mmsdb?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
}

export async function getStaticProps(context){
    const meetupId= context.params.meetupId
    const client = await MongoClient.connect('mongodb+srv://allord:allordP@ssw0rd@cluster0.mg81e.mongodb.net/mmsdb?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const seletedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close();

    return {
        props: {
            meetupsData: {
                id: seletedMeetup._id.toString(),
                title: seletedMeetup.title,
                image: seletedMeetup.image,
                address: seletedMeetup.address,
                description: seletedMeetup.description
            }
        },
        revalidate: 10
    }
}

export default MeetupDetails;