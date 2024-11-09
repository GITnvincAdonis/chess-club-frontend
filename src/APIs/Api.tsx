type Event = {
  event_name: string;
  event_description: string;
  event_details: string;
  event_venue: string;
  event_duration: string;
};
type Repofficials = {
  name: string;
  club_pos: string;
  email: string;
  image_cloud_id: string;
};
export const GetEvents = async (): Promise<Event[]> => {
  try {
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

export const GetStudentofficials = async (): Promise<Repofficials[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FETCH_ROUTE}/studentOfficials`
    );
    const returnedData = response.json();
    console.log(returnedData);
    return returnedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const GetTeacherOfficials = async (): Promise<Repofficials[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FETCH_ROUTE}/teacherOfficials`
    );
    const returnedData = response.json();
    console.log(returnedData);
    return returnedData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
