import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../static-data';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const url = `/events/${year}/${month}`

    router.push(url);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
