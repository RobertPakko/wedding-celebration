import { createSignal, For, Show } from "solid-js";

interface RSVP {
  imageUrl: string
  firstName: string
  lastName: string
  blurb: string
  email: string
  addToAttendees: boolean
}

export default function RSVP() {
  const [data, setData] = createSignal<RSVP>({
    firstName: "",
    lastName: "",
    blurb: "",
    email: "",
    imageUrl: "",
    addToAttendees: false
  });

  const updateFormField = (fieldName: keyof RSVP) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setData({
      ...data(),
      [fieldName]: inputElement.value
    });
  };

  return (
    <div class="w-full h-full bg-secondary bg-opacity-40">
      <div class="p-20 flex flex-col justify-around text-center">
        <h1 class="flex-none text-4xl font-extrabold md:text-6xl mb-10">RSVP</h1>
        <div class="flex-none">
          <div class="flex flex-wrap justify-around">
            <input type="text" placeholder="First Name" class="m-5 input input-bordered w-full max-w-xs" value={data().firstName} onChange={updateFormField("firstName")} />
            <input type="text" placeholder="Last Name" class="m-5 input input-bordered w-full max-w-xs" value={data().lastName} onChange={updateFormField("lastName")} />
            <input type="text" placeholder="Email" class="m-5 input input-bordered w-full max-w-xs" value={data().email} onChange={updateFormField("email")} />
          </div>
        </div>
        <div class="flex-none">
          <div class="rating gap-1">
            <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
            <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
            <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
          </div>
        </div>
        <div class="flex-none form-control">
          <label class="label cursor-pointer">
            <span class="label-text font-bold text-xl">Add me to the public attendees list (recommended!)</span>
            <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked={data().addToAttendees} onChange={updateFormField("addToAttendees")} />
          </label>
        </div>
        <Show
          when={data().addToAttendees}
        >
          <div class="flex justify-around">
            <div>
              <label class="label">
                <span class="label-text text-xl text-bold">Upload a photo of yourself for the attendees page</span>
              </label>
              <input type="file" class="file-input file-input-bordered file-input-primary file-input-lg w-full max-w-xs" />
            </div>
            <textarea class="textarea textarea-bordered" placeholder="Tell us how you know Rob & Haley!"></textarea>
          </div>
        </Show>
        <div class="flex-none">
          <button class="btn btn-primary btn-lg btn-wide">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}