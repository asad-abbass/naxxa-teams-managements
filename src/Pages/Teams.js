import React,{useState,useEffect} from 'react'
import Dashboard from '../Component/Dashboard';



function Teams() {
    const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-getting-started-fa774-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const user = [];
        for (const key in data){
            const teams = {
                id: key,
                ...data[key]
            };
            user.push(teams)
        }

        setIsLoading(false);
        setLoadedMeetups(user);
      });
  }, [isLoading]);

  if (isLoading) {
    return (
      <section>
        <p>Loading ....</p>
      </section>
    );
  }

    return (
        <div>
            <h1> All Users of Naxxa Consultant</h1>
            <Dashboard userList={loadedMeetups} />
        </div>
    )
}

export default Teams
