import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage(){

    function addMeetupHandle(enterMeetupData){
        console.log(enterMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandle}/>
}

export default NewMeetupPage;