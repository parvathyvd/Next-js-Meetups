import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetUpPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>React New Meetup</title>
        <meta name="description" content="Ad your own meetup places" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default newMeetUpPage;
