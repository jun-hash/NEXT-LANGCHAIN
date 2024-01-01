



export default function Home() {
  // fetch
  // supabase
  // .from("message_history")
  // .select("*")
  // .order("created_at", { ascending: true })
  // .then(({ data: message_history, error }) =>
  //   error ? console.log("error", error) : setMessageHistory(message_history)
  // );
  // }, []);

  // const sendMessage = (messageToSend) => {
  //   const message = messageToSend || inputValue;
  //   const body = JSON.stringify({ message: message });
  //   setInputValue("");

  //   fetch("/api/backend", {
  //     method: "POST",
  //     body,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //     })
  //     .catch((err) => console.log("err", err));
  // };


  return (
    <div className="flex h-screen">
        <div className="flex-grow h-screen flex flex-col justify-between mx-auto max-w-4xl">
          {/* Message History */}
          {/* Input Area */}
        </div>
    </div>
  )
}
