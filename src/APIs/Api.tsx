type Event = {
  event_name: string;
  event_description: string;
  event_details: string;
  event_venue: string;
  event_duration: string;
};

export const GetEvents = async (): Promise<Event[]> => {
  try {
    console.log(import.meta.env.VITE_FETCH_ROUTE);
    const response = await fetch(`${import.meta.env.VITE_FETCH_ROUTE}/events`);
    const returnedData = response.json();
    console.log(returnedData);
    return returnedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetSearchEvents = async (
  searchParam: string
): Promise<Event[]> => {
  try {
    console.log(import.meta.env.VITE_FETCH_ROUTE);
    const response = await fetch(
      `${import.meta.env.VITE_FETCH_ROUTE}/events/search/${searchParam}`
    );
    const returnedData = response.json();
    console.log(returnedData);
    return returnedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
