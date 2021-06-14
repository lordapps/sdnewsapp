import {MeetupList, Layout} from '../components'

const DUMMY_MEETUPS = [{
        id: 'm1',
        title: 'title 1 ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/800px-Meetup_Logo.png',
        address: 'address 1 ',
        description: 'description'
    }];
function HomePage() {
    return <Layout> < MeetupList meetups = {
        DUMMY_MEETUPS
    } /> </Layout>

}

export default HomePage
