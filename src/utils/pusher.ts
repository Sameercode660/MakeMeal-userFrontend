import Pusher from "pusher-js";

export const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY!, {
  cluster: process.env.NEXT_PUBLIC_CLUSTER!,
});

