import { useRouter } from 'next/router';
import { NewMeetupForm } from '../../components/'

function NewMeetupPage(){

    async function addMeetupHandle(enterMeetupData){
        //console.log(enterMeetupData);
        const router = useRouter();
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body:JSON.stringify(enterMeetupData),
           headers:{
               'Content-Type': 'application/json'
           }
        });
        const data = await response.json();
       // router.push('/');
        router.replace('/');
        console.log(data);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandle}/>
}

export  default NewMeetupPage ;